import {v4 as uuidv4} from 'uuid';


export function getUserTempId(){
    let userTempId = localStorage.getItem('USER_TEMPID_KEY');

    if(userTempId) return userTempId;
    userTempId = uuidv4();
    localStorage.setItem('USER_TEMPID_KEY',userTempId);

    return userTempId
}
// 获取token，验证是否登录
export function getToken(){
    const token = localStorage.getItem('USER_TOKEN_KEY');
    return token
}
// 设置token，登录成功保存状态
export function setToken(token){
    return localStorage.setItem('USER_TOKEN_KEY',token);
}

// 删除token，退出登录后清除token
export function removeToken(){
    return localStorage.removeItem('USER_TOKEN_KEY');
}