<template>
  <div id="nav">
  	<div class="container" style="margin-right: 0px;">
		  <div class="row">
		    <div class="col text-center text-muted">
		      {{msg}}
		    </div>
		    <div class="col text-end">
		      <router-link to="/">Home</router-link> |
		  		<router-link to="/register">Register</router-link> |
		  		<router-link to="/login">Login</router-link>
		    </div>
		  </div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
	msg: String
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>