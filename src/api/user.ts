import instance from "@/utils/axios/AxiosConfig";
import {type loginFormState} from "@/views/login/LoginSetUp/loginInterface"
import { FormState } from "@/views/login/RegisterSetUp/RegisterInterface";


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

export const registerService=( registerFrom:FormState)=>{
    
    const registerData = {
        username : registerFrom.username,
        password : registerFrom.pass
    }

    return instance({
        method:"post",
        url:"/user/register",
        data:registerData
    })

}