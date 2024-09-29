import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  //解决“vite use `--host` to expose”
  base: './',
  server: {             
    host: '0.0.0.0',	
    // port: 8080,      
    open: true,
    proxy:{
      '/api':{
        target:"http://127.0.0.1:4523/m1/5091463-4753819-default",//真正浏览器代理发送的端口
        changeOrigin:true,
        rewrite:(path) =>path.replace(/^\/api/,'')//将api替换为空串      
      }
    }
  },
  resolve:{   
    //别名配置，引用src路径下的东西可以通过@如：import Layout from '@/layout/index.vue'
    alias:[   
      {
        find:'@',
        replacement:resolve(__dirname,'src') 
      }
    ]
  }
})
