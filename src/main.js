import { createApp } from 'vue'
import App from './App.vue'
import http from './http.js'

const app = createApp(App);
app.config.globalProperties.$http = http;
app.mount('#app');


