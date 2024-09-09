import instance from "@/utils/axios/AxiosConfig";
import {type loginFormState} from "@/views/login/LoginSetUp/loginInterface"
import { log } from "console";

export const loginServie=( loginFrom:loginFormState )=>{

    const params = new URLSearchParams()
    //将数据转化成键值对
    Object.entries(loginFrom).forEach(([key, value]) => {
        console.log(key);
        console.log(value);
        
        params.append(key, value);
    });
    
    return instance({
        method:"get",
        url:"/user/login",
        params:params
    })

    
}