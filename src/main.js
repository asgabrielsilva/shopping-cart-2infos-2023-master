import 'vue-loading-overlay/dist/css/index.css';
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import './assets/tailwind.css'

const app = createApp(App);
app.use(router);
app.use(createPinia());

app.mount('#app');