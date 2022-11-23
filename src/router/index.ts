import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
import { generateRouter,getTreeMenus } from "@/utils/menu";
import {  } from 'vue-router'
// 1. 定义路由组件.
// const Home = { template: '<div>Home</div>' }
// 也可以从其他文件导入
import Layout from '@/layout/index.vue'
import Index from '@/views/index.vue'
import Login from '@/views/login.vue'
import NotFound from '@/views/404.vue'


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes:RouteRecordRaw[] = [
  { path: '/', 
  component: Layout,
  redirect:"/",
  children:[
    {
      path: '/',
      component: Index,
    },
  ]
  },
  // layout
  { 
    path: '/', 
    component: Layout,
    name:'Layout',
    children: [
      {
        path: "/index",
        name: "Index",
        redirect: "/index/home",
        component: () =>
          import("../components/ParentView/ParentView.vue"),
        children: [
        ],
      }]
},
  { path: '/login', 
  component: Login 
  },
  //404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})




let jsonData = [
  {
    id: 1,
    parentId: 0,
    title: "系统管理",
    icon: "Setting",
    path: "/",
    component: "media/picture.vue",
    hidden: "",
    redirect: "",
    name: "",
    keep: "0",
    meta: {},
  },
  {
    id: 2,
    parentId: 0,
    title: "权限管理",
    icon: "Edit",
    path: "/",
    component: "media/picture.vue",
    hidden: "",
    redirect: "",
    name: "",
    keep: "0",
    meta: {},
  },
  {
    id: 3,
    parentId: 0,
    title: "媒体管理",
    icon: "Picture",
    path: "/",
    component: "media/picture.vue",
    hidden: "",
    redirect: "",
    name: "",
    keep: "0",
    meta: {},
  },
  {
    id: 4,
    parentId: 1,
    title: "预留",
    icon: "Folder",
    path: "/",
    component: "media/picture.vue",
    hidden: "",
    redirect: "",
    name: "",
    keep: "0",
    meta: {},
  },
  {
    id: 5,
    parentId: 1,
    title: "预留",
    icon: "Edit",
    path: "/",
    component: "media/picture.vue",
    hidden: "",
    redirect: "",
    name: "",
    keep: "0",
    meta: {},
  },
  {
    id: 6,
    parentId: 2,
    title: "菜单编辑",
    icon: "Edit",
    path: "/menuEdit",
    component: "permission/menuEdit.vue",
    hidden: "",
    redirect: "",
    name: "MenuEdit",
    keep: "0",
    meta: {},
  },
  {
    id: 7,
    parentId: 2,
    title: "权限分配",
    icon: "Edit",
    path: "/permissionAssignment",
    component: "permission/permissionAssignment.vue",
    hidden: "",
    redirect: "",
    name: "PermissionAssignment",
    keep: "0",
    meta: {},
  },
  {
    id: 8,
    parentId: 2,
    title: "用户列表",
    icon: "Edit",
    path: "/userList",
    component: "permission/userList.vue",
    hidden: "",
    redirect: "",
    name: "UserList",
    keep: "0",
    meta: {},
  },
  {
    id: 9,
    parentId: 3,
    title: "七牛云图床管理",
    icon: "Picture",
    path: "/picture",
    component: "media/picture.vue",
    hidden: "",
    redirect: "",
    name: "Picture",
    keep: "0",
    meta: {},
  },

];
const menuList: Array<any> = getTreeMenus(jsonData);
console.log(menuList)
let newRoutes = generateRouter(menuList);
console.log(newRoutes,"newRoutes")
console.log(routes)
const layout:any = routes[1];
console.log(layout,">>>>>>>>>>")
layout.children = [...newRoutes];
router.addRoute(layout);

export default  router


