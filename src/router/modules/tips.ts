import type { RouteRecordRaw } from "vue-router";
//@ts-ignore
import Tips from "@/views/tips/index.vue"
//@ts-ignore
import HeaderBar from "@/components/HeaderBar.vue"

const route:Array<RouteRecordRaw>=[
    {
        name:'tips',
        path:"/tips",
        component:HeaderBar,
        meta:{
            title:"说说"
        },
        children:[{
            name:"collection",
            path:"collection",
            component:Tips,
            meta:{
                title:"空间"
            }
        },
        {
            name:"history",
            path:"history",
            component:Tips,
            meta:{
                title:"历史"
            }
        }    
    ]
    }
    
]

export default route