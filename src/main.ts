import { createApp } from 'vue'
//@ts-ignore
import App from './App.vue'
import { routerSetup } from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// import './mock/mock';

const app = createApp(App)
app.use(routerSetup())
app.use(Antd)
app.mount('#app')
