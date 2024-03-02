// src/main.js などのメインエントリーファイルで
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style/global.css'; 


const app = createApp(App);
app.use(router);
app.mount('#app');

