import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';



Vue.use(VueRouter);

const originPush = VueRouter.prototype.push;

// 重写push方法，解决重复路由问题
VueRouter.prototype.push = function(location,onComplete, onAbort){
    if(onAbort || onComplete){
        return originPush.call(this,location,onComplete,onAbort);
    }
    // return originPush.call(this,location,()=>{console.log('调用了');})
    return originPush.call(this,location)
    .catch((err)=>{
        if(VueRouter.isNavigationFailure(err)){
            return err;
        }
    })
};

export default new VueRouter({
    mode:'history',
    routes
})