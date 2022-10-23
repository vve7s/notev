<template>
  <app-header/>
  <div class="note">
    <textarea @keydown.enter="SEND_MESSAGE" class="position-fixed py-5 px-3" style="left:0;top:0;right:0;bottom:0;font-size:15pt;font-family:arial;width:100%;outline-style: none;border:0;"></textarea>
  </div>
  <app-footer/>
</template>

<script>
import io from "socket.io-client";

export default {
  data() {
    return {
    };
  },
  mounted() {
    this.$socket = io("http://localhost:1985")
    this.$socket.on("WELCOME_MESSAGE", this.WELCOME_MESSAGE)
  },
  methods: {
    WELCOME_MESSAGE(data) {
      console.log(data)
    },
    SEND_MESSAGE(e) {
      this.$socket.emit("SEND_MESSAGE", e.target.value);
    }
  }

}
</script>

<style>
  body {
    background: #fff !important;
  }
</style>