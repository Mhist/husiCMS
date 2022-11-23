<template>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px"><SideBar/></el-aside>
        <el-container>
          <el-header><Header/></el-header>
          <el-main class="mx-10 mt-40"><router-view>123</router-view></el-main>
          <el-footer><Footer/></el-footer>
        </el-container>
      </el-container>
    </div>
  </template>
  

<script setup lang="ts">


import SideBar from '@/layout/SideBar.vue'
import Footer from '@/layout/Footer.vue'
import Header from '@/layout/Header.vue'






</script>

<style lang="scss" scoped>

</style>