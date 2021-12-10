import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store";

Vue.use(VueRouter);

const originPush = VueRouter.prototype.push;

// 重写push方法，解决重复路由问题
VueRouter.prototype.push = function (location, onComplete, onAbort) {
  if (onAbort || onComplete) {
    return originPush.call(this, location, onComplete, onAbort);
  }
  return originPush.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      return err;
    }
  });
};

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
    };
  },
});
const checkPaths = ["/trade", "/pay", "center"];

router.beforeEach(async (to, from, next) => {
  console.log("全局前置守卫");
  const targetPath = to.path;
  const needCheck = checkPaths.some((path) => targetPath.startsWith(path));
  // 校验token是否有效,若有效则直接放行
  const { token, userInfo } = store.state.user;
  if (userInfo.name) {
    next();
    return;
  }
  // 检查需要访问的路径是不是一定要登录，若是则检查登录状态
  try {
    if (needCheck) {
      if (token) {
        // 校验token是否失效
        await store.dispatch("getUserInfo");
        next();
      } else {
        // 当前没登录且以前也未登录 强制跳转至login 完成登录后自动返回原页面
        next(`/login?redirect=${targetPath}`);
      }
    } else {
      //若目标不需要检查路径直接放行
      if (token) {
        //再次刷新时，有token，则显示登录状态
        store.dispatch("getUserInfo");
      }
      next();
    }
  } catch (err) {
    // 重置token
    store.dispatch("logout");
    console.log("路径验证错误，退出登录", err);
    next(`/login?redirect=${targetPath}`);
  }
});

export default router;
