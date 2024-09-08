import instance from "@/utils/axios/AxiosConfig"
import { message } from "ant-design-vue"
import {routerSetup} from '@/router'

const router = routerSetup()

//请求拦截器
instance.interceptors.request.use(
    (config)=>{
        const token  = localStorage.getItem('token')
        if(token){
            config.headers.Authorization = 'Bearer ${token}'
        }
        return config
    },
    (error)=>{
        return Promise.reject("请求错误")
    }
)

//响应拦截器
instance.interceptors.response.use(
    (response)=>{
        return response.data
    },
    (error)=>{
        if(error.response.status === '401'){
            message.error('认证失败，请重新登录');
            localStorage.removeItem('token')
            router.push('/login');
        }
        else{
        Promise.reject("响应数据错误")
        }
    }
)