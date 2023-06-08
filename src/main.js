import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';

const app = createApp(App);
app.use(router);
app.use(store); // Vuex 스토어 등록
app.config.globalProperties.$http = axios;

app.mount('#app');
