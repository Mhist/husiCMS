<script setup lang="ts">

</script>

<template>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>

<style scoped>
.btn{
  @apply bg-purple-500 text-light-50 px-4 py-2 rounded-1 transition-all duration-1000 focus:(ring-8) hover:(bg-purple-900) ring-purple-900;
}
</style>
