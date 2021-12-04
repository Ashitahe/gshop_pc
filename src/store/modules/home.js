// import Vuex from 'vuex';
import { reqBaseCategoryList , reqBannerList , reqFloors} from '@/api';

// Vue.use(Vuex);
const state = {
    baseCategoryList:[],
    banners:[],
    floors:[],
};

const mutations = {
    REQ_CATEGORY_LIST(state,list){
        state.baseCategoryList = list;
    },
    REQ_BANNERS(state,list){
        state.banners = list;
    },
    REQ_FLOORS(state,list){
        state.floors = list
    }
};
const actions = {
    async getCategoryList({commit}){
        try {
            const res = await reqBaseCategoryList();
            commit('REQ_CATEGORY_LIST',res.splice(0,15));
          } catch (err) {
            console.log('错误',err);
          }
    },
    async getBannerList({commit}){
        try{
            const res = await reqBannerList();
            commit('REQ_BANNERS',res);
        }catch(err){
            console.log('banner出错',err);
        }
    },
    async getFloors({commit}){
        try{
            const res = await reqFloors();
            commit('REQ_FLOORS',res.data);
        }catch(err){
            console.log('floors出错',err);
        }
    }
};

const getters = {
    
};



export default {
    state,
    mutations,
    actions,
    getters
}