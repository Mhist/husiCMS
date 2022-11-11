
<template>
  <div class="side-bar">
    <el-menu
      router
      active-text-color="#fff"
      background-color="#1d1e1fbd"
      :class="`el-menu-vertical-demo`"
      style="height: 100vh"
      text-color="#ffffffa6"
    >
      <div class="logo">
        <el-avatar :size="35" src="../assets/logo.png" />
        <span>&nbsp;YangAdmin</span>
      </div>
      <el-menu-item index="/">
        <el-icon>
          <List />
        </el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <div v-for="(item, index) of menuList" :key="index">
        <MenuItem :index="(index + 1).toString()" :item="item" />
      </div>
    </el-menu>
  </div>
</template>
  <script lang="ts">
export default {
  name: "SideBar",
};
</script>
  <script lang="ts" setup>
import { ref } from "vue";
import { getTreeMenus } from "@/utils/menu";
import MenuItem from "@/layout/MenuItem.vue";
import router from "@/router/index";
import { RouteRecordRaw } from "vue-router";
const modules = import.meta.glob("../views/**.vue");

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

let jsonData = [
  {
    id: 1,
    parentId: 0,
    title: "一级菜单A",
    icon: "Edit",
    path: "/about",
    component: "about.vue",
    hidden: "",
    redirect: "",
    name: "About",
    keep: "0",
    meta: {},
  },
  {
    id: 2,
    parentId: 0,
    title: "一级菜单B",
    icon: "Edit",
    path: "/",
    component: "",
    hidden: "",
    redirect: "",
    name: "",
    keep: "0",
    meta: {},
  },
  {
    id: 3,
    parentId: 0,
    title: "一级菜单C",
    icon: "Edit",
    path: "/",
    component: "",
    hidden: "",
    redirect: "",
    name: "",
    keep: "0",
    meta: {},
  },
  {
    id: 4,
    parentId: 1,
    title: "二级菜单A",
    icon: "Edit",
    path: "/",
    component: "",
    hidden: "",
    redirect: "",
    name: "",
    keep: "0",
    meta: {},
  },
  {
    id: 5,
    parentId: 1,
    title: "二级菜单B",
    icon: "Edit",
    path: "/",
    component: "",
    hidden: "",
    redirect: "",
    name: "",
    keep: "0",
    meta: {},
  },
  {
    id: 6,
    parentId: 2,
    title: "三级菜单C",
    icon: "Edit",
    path: "/",
    component: "",
    hidden: "",
    redirect: "",
    name: "",
    keep: "0",
    meta: {},
  },
  {
    id: 7,
    parentId: 2,
    title: "三级菜单A",
    icon: "Edit",
    path: "/",
    component: "",
    hidden: "",
    redirect: "",
    name: "",
    keep: "0",
    meta: {},
  },
  {
    id: 8,
    parentId: 3,
    title: "四级菜单A",
    icon: "Edit",
    path: "/",
    component: "",
    hidden: "",
    redirect: "",
    name: "",
    keep: "0",
    meta: {},
  },
  {
    id: 9,
    parentId: 4,
    title: "五级菜单A",
    icon: "Edit",
    path: "/",
    component: "",
    hidden: "",
    redirect: "",
    name: "",
    keep: "0",
    meta: {},
  },
];
const menuList: Array<any> = getTreeMenus(jsonData);
console.log(menuList);
// 初始化路由信息对象
const menusMap: any = {};
menuList.map((v) => {
  const { path, name, component, redirect, hidden, meta } = v;
  console.log(component,"component")
  // 重新构建路由对象
  const item = {
    path,
    name,
    component:
        modules[
            /* @vite-ignore */ `../views/${component}`
        ],
    redirect,
    hidden,
    meta,
  };
  meta.length !== 0 && (item.meta = meta);
  console.log(item.component,"item")
  // 判断是否为根节点
  if (v.parentId === 0) {
    menusMap[v.id] = item;
  } else {
    !menusMap[v.parentId].children && (menusMap[v.parentId].children = []);
    menusMap[v.parentId].children.push(item);
  }

  // 将生成数组树状菜单添加到Router中
  const routes: Array<Object> = Object.values(menusMap);
  console.log(routes, "routes>>>>>>>>>>@");
  routes.map((v:any) => {
    router.addRoute(v);
  });
});
</script>
  

  <style scoped lang="scss">
.side-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  color: #1d1e1fbd;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu--collapse {
  width: 60px;
  overflow: hidden;
}
.hideIcon:deep(.el-sub-menu .el-sub-menu__icon-arrow) {
  display: none;
}
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 48px;
  padding: 10px 4px 10px 5px;
  span {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    color: rgb(229, 229, 229);
    transition: all 0.5s ease;
  }
}
.avatar-logo {
  padding: 10px 0 5px 10px;
}
.el-menu-item.is-active {
  background-color: #0960bd !important;
}
</style>
