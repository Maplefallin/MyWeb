import type { RouteRecordRaw } from "vue-router";
//@ts-ignore
import FriendLink from "@/views/friendLink/index.vue"
//@ts-ignore
import HeaderBar from "@/components/HeaderBar.vue"

const route:Array<RouteRecordRaw>=[
    {
        name:'friendLink',
        path:"/friendLink",
        component:HeaderBar,
        meta:{
            title:"友链"
        },
        children:[{
            name:"main",
            path:"main",
            component:FriendLink,
            meta:{
                title:""
            }
        }]
    }
]

export default route