import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import io from "socket.io-client";
import { appAxios } from "@/utils/appAxios";
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import appHeader from "@/components/Shared/appHeader";
import appFooter from "@/components/Shared/appFooter";

// const socket = io("http://localhost:1985");


const app = createApp(App);
app.component("appHeader", appHeader)
app.component("appFooter", appFooter)
app.use(store);
app.use(router);
app.use(VueSweetalert2);
// app.config.globalProperties.$socket = socket;
app.config.globalProperties.$http = appAxios;




app.config.globalProperties.$cResponse = function (response) {
  let errArr = [];
  for(let errors in response.response.data.errors) {
    for(let error in response.response.data.errors[errors]) {
      errArr.push(response.response.data.errors[errors][error]);
    }
  }
  errArr.forEach((data) => {
    const Toast = this.$swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', this.$swal.stopTimer)
        toast.addEventListener('mouseleave', this.$swal.resumeTimer)
      }
    });
    Toast.fire({
      icon: 'error',
      title: data
    })
  });
};
app.config.globalProperties.$eResponse = function (response) {
  if (response.data.status == false) {
    const Toast = this.$swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', this.$swal.stopTimer)
        toast.addEventListener('mouseleave', this.$swal.resumeTimer)
      }
    });

    let oneErr = "";
    if (response.data.error.description[0]) {
      oneErr = response.data.error.description
    } else {
      for (let errDesc in response.data.error.description) {
        oneErr = response.data.error.description[errDesc];
      }
    }

    Toast.fire({
      icon: 'error',
      title: oneErr ? oneErr : "Beklenmedik bir hata oluştu, lütfen daha sonra tekrar deneyiniz"
    })
  }
};
app.mount('#app');
