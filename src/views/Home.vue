<template>
  <Header msg="Sign up for more.."/>
  <div class="home">
    <textarea name="not" style="">Dou you think?</textarea>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style>
  textarea {
    left: 0;
    top: 3rem;
    right: 0;
    bottom: 0;
    font-size: 32pt !important;
    position: fixed;
    width: 100%;
    padding: 1rem;
    outline-style: none;
    border: 0;
  }

</style>
