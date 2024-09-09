import {reactive} from 'vue' 

interface loginFormState {
    username: string;
    password: string;
    
  }
  
  const formState = reactive<loginFormState>({
    username: '',
    password: '',
  });


  export {type loginFormState,formState}