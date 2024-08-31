import type { RouteRecordRaw } from "vue-router";
//@ts-ignore
import Article from "@/views/article/index.vue"
//@ts-ignore
import HeaderBar from "@/components/HeaderBar.vue"

const route:Array<RouteRecordRaw>=[
    {
        name:'article',
        path:"/article",
        component:HeaderBar,
        meta:{
            title:"文章"
        },
        children:[{
            name:"classification",
            path:"classification",
            component:Article,
            meta:{
                title:"分类",
                hidden:true
            }
        },
        {
            name:"label",
            path:"label",
            component:Article,
            meta:{
                title:"标签",
                hidde:false
            }
        }    
    ]
    }
    
]

export default route