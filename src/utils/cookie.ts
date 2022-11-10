import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
const TokenKey = 'admin-token'

// 获取token
export function getToken(){
    return cookies.get(TokenKey)
}
// 设置token
export function setToken(tokenKey:string){
    return cookies.set(TokenKey,tokenKey)
}
// 删除token
export function removeToken(){
    return cookies.remove(TokenKey)
}