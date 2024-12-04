import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@splidejs/splide/dist/css/splide.min.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
