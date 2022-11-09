<template>
    <div>
        <el-row class=" bg-blue-500 min-h-screen">
            <el-col :lg="16" :md="12" class="flex items-center justify-center flex-col">
                <div>
                    <div class="text-2xl text-black-500 mb-10 "> 欢迎光临! </div>
                    <div class="text-4xl text-light-500">弧思CMS</div>
                </div>

            </el-col>
            <el-col :lg="8" :md="12" class="bg-light-300 flex items-center justify-center flex-col">
                <h2 class="text-4xl">欢迎回来</h2>
                <el-form :model="ruleForm" class="my-10" :rules="rules"  ref="ruleFormRef">
                    <el-form-item label="用户名" label-width="150px" prop="username">
                        <el-input v-model.trim="ruleForm.username" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon><Avatar /></el-icon>
                        </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="密码" label-width="150px" prop="password">
                        <el-input v-model.trim="ruleForm.password" placeholder="请输入密码">
                            <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                        </el-input>
                    </el-form-item>
                    <el-button type="primary" style="min-width: 300px;" class="ml-30 bg-blue-700" @click="submitForm(ruleFormRef)" :loading="loading">登录{{loading}}</el-button> 
                </el-form>

            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { reactive,ref } from 'vue'
import {useRouter} from 'vue-router'
import { ElNotification, FormInstance, FormRules } from 'element-plus'
import { login } from '@/service/userApi'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
let loading = ref(false)

const router = useRouter()
// do not use same name with ref
const ruleForm = reactive({
    username: '',
    password: '',
})

const onSubmit = () => {
    console.log('submit!')
}
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入有效的用户名', trigger: 'blur' },
    { min: 4, max: 12, message: '长度在4到12位', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入有效的密码', trigger: 'blur' },
    { min: 4, max: 12, message: '长度在4到12位', trigger: 'blur' },
  ],

 
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
        loading.value = true;
        login(ruleForm.username,ruleForm.password).then((res:any)=>{
            const token = res.result.token
            ElNotification({
                message:res.message,
                type:'success'
            })
            const hasToken = cookies.get('admin-token')
            if(hasToken){
                cookies.remove("admin-token")
            }
            // 存储token和用户信息
            cookies.set('admin-token',token)
            // 跳转到后台首页
            router.push("/")
        }).finally(()=>{
            loading.value = false
        })
       
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style scoped>

</style>