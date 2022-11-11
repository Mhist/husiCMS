import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import router from '../src/router/index'
const app = createApp(App)
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

import '@/utils/permission'
app.use(ElementPlus)
app.use(router)
app.mount('#app')
