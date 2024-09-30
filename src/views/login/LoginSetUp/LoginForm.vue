<template>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      class="login-form sign-in-form"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>
  
      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
  
      <!-- <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>
   -->
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </template>
  <script lang="ts" setup>
  import { reactive } from 'vue';
  import{type loginFormState,formState}from "@/views/login/LoginSetUp/loginInterface"
  import { useRouter } from 'vue-router';
  import { loginServie } from '@/api/user';
  import { log } from 'console';

  const router = useRouter();
  const onFinish = async(values: any) => {
    
    const result = await loginServie(formState)
    console.log(result);
    if(result.data.code === 0){
      alert("登录成功")
      localStorage.setItem("token",`Bear ${result.data.data.token}`)
      router.push("/home")
    }else{
      alert("该账户不存在")
    }
      console.log(result);
      
    
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  </script>
  
  <style scoped>
/* register */
.login-form,
.register-form {
  background-color: #fff;
  padding: 50px 80px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
  width: 100%;
}
.tiparea a {
  color: #409eff;
}
</style>

