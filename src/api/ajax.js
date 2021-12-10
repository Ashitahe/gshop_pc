import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import store from '@/store';

// 配置进度条
NProgress.configure({ showSpinner: false });

const service = axios.create({
  baseURL: "/api",
  timeout: 30000,
});

// 设置请求拦截器，添加基础路径
service.interceptors.request.use((config) => {
  // 请求进度条
  NProgress.start();
  // 设置用户临时id
  const userTempId = store.state.user.userTempId
  config.headers.userTempId = userTempId;

  // 若当前有token则讲token自动携带进请求头
  const {token,userInfo:{userId}} = store.state.user;
  if(token){
    config.headers.token = token;
  }
  if(userId){
    config.headers.userId = userId;
  }

  
  return config;
});
// 设置响应拦截器，处理返回数据
service.interceptors.response.use(
  (response) => {
    // 隐藏进度条
    NProgress.done();
    if (response.status === 200) {
      return response.data;
    } else {
      console.log(response);
      return Promise.reject(response.message);
    }
  },
  (error) => {
    NProgress.done();
    alert(`请求出错${error.message}`||`未知错误`);
    return Promise.reject(error);
  }
);

export default service;
