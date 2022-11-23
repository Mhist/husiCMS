
<template>
<div class="flex-col my-10 ">
    <div class="flex bg-blue-300 mb-10 min-h-20 items-center justify-end">
        <div class=" border-red-700 mr-1">全屏</div>
        <div class=" mr-1">其他工具 </div>
        <div class=" mr-1">{{userName}}</div>
    </div>
   <div class="flex bg-blue-600">
    <div class="mx-10">首页</div>
    <div class="mx-10">首页</div>
    <div class="mx-10">首页</div>
    <div class="mx-10">首页</div>
    <div class="mx-10">首页</div>
   </div>
</div>
  

</template>
  
  <script lang="ts">
  import { useRouter } from "vue-router";
  import {ref} from 'vue'
  import type { Ref } from 'vue'

  import { defineComponent, computed } from "vue";
  import { userDetail } from '@/service/userApi'
  import {toast} from '@/utils/notification'
  let userName:any = ref("")
  userDetail().then((res:any)=>{
    console.log(res)
    
    userName.value = res.result?.userName || "默认";
    toast(res.message,"success")


}).catch((err:any)=>{
    console.log(err)
    toast(err.message,"success")
});

  export default defineComponent({
    name: "Header",
  
})
  </script>
