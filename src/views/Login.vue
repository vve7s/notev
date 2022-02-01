<template>
  <Header />
  <div class="container-fluid" style="padding-top: 20vh;">
  	<section class="row justify-content-center">
  		<section class="col-10 col-sm-8 col-md-6 col-lg-6 col-xl-3">
	  		<form class="form-container">
				  <div class="form-group text-center mb-3">
	        	<img alt="Vue logo" width="125" height="125" src="../assets/logo.png">
	        </div>
				  <div class="form-group mb-3 text-start">
				    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
				  </div>
				  <div class="form-group mb-4">
				    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
				  </div>
				  <div class="form-group mb-3 text-center">
					  <button type="submit" class="form-control btn btn-primary">Log In</button>
					</div>
				</form>
			</section>
  	</section>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue'

export default {
  name: 'Login',
  components: {
    Header
  }
}
</script>

<style>
  .form-container {
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 0 10px 0;
  }
</style>