<template>
  <header class="navbar navbar-light sticky-top navbar-expand-md bg-light flex-md-nowrap p-0 shadow-lg border-0">
    <div class="container">
      <a class="navbar-brand mb-0 h1" href="#"><img class="d-inline-block align-top mx-2" src="@/assets/logo-dark.png" width="30" height="30">NOTE</a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse text-start" style="flex-grow: 0 !important;" id="navbarHeader">
        <span class="d-md-none d-inline">
          <a href="#" class="text-decoration-none text-dark px-3">
            Sign In
          </a>
          <br>
          <a href="#" @click="logout" class="text-decoration-none text-dark px-3">
            Sign Out
          </a>
        </span>
      </div>

      <div class="d-none d-md-inline">
        <span class="m-1">
          <a href="#">
            <button type="button" class="btn btn-labeled btn-outline-primary">
            <span class="btn-label"><i class="fa fa-user-o"></i></span>Sign In</button>
          </a>
        </span>
        <span class="m-1">
          <a href="#">
            <button @click="logout" type="button" class="btn btn-labeled btn-outline-danger">
            <span class="btn-label"><i class="fa fa-user-o"></i></span>Sıng Out</button>
          </a>
        </span>
      </div>

    </div>
  </header>
</template>


<script>
  export default {
    data() {
      return {
        imgPath: require('@/assets/logo-dark.png'),
      };
    },
    methods: {
      logout() {
        const formData = new FormData()
        
        formData.append('user', (JSON.stringify(this.$store.state.user)));
        this.$http.post("/auth/logout", formData).then(response => {
          console.log(response);
          if (response.data.status) {
            this.$store.commit("logoutUser");
            this.$router.push({ name: "Login" });
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