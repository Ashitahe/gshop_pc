import Vue from 'vue';
import App from './App.vue';
import router from './router';
import TypeNav from './components/TypeNav';
import Pagination from './components/Pagination';
import store from './store';
import './plugins';
import './mock/mockServer';
import * as UTILS from './utils';
import * as API from './api';

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.component('TypeNav',TypeNav);
Vue.component(Pagination.name,Pagination);




new Vue({
  beforeCreate(){
    // 设置总线
    Vue.prototype.$bus = this;
    // 挂载所有的API
    Vue.prototype.$API = API;
    // 挂载所有的工具函数库
    Vue.prototype.$UTILS = UTILS;
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
