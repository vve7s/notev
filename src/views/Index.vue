<template>
  <Index/>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/Index.vue'

export default {
  components: {
    Index
  },

  beforeCreate: function() {
    console.log("beforeCreate");
    this.$appAxios.get("/test").then(response => {
      console.log(response);
    })
  }
}
</script>

<style>
  body {
    background: #000;
  }
</style>
