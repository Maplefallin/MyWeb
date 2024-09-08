import {reactive} from 'vue' 

interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }
  
  const formState = reactive<FormState>({
    username: '',
    password: '',
    remember: true,
  });


  export {type FormState,formState}