import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './amplify.js';     // ← ensures Amplify is configured

createApp(App)
    .use(router)
    .mount('#app');

