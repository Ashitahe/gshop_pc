import { getUserTempId,getToken,setToken,removeToken } from "@/utils";
import {reqLogin,reqUserInfo,reqLogout} from '@/api'

const state = {
    useTempId:getUserTempId(),
    token:getToken(),
    userInfo:{}
};

const mutations = {
    SET_USERINFO(state,userInfo){
        state.userInfo = userInfo;
    },
    SET_TOKEN(state,token){
        state.token = token;
    }
};

const actions = {
    // 登录验证
    async login({commit},loginInfo){
        const res = await reqLogin(loginInfo);
        if(res.code === 200){
            const {token} = res.data;
            // 保存token 
            console.log('登录成功后的token',token);
            setToken(token);
            // 保存用户信息
            commit('SET_USERINFO',res.data);
            // 更新token
            commit('SET_TOKEN',token);
        }else{
            throw new Error(res.message || '登录失败');
        }
    },
    // 验证token可用性，拉取用户信息
    async getUserInfo({commit}){
        const res = await reqUserInfo();
        if(res.code === 200){
            const userInfo = res.data;
            commit('SET_USERINFO',userInfo);
        }else{
            throw new Error(res.message||'获取用户信息失败');
        }
    },
    // 退出登录
    async logout({commit}){
        const res =  await reqLogout();
        console.log(res,'退出登录信息');
        if(res.code === 200){
            // 退出成功清理用户信息
            commit('SET_USERINFO',{});
            // 清理token
            commit('SET_TOKEN','');
            // 清除token
            removeToken();
            console.log('执行了清除');
        }else{
            throw new Error('退出失败');
        }
        return res;
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