import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import io from "socket.io-client";

const socket = io("http://localhost:1985");


const app = createApp(App);
app.use(store);
app.use(router);
app.config.globalProperties.$socket = socket;
app.mount('#app');
