import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import "./App.css";

// createApp(App).use(router).mount('#app');

const app = createApp(App);
app.use(Antd,router);
app.mount('#app');