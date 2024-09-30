import { Router } from 'vue-router';
// @ts-ignore
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // 引入进度条样式

/**
 * 路由守卫设置函数，添加前置和后置守卫
 * @param router vue-router 路由对象
 */
export const permissonSetUp = (router: Router) => {
    // 定义路由白名单，即不需要登录就能访问的页面
    const whiteList: Array<string> = ['/login', '/about']; // 可以根据实际需要调整白名单

    // 路由前置守卫
    router.beforeEach((to, from, next) => {
        NProgress.start(); // 开始加载进度条

        const token = localStorage.getItem('token'); // 获取 token，用于判断用户是否登录

        // 如果用户访问的路由在白名单中，或者用户已经登录 (token 存在)
        if (whiteList.includes(to.path) || token) {
            next(); // 允许继续导航
        } else {
            // 如果用户没有登录，且访问的不是白名单内的路由，跳转到登录页面
            next({ path: '/login' });
        }
    });

    // 路由后置守卫
    router.afterEach(() => {
        NProgress.done(); // 结束加载进度条
    });
};
