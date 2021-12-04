// import { options } from 'less';
import ajax from './ajax';

import mockAjax from './mockAjax';


// 获取首页三级分类列表
export const reqBaseCategoryList = () =>{
    return ajax.get('/product/getBaseCategoryList');
};
// 获取首页轮播图
export const reqBannerList = () => {
    return ajax.get('/cms/banner');
}

// 模拟数据接口,获取首页楼层列表
export const reqFloors = () => mockAjax.get('/floors');

// 请求商品数据

export const reqProduct = (options) => ajax.post('/list',options)