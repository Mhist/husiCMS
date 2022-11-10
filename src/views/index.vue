<template>
    <div>
        123
    </div>
</template>

<script setup lang="ts">
import { userDetail } from '@/service/userApi'
import {toast} from '@/utils/notification'

userDetail().then((res:any)=>{
    console.log(res)
    toast(res.message,"success")
}).catch((err:any)=>{
    console.log(err)
    toast(err.message,"success")
});
</script>

<style lang="scss" scoped>

</style>