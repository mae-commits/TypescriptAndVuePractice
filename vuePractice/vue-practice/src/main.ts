import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Create App besed on './App.vue', and then use './router/index.ts' as the router system.
// 'index.ts' is the base of router, which defines paths.
createApp(App).use(store).use(router).mount('#app')
