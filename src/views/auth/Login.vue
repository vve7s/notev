<template>
  <div class="container-fluid ps-md-0">
    <div class="row g-0">
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-dark">
        <div class="text-center w-100 d-flex align-items-center py-5">
          <div class="col-md-9 col-lg-8 mx-auto text-white">
            <img width="100" height="100" alt="Vue logo" :src="require('@/assets/logo-light.png')">
            <br>
            <br>
            <br>
            <span class="fw-bold">
              This is a NOTE saving site 
              <br>
              <br>
              ...
              <br>
              /> You can't take notes without registration.
            </span>
          </div>
        </div>
      </div>

      <div class="col-md-8 col-lg-6">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <h3 class="login-heading mb-4 fw-bold">Login</h3>

                <form>
                  <div class="form-floating mb-3">
                    <input v-model="userData.username" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input v-model="userData.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                  </div>

                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck">
                    <label class="form-check-label" for="rememberPasswordCheck">
                      Remember password
                    </label>
                  </div>

                  <div class="d-grid">
                    <button @click="login" class="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2" type="button">Sign In</button>
                    <div class="text-center">
                      <a class="small" href="#">Forgot password?</a>
                    </div>
                  </div>
                  <hr>
                  <h6 class="text-center fw-lighter">If you do not have an account</h6>
                  <hr>
                  <div class="d-grid">
                    <button @click="Register" class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="button">Sign Up</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgPath: require('@/assets/logo-light.png'),
        userData: {
          username: 'admin@admin.com',
          password: 123456789
        }
      };
    },
    methods: {
      login() {

        const formData = new FormData()
        formData.append('username', this.userData.username)
        formData.append('password', this.userData.password)

        this.$http.post("/auth/login", formData).then(response => {
          if (response.data.status) {
            this.$store.commit("setUser", response.data.data);
            this.$router.push({ path: "/" });
          } else {
            this.$eResponse(response);
          }
        }).catch(error => {
          this.$cResponse(error);
        });
      }
    }


  }
</script>

<style>
  .login {
    min-height: 100vh;
  }

  .bg-image {
    background-size: cover;
    background-position: center;
  }

  .login-heading {
    font-weight: 300;
  }

  .btn-login {
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    padding: 0.75rem 1rem;
  }
</style>