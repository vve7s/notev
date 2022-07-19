<template>
  <div class="about">
    <h1><textarea @keydown.enter="SEND_MESSAGE" style="width: 250px; height: 250px;"></textarea></h1>
  </div>
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
