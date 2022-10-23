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
    /*
    this.$appAxios.get("/test").then(response => {
      console.log(response);
    })
    */
    this.$http.get('/test').then(response => {
      console.log(response);
    }).catch(error => {
      // this.$eResponse(error)
      console.log(error.response);
    });
  }
}
</script>

<style>
  
</style>
