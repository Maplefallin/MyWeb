<template>
    <a-form
      ref="formRef"
      name="custom-validation"
      :model="formState"
      :rules="rules"
      v-bind="layout"
      @finish="handleFinish"
      @validate="handleValidate"
      @finishFailed="handleFinishFailed"
   
      class="register-form sign-up-form"
    >
    <a-form-item has-feedback label="Username" name="username">
        <a-input v-model:value="formState.username " type="text"  />
      </a-form-item>
      <a-form-item has-feedback label="Password" name="pass">
        <a-input v-model:value="formState.pass" type="password" autocomplete="off" />
      </a-form-item>
      <a-form-item has-feedback label="Confirm" name="checkPass">
        <a-input v-model:value="formState.checkPass" type="password" autocomplete="off" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" html-type="submit">注册</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
      </a-form-item>
    </a-form>
  </template>
  <script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import{rules,type FormState,formState,formRef} from '@/views/login/RegisterSetUp/RegisterInterface'
  import { registerService } from '@/api/user';
  import {useRouter}  from 'vue-router'
 
  const router  = useRouter()

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };
  const handleFinish = async (values: FormState) => {
  // 校验表单内容是否为空
  if (!values.username || !values.pass || !values.checkPass) {
    alert('用户名和密码不能为空');
    return;
  }
  // 校验两次密码是否一致
  if (values.pass !== values.checkPass) {
    alert('两次输入的密码不一致');
    return;
  }
  try {
    const result = await registerService(values);
    console.log(result.data);
    
    if (result.data.code === 1) {
      alert("注册失败:该用户已经存在");
    } else {
      alert("注册成功");
      router.push("/home");
    }
  } catch (error) {
    console.error("注册请求失败:", error);
    alert("注册请求失败");
  }
};
  //@ts-ignore
  const handleFinishFailed = errors => {
    console.log(errors);
  };
  const resetForm = () => {
    //@ts-ignore 
    formRef.value.resetFields();
  };
  //@ts-ignore
  const handleValidate = (...args) => {
    console.log(args);
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
