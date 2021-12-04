import { reqProduct } from "@/api";

const state = {
    productList:{}
};

const mutations = {
    REQ_PRODUCTINFO(state,datas){
        state.productList = datas;
    },
};

const actions = {
    async getProductInfo({commit},options){
        // 判断数据是否为空
        options = {...options};
        Object.keys(options).forEach(key => {
            if(options[key] === '' || (Array.isArray(options[key])&&options[key].length===0)){
                delete options[key];
            }
        });
        try{
            // 数据回来之前先清空
            const res = await reqProduct(options);
            commit('REQ_PRODUCTINFO',res);
        }catch(err){
            console.log('出错了',err);
        }
    }
};

const getters = {
    trademarkList(state){
        return state.productList.trademarkList || [];
    },
    attrsList(state){
        return state.productList.attrsList || [];
    },
    goodsList(state){
        return state.productList.goodsList || [];
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}