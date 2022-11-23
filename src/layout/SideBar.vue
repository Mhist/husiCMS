
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
        <el-avatar :size="35" :src="Logo" />
        <span>&nbsp;JiangAdmin</span>
      </div>
      <el-menu-item index="/">
        <el-icon>
          <House />
        </el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <div v-for="(item, index) of menuList" :key="index">
        <MenuItem :index="(index + 1).toString()" :item="item"  />
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
import { RouteRecordRaw } from "vue-router";
import Logo from "@/assets/logo.png";
let jsonData = [
  {
    id: 1,
    parentId: 0,
    title: "系统管理",
    icon: "Setting",
    path: "/",
    component: "",
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
    title: "媒体管理",
    icon: "Picture",
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
    title: "预留",
    icon: "Folder",
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
    title: "预留",
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
