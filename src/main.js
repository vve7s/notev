import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import io from "socket.io-client";
import { appAxios } from "@/utils/appAxios";


const socket = io("http://localhost:1985");


const app = createApp(App);
app.use(store);
app.use(router);
app.config.globalProperties.$socket = socket;
app.config.globalProperties.$appAxios = appAxios;
app.mount('#app');
