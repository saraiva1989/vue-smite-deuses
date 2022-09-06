import { createApp } from 'vue'
import './css/geral.css'
import App from './App.vue'
import router from './Rotas'
import Store from './store'

const app = createApp(App)
app.use(Store)
app.use(router)

app.mount('#app')
