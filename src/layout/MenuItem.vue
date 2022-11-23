<template>
    <el-sub-menu v-if="item.children && item.children.length >= 1" :index="index + Date.now()">
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span v-show="!collapse"> {{ item.title }}</span>
      </template>
      <div v-for="(c, i) of item.children" :key="i">
        <menu-item :index="(i + 1).toString()" :item="c" ></menu-item>
      </div>
    </el-sub-menu>
  
  
    <el-menu-item  v-else-if="item.children && item.children.length === 1"
      :index="item.children[0].path"
      @click="navigator(item.children[0].path)"
      >
      <el-icon>
        <component :is="item.children[0].icon"></component>
      </el-icon>
      <template #title> {{ item.children[0].title }}</template>
    </el-menu-item>
  
    <el-menu-item v-else-if="item && item.parentId !== 0" :index="item.path"
    @click="navigator(item.path)"
    >
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <template #title>{{ item.title }}</template>
    </el-menu-item>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  import router from '@/router/index'
//   import { useUserStore } from 'src/store/userStore'
  export default defineComponent({
    name: "MenuItem",
    props: {
      index: {
        type: String,
        default: "",
      },
      item: {
        type: Object,
        default: {},
      },
      collapse: {
        type: Boolean,
      },
    },
    setup() {
      
    },
    methods:{
      navigator(item:any){
        console.log(item)
        router.push(`${item}`)
    }
  }


  });
  </script>
  
  <style lang="scss" scoped>
  .el-menu-item.is-active {
    background-color: #0960bd !important;
  }
  
  
  :deep(.el-menu--inline) {
    background-color: #000c17;
  }
  
  :deep(.el-menu-item:hover) {
    color: #fff !important;
  }
  </style>