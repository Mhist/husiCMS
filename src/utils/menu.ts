import { RouteRecordRaw } from "vue-router";
import { IMenuItem, ITreeMenuItem, IUserRouterItem } from "../interface/menu";



interface ICache {
  [key: number]: ITreeMenuItem
}
/**
 * @description 转换树形结构菜单
 * @param menuList 菜单列表
 * @author JJYang
 */
export const getTreeMenus = (menuList: IMenuItem[]): ITreeMenuItem[] => {
  const treeMenuList = [] as ITreeMenuItem[];
  const cache: ICache = {};
  menuList.forEach((treeItem) => {
    cache[treeItem.id] = treeItem;
  });

  menuList.forEach((treeItem) => {
    const parent = cache[treeItem.parentId];
    if (parent) {
      if (!parent.children) {
        parent.children = [] as IMenuItem[];
      }
      parent.children.push(treeItem);
    } else {
      treeMenuList.push(treeItem);
    }
  });
  return treeMenuList;
};



/**
 * @description 数组扁平化
 * @param target --目标数组
 * @author JJYang
 */
export function flatter(target: any) {
  if (Array.isArray(target)) {
    let result: any = [];
    target.forEach((item) => {
      if (Array.isArray(item)) {
        result = result.concat(flatter(item));
      } else {
        result.push(item);
      }
    });
    return result;
  } else {
    return target
  }
};

/**
 * @description 深拷贝
 * @param target -目标值
 * @param map -缓存容器
 * @author JJYang
 */
export const deepClone = (target: any, map: any = new Map()) => {
  if (typeof target === 'object' && target !== null) {
    const cache = map.get(target);
    if (cache) {
      return cache;
    }
    const isArray = Array.isArray(target);
    let result: any = isArray ? [] : {};
    map.set(target, result);
    if (isArray) {
      target.forEach((item, index) => {
        result[index] = deepClone(item, map);
      })
    } else {
      Object.keys(target).forEach(key => {
        result[key] = deepClone(target[key], map);
      })
    }
    return result;
  } else {
    return target
  }
}

