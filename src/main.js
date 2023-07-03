import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'wl-core' 

const app = createApp(App);

app.use(ElementPlus);
app.use(App)
app.mount('#app')