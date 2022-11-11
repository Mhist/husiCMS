import router from '@/router/index'
import {getToken} from '@/utils/cookie'
import {toast} from '@/utils/notification'
// GOOD
const token = getToken()
router.beforeEach((to, from, next) => {
    if (from.path == '/login' && !token) {
        next()
    } 
    else if (to.path !== '/login' && !token) {
        toast("请先登录","error",1000)
        next({ path: '/login' }) 
    } 
    else if(token && to.path == "/login") {
        toast("请勿重复登录","error",1000)
        next({path:from.path?from.path:"/"})
    }
    else next()
})