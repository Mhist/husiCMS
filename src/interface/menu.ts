export interface IMenuItem {
    id: number;               // 本身id
    parentId: number;         // 父id
    title: string;             // 菜单标题
    icon: string;              // 菜单图标
    component:string;          // 组件路径/组件名
    hidden:string;             // 是否隐藏
    redirect:string;           // 重定向
    name:string;               // 路由名name
    path: string;              // 路由地址path 
    keep:string;               // keep--alive
    meta:Object;               // 路由元信息
}

export interface INavItem {
    title: string;
    path: string;
}

export interface ITreeMenuItem {
    id: number;
    children?: ITreeMenuItem[];
    title:string;
    name: string | undefined;
    path: string;
    parentId: number;
    icon: string;
    link?: string;
    meta:Object;               // 路由元信息
    
}

export interface IUserRouterItem {
    name?: string | undefined;
    path: string;
    redirect?: string;
    meta?: { icon: string };
    children?: IUserRouterItem[];
    component?: any;
}