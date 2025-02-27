// import pinia
import { createPinia } from 'pinia'
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'

import './assets/main.css'

// Every Vue application starts by creating a new application instance with the createApp function
// Create a pinia instance (the root store) and pass it to the app as a plugin:
createApp(App).use(createPinia()).mount('#app')


// other type of call
// const pinia = createPinia()
// const app = createApp(App)
// app.use(pinia)
// app.mount('#app')