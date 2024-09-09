import Mock from 'mockjs';


Mock.mock("http://127.0.0.1:8080","get",{
    code:0,
    msg:"登陆成功",
    data:{
        token:"1111"
    }
})