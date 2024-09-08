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
  import {useRouter}  from 'vue-router'
 
  const router  = useRouter()
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };
  const handleFinish = (values: FormState) => {
    router.push("/home")
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
