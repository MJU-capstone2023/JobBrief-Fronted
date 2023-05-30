import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

const app = createApp(App)
app.use(router)
app.config.globalProperties.$http = axios

app.mount('#app')
