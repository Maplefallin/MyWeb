import type { RouteRecordRaw } from "vue-router";
//@ts-ignore
import Login from "@/views/login/index.vue"

const route:Array<RouteRecordRaw>=[
    {
        name:'login',
        path:"/login",
        component:Login,
    }
]

export default route