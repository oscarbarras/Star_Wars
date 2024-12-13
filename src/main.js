import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@splidejs/splide/dist/css/splide.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap'; 
import 'animate.css';


const app = createApp(App)

app.use(router)

app.mount('#app')
