import { reqProduct } from "@/api";
// import { options } from "less";

const state = {
    attrsList:[],
    goodsList:[],
    pageNo:0,
    pageSize:10,
    total:0,
    totalPages:0,
    trademarkList:[]
};

const mutations = {
    REQ_PRODUCTINFO(state,datas){
        state.attrsList = datas.attrsList;
        state.goodsList = datas.goodsList;
        state.pageNo = datas.pageNo;
        state.total = datas.total;
        state.totalPages = datas.totalPages;
        state.trademarkList = datas.trademarkList;
    },
};

const actions = {
    async getProductInfo({commit},options){
        try{
            const res = await reqProduct(options);
            commit('REQ_PRODUCTINFO',res);
        }catch(err){
            console.log('出错了',err);
        }
    }
};

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}