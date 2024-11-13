import './styles/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { persist } from 'pinia-persists'


import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
// pinia use plugin for persist
pinia.use(persist({ }))

app.use(pinia)
app.use(router)

app.mount('#app')
