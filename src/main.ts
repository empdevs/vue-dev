import Vue, { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router';
import Antd ,{ message }from 'ant-design-vue';
import '../node_modules/ant-design-vue/dist/antd.css';
import VSwitch from 'v-switch-case';
import BootstrapVue3 from 'bootstrap-vue-3';
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import "./App.css";

// createApp(App)
// .use(router)
// .use(Antd)
// .use(BootstrapVue3)
// .use(VSwitch)
// .mount('#app');


const app = createApp(App);
// app.config.productionTip = false;
app.use(router);
app.use(Antd);
app.use(BootstrapVue3);
app.use(VSwitch);
app.mount('#app');
app.config.globalProperties.$message = message;