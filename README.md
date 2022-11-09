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



### 7.安装windcss

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





