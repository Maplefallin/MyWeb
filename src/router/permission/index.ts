import { RouteRecordName } from 'vue-router'
//@ts-ignore
import NProgress from 'nprogress'
import "nprogress/nprogress.css"

import { Router } from 'vue-router'

export const permissonSetUp=(router:Router)=>{
    beforeSetUp(router)
    afterSetUp(router)
}

//路由白名单，没有token也可以访问到的路径
const whiteList:Array<String> = ['/login']

const beforeSetUp=(router:Router)=>{
    const token = localStorage.getItem('token')
    router.beforeEach((from,to,next)=>{
        if(whiteList.includes(to.path)||!token){
            next()
        }
        else{
            next({name:from.name as RouteRecordName})
        }
        NProgress.start()
    })
}

const afterSetUp=(router:Router)=>{
    router.afterEach((from,to)=>{
        NProgress.done()
    })
}
