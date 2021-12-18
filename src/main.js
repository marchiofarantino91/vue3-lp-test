const { createApp } = require('vue')
import App from './App.vue'
import createRouter from './router/'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
const app = createApp(App)



app.use(createRouter())
app.mount('#app')