# 一、vue3后台管理系统

## 1.技术选型：

vue3+vite+less+koa2+mysql+element plus+typescript+windcss

* [Vue.js - 渐进式 JavaScript 框架 | Vue.js (vuejs.org)](https://cn.vuejs.org/)
* [Vite | 下一代的前端工具链 (vitejs.dev)](https://cn.vitejs.dev/)
* [Less 快速入门 | Less.js 中文文档 - Less 中文网 (bootcss.com)](https://less.bootcss.com/)
* [Koa(koa.js)中文网 -- 基于 Node.js 平台的下一代 web 开发框架 (koajs.com.cn)](https://www.koajs.com.cn/#)
* [Sequelize 简介 | Sequelize 中文文档 | Sequelize 中文网](https://www.sequelize.cn/)
* [一个 Vue 3 UI 框架 | Element Plus (gitee.io)](https://element-plus.gitee.io/zh-CN/)
* [文档简介 · TypeScript中文网 · TypeScript——JavaScript的超集 (tslang.cn)](https://www.tslang.cn/docs/home.html)
* [Home | Windi CSS](https://cn.windicss.org/)



## 2.基本项目搭建

node版本要求：14.18+ 16+

当前系统版本：

| 当前     | 版本     |
| -------- | -------- |
| node版本 | v14.18.0 |
| npm版本  | v6.14.5  |


```bash
npm create vite@latest
```



## 3.地址

| 标题     | 地址     |
| -------- | -------- |
| 项目名 | husiCMS(弧思后台管理系统) |
| 本地文件地址  | D:\EngProject\vue3\husiV3\husiCMS  |
| GitHub地址  | https://github.com/Mhist/husiCMS  |
| 项目启动地址  | http://127.0.0.1:5173/  |



## 4.设置淘宝镜像源



1.淘宝镜像源

```bash
npm config set registry https://registry.npm.taobao.org
```



2.官方镜像源（初始源）

```bash
//初始源
https://registry.npmjs.org/
npm config set registry https://registry.npmjs.org/
```



## 5.安装element-plus

```bash
npm install element-plus --save
```

按需导入：

```bash
npm install -D unplugin-vue-components unplugin-auto-import
```

vite配置：

```tsx
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```



## 6.安装ts-node

新项目使用使用 `npm init @vitejs/app`创建项目，添加别名时，想要引入[node](https://so.csdn.net/so/search?q=node&spm=1001.2101.3001.7020)的path模块，vscode提示错误



`找不到模块 ‘path’ 或其相对应的类型声明`
`找不到名称"__dirname"`



原因分析：path模块是`node.js`内置的功能，但是`node.js`本身并不支持`typescript`，所以直接在`typescript`项目里使用是不行的

解决方法：安装`@types/node`

```bash
npm install @types/node --save-dev
```



## 7.安装windcss

```bash
npm i -D vite-plugin-windicss windicss
```

vite配置：

```tsx
// vite.config.js
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS(),
  ],
}
```

```vue
<script setup lang="ts">

</script>

<template>
  <button class="btn">按钮</button>
</template>

<style scoped>
.btn{
  @apply bg-purple-500 text-light-50 px-4 py-2 rounded-1 transition-all duration-1000 focus:(ring-8) hover:(bg-purple-900) ring-purple-900;
}
</style>
```

使用简化形式时、报错：unknown at rule @apply

解决方法：

```bash
npm install --save-dev stylelint stylelint-config-standard
```

创建sylelint配置：

stylelint.config.js

```js
module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  },
};

```

setting.json

```json
// 禁用css/less/scss内置验证

"css.validate": false,

"less.validate": false,

"scss.validate":false
```



## 8.安装vue-router

```bash
npm install vue-router@4
```
新建router文件夹、新建index.ts文件
```
import VueRouter from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default  router
```

main.ts中导入并使用：

```tsx
import router from '../src/router/index'
app.use(router)
```



## 9.安装网络请求库axios

### 安装网络请求库

```bash
npm install axios
```

```tsx
import Axios from 'axios'
const axios:any = Axios.create({
    baseURL: 'http://119.91.213.59',
    timeout: 3000,
    headers: {
       //添加数据头为json
    'Content-Type':'application/json',
    'Authorization': "AUTH_TOKEN",
  }
      
  });

export default axios
```

### 使用实例：

```tsx
import axios from "./api";



export function login(userName:string,password:string){

  return axios.post("users/login",{

​    userName,

​    password

  })

}
```

### 在vue文件中调用：

```
import { login } from '@/service/userApi'
```

```
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
        login(ruleForm.username,ruleForm.password).then((res:any)=>{
            console.log(res)
            console.log(res.data.result.token)
            ElNotification({
                message:res.data.message,
                type:'success'
            })
            // 存储token和用户信息

            // 跳转到后台首页
            router.push("/")
        })
        .catch((err:any)=>{
            console.log(err)
            ElNotification({
                message:err.response.data.message || '请求失败',
                type:'error'
            })
        })
    } else {
      console.log('error submit!', fields)
    }
  })
```



## 10.cookie操作

 

 [vue3-cookies - npm (npmjs.com)](https://www.npmjs.com/package/vue3-cookies)

###  安装vue-cookies

```bash
npm i vue3-cookies
```

### 使用vue-cookies

```tsx
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
const hasToken = cookies.get('admin-token')
if(hasToken){
    cookies.remove("admin-token")
}
// 存储token和用户信息
cookies.set('admin-token',token)
```



## 11.添加拦截器

```tsx
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

```tsx
import Axios from 'axios'
import { ElNotification } from 'element-plus'
import { useCookies } from "vue3-cookies";


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

  const { cookies } = useCookies();
  const token = cookies.get('admin-token')
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
    ElNotification({
      message:err.response.data.message || '请求失败',
      type:'error'
  })
  return Promise.reject(err.response.data);
  }else{
    ElNotification({
      message:'网络错误、请检查网络后重试',
      type:'error'
  })
  }
 
 
});

export default axios
```

## 12.统一封装cookie相关方法

### 新建utils文件夹、新建cookie.ts

```tsx
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
```

### 在login.vue中使用

```tsx
import { getToken,setToken,removeToken} from '@/utils/cookie'
```

```tsx
const hasToken = getToken()
if(hasToken){
    removeToken()
}
// 存储token和用户信息
setToken(token)
```

### 在api.ts中使用

```tsx
// 在发送请求之前做些什么
  const token = getToken()
  if(token){
    config.headers["token"] = token
  }
```



## 13.element-plus消息提示封装

### 定义封装函数：

```tsx
import { ElNotification } from 'element-plus';
import { EpPropMergeType } from 'element-plus/es/utils';

// 提示消息
export function toast(
    message: string,
    type: EpPropMergeType<
        StringConstructor,
        'success' | 'warning' | 'info' | 'error',
        unknown
    > = 'success',
    duration: number = 3000 //单位：毫秒
) {
    ElNotification({
        message,
        type,
        duration,
    });
}

```

### 在login.vue中使用：

```tsx
import {toast} from '@/utils/notification'
toast(res.message,"success")
```

### 在响应拦截器错误处理中使用：

```tsx
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
```

