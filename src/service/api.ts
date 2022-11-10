import Axios from 'axios'
import { ElNotification } from 'element-plus'
import { getToken } from '@/utils/cookie'
import { toast } from '@/utils/notification';


const axios:any = Axios.create({
    baseURL: 'http://119.91.213.59',
    timeout: 3000,
    headers: {
       //添加数据头为json
    'Content-Type':'application/json',
  }
      
  });

  // 添加请求拦截器
axios.interceptors.request.use(function (config:any) {
  // 在发送请求之前做些什么
  const token = getToken()
  if(token){
    config.headers["token"] = token
  }
  return config;
}, function (error:any) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response:any) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data;
}, function (err:any) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  if(err.response){
    const errMessage = err.response.data.message||'请求失败'
    toast(errMessage,'error')
  return Promise.reject(err.response.data);
  }else{
      toast('网络错误、请检查网络后重试','error')
  }
 
 
});

export default axios
