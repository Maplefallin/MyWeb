import type { RouteRecordRaw } from "vue-router";
//@ts-ignore
import Home from "@/views/home/home.vue"
//@ts-ignore
import HeaderBar from "@/components/HeaderBar.vue"

const route:Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'',
        redirect:'/login',
        meta:{
            title:''
        }
    },
    {
        name:'home',
        path:"/home",
        component:HeaderBar,
        meta:{
            title:"主页"
        },
        children:[{
            name:"page",
            path:"page",
            component:Home,
            meta:{
                title:"主页"
            }
        }]
    }
]

export default route