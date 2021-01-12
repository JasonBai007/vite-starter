import { createApp } from 'vue'
// 引入动画库
import 'animate.css'

// 完整引入饿了么Plus（默认英文版）
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 自定义饿了么组件库主题样式（build时报错）
// import '@/assets/theme/element-variables.scss'

// 汉化饿了么组件库（深度依赖需要在vite.config.js中的optimizeDeps的include中预先编译）
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'

// 引入全局状态管理仓库
import store from "@/store";

import App from './App.vue'
import router from './router/index.js'
import http from './http.js'

const app = createApp(App);
app.config.globalProperties.$http = http;
app.use(router).use(store).use(ElementPlus, { locale }).mount('#app');


