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
