import type { RouteRecordRaw } from "vue-router";
//@ts-ignore
import ERROR from "@/views/404/404.vue"
const route : Array<RouteRecordRaw>= [{
    name:"404",
    path:"/:pathMatch(.*)*'",
    component:ERROR
}]

export default route