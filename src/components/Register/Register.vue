<template>
	<div class="container">
		<form>
			<div class="m-5 text-center">
				<img alt="Vue logo" width="125" height="125" src="../../assets/logo.png">
			</div>
			<div class="mb-3">
				<div class="text-center">
					<label for="exampleInputEmail1" class="form-label">Email address</label>
				</div>
				<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
				<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
			</div>
			<div class="mb-3">
				<div class="text-center">
					<label for="exampleInputPassword1" class="form-label">Password</label>
				</div>
				<input type="password" class="form-control" id="exampleInputPassword1">
			</div>
			<div class="mb-3 form-check">
				<input type="checkbox" class="form-check-input" id="exampleCheck1">
				<label class="form-check-label" for="exampleCheck1">Check me out</label>
			</div>
			<div class="text-center">
				<button type="submit" class="btn btn-primary">Submit</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
  name: 'Register',
  props: {
    msg: String
  }
}
</script>

<style>
	form{
		#border: 2px solid red;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
</style>
