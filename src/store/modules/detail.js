import { reqDetailInfo } from "@/api";

const state = {
    DetailInfo:{}
};
const mutations = {
    SKUINFO(state,skuInfo){
        state.DetailInfo = skuInfo;
    }
};
const actions = {
    async getProductDetailInfo({commit},skuId){
        try{
            const res = await reqDetailInfo(skuId);
            // console.log(res);
            commit('SKUINFO',res.data);
        }catch(err){
            console.log('商品详情获取失败',err);
        }
    }
};

const getters = {
    categoryView(state){
        return state.DetailInfo.categoryView || {};
    },
    skuInfo(state){
        return state.DetailInfo.skuInfo || {};
    },
    skuImageList(state){
        const skuInfo = state.DetailInfo.skuInfo;
        return skuInfo ? skuInfo.skuImageList : [{imgUrl:1}];
        // return state.DetailInfo.skuInfo.skuImageList || [];
    },
    spuSaleAttrList(state){
        return state.DetailInfo.spuSaleAttrList || [];
    },
    valuesSkuJson(state){
        return state.DetailInfo.valuesSkuJson || '';
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}