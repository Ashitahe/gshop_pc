import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 配置进度条
NProgress.configure({ showSpinner: false });

const service = axios.create({
  baseURL: '/mock',
  timeout: 30000,
});

// 设置请求拦截器，添加基础路径
service.interceptors.request.use((config) => {
  // 请求进度条
  NProgress.start();
  return config;
});
// 设置响应拦截器，处理返回数据
service.interceptors.response.use(
  (response) => {
    // 隐藏进度条
    NProgress.done();
    if (response.data.code === 200) {
      return response.data;
    } else {
      return Promise.reject(response.message);
    }
  },
  (error) => {
    NProgress.done();
    // console.log(error);
    alert(`请求出错${error.message}`||`未知错误`);
    return Promise.reject(error);
  }
);

export default service;
