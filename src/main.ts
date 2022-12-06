import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import Router from './router';
import Antd from 'ant-design-vue';
import BootstrapVue from 'bootstrap-vue-3';
import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
// createApp(App).use(router).mount('#app');
const app = createApp(App);
app.use(Router);
app.use(Antd);
app.use(BootstrapVue);
app.mount("#app");
