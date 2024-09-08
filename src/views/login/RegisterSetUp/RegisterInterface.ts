import { reactive, ref } from 'vue';
import type { Rule } from 'ant-design-vue/es/form';
import type { FormInstance } from 'ant-design-vue';


 interface FormState {
    username:string;
    pass: string;
    checkPass: string;
    
  }
  const formRef = ref<FormInstance>();
  const formState = reactive<FormState>({
    username: '',
    pass: '',
    checkPass: '',
    
  });
  
  const validatePass = async (_rule: Rule, value: string) => {
    if (value === '') {
      return Promise.reject('Please input the password');
    } else {
      if (formState.checkPass !== '') {
        //@ts-ignore
        formRef.value.validateFields('checkPass');
      }
      return Promise.resolve();
    }
  };
  const validatePass2 = async (_rule: Rule, value: string) => {
    if (value === '') {
      return Promise.reject('Please input the password again');
    } else if (value !== formState.pass) {
      return Promise.reject("Two inputs don't match!");
    } else {
      return Promise.resolve();
    }
  };
  
  const rules: Record<string, Rule[]> = {
    pass: [{ required: true, validator: validatePass, trigger: 'change' }],
    checkPass: [{ validator: validatePass2, trigger: 'change' }]
  };

  export{ rules, type FormState,formState,formRef}