// import { options } from 'less';
// import { method } from "lodash";
import ajax from "./ajax";
import mockAjax from "./mockAjax";

// 获取首页三级分类列表
export const reqBaseCategoryList = () => {
  return ajax.get("/product/getBaseCategoryList");
};
// 获取首页轮播图
export const reqBannerList = () => {
  return ajax.get("/cms/banner");
};

// 模拟数据接口,获取首页楼层列表
export const reqFloors = () => mockAjax.get("/floors");

// 请求商品数据

export const reqProduct = (options) => ajax.post("/list", options);

// /api/item/{ skuId }
// 请求商品详细数据

export const reqDetailInfo = (skuId) => {
  return ajax({
    url: `/item/${skuId}`,
    method: "get",
  });
};

// 对购物车商品数量信息进行修改
// /api/cart/addToCart/{ skuId }/{ skuNum }

export const addToShopCart = (skuId, skuNum) => {
  return ajax({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post",
  });
};

// 获取购物车列表 /api/cart/cartList
export const reqCartList = () => {
  return ajax({
    url: "/cart/cartList",
    method: "get",
  });
};
// 更改选中状态 /api/cart/checkCart/{skuID}/{isChecked}
export const reqCheckedStatus = (skuId, isChecked) => {
  return ajax({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: "get",
  });
};

// 删除购物车商品 /api/cart/deleteCart/{skuId}
export const reqDeleteCartItem = (skuId) => {
  return ajax({
    url: `/cart/deleteCart/${skuId}`,
    method: "delete",
  });
};

// 获取订单详情 /api/order/auth/trade
export const reqOrder = () => {
  return ajax({
    url: `/order/auth/trade`,
    method: "get",
  });
};

// 提交订单 /api/order/auth/submitOrder?tradeNo={tradeNo}

export const postOrder = (tradeNo, tradeInfo) => {
  return ajax({
    url: `/order/auth/submitOrder`,
    params:{tradeNo},
    data: tradeInfo,
    method: "post",
  });
};

// 获取订单支付信息 /api/payment/weixin/createNative/{orderId}

export const orderPay = (orderId) => {
  return ajax({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get'
  })
}
// 获取订单支付状态 /api/payment/weixin/queryPayStatus/{orderId}
export const reqOrderStatus = (orderId) => {
  return ajax({
    url:`/payment/weixin/queryPayStatus/${orderId}`,
    method:'get'
  })
}

// 获取支付信息 /api/order/auth/{page}/{limit} GET
export const reqPay = (page, limit) => {
  return ajax({
    url: `/order/auth/${page}/${limit}`,
    method: "get",
  });
};

// 登录请求 /api/user/passport/login

export const reqLogin = (loginInfo) => {
  return ajax({
    url: "/user/passport/login",
    method: "post",
    data: loginInfo,
  });
};

// 请求注册验证码 /user/passport/sendCode/{phone}
export const reqCode = (phone) => {
  return ajax({
    url: `/user/passport/sendCode/${phone}`,
    method: "get",
  });
};
// 注册用户 /api/user/passport/register
export const reqRegister = (userInfo) => {
  return ajax({
    url: "/user/passport/register",
    method: "post",
    data: userInfo,
  });
};
// 校验用户登录token是否有效
export const reqUserInfo = () => ajax("/user/passport/auth/getUserInfo");

// 用户退出登录  /api/user/passport/logout
export const reqLogout = () => ajax(`/user/passport/logout`);

// /*
// 18.获取地址大区列表
// /api/user/userAddress/auth/findBaseRegion GET
// */
// export const reqAddressBaseRegion = () =>
//   ajax.get(`/user/userAddress/auth/findBaseRegion`);

// /*
// 19.根据地址大区获取省份
// /api/user/userAddress/auth/findBaseProvinceByRegionId/{regionId} GET
// */
// export const reqAddressBaseProvinceByRegionId = (regionId) =>
//   ajax.get(`/user/userAddress/auth/findBaseProvinceByRegionId/${regionId}`);

// /*
// 20.新增用户地址
// /api/user/userAddress/auth/save POST
// */
// export const reqSaveUserAddress = (userAddressInfo) =>
//   ajax.post(`/user/userAddress/auth/save`, userAddressInfo);

// /*
// 21.删除用户地址
// /api/user/userAddress/auth/delete/{userAddressId} GET
// */
// export const reqRemoveUserAddress = (userAddressId) =>
//   ajax.get(`/user/userAddress/auth/delete/${userAddressId}`);

// /*
// 22.更新用户地址
// /api/user/userAddress/auth/update POST
// */
// export const reqUpdateUserAddress = (userAddressId) =>
//   ajax.post(`/user/userAddress/auth/update`, userAddressId);
