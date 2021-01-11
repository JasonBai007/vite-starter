import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import http from './http.js'

const app = createApp(App);
app.config.globalProperties.$http = http;
app.use(router).mount('#app');


