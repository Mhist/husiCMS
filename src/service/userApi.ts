import axios from "./api";

export function login(userName:string,password:string){
    return axios.post("users/login",{
        userName,
        password
    })
}