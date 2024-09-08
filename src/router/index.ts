import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";
import { permissonSetUp } from './permission'
export const routerSetup=()=>{
    const routes = import.meta.glob("./modules/*.ts",{eager:true})
    const routeList :Array<RouteRecordRaw> = []
    Object.keys(routes).forEach(key=>{
        if (Array.isArray((routes[key] as any).default)){
            routeList.push(...(routes[key] as any).default)
        }
        else {
            routeList.push((routes[key] as any).default)
        }
    })

    const router = createRouter({
        history:createWebHashHistory(),
        routes:routeList
    })

    permissonSetUp(router)
    return router 
}