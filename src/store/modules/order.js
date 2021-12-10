
import { reqOrder ,reqPay} from "@/api";

const state = {
    // 交易信息
    orderInfo:{},
    // 支付信息
    payInfo:{}
};

const mutations = {
    RECIVE_OREDERINFO(state,orderInfo){
        state.orderInfo = orderInfo;
    },
    RECIVE_PAYINFO(state,payInfo){
        state.payInfo = payInfo;
    }
};

const actions = {
    // 获取交易信息
    async getOrderInfo({commit}){
        const res = await reqOrder();

        if(res.code === 200){
            console.log(res.data);
            commit('RECIVE_OREDERINFO',res.data);
        }
    },
    // 获取支付信息
    async getPayInfo({commit},{page,limit}){
        const res = await reqPay(page,limit);
        if(res.code === 200){
            console.log('支付1',res);
            commit('RECIVE_PAYINFO',res.data);
        }
    }
};

const getters = {
    totalNum(state){
        return state.orderInfo.totalNum || 0 ;
    },
    totalAmount(state){
        return state.orderInfo.totalAmount || 0;
    },
    detailArrayList(state){
        return state.orderInfo.detailArrayList || [];
    },
    userAddressList(state){
        return state.orderInfo.userAddressList || [];
    },
    tradeNo(state){
        return state.orderInfo.tradeNo || '';
    },
    records(state){
        return state.payInfo.records || [];
    },
    totalOrder(state){
        return state.payInfo.total || 0;
    }

};

export default {
    state,
    mutations,
    actions,
    getters
}