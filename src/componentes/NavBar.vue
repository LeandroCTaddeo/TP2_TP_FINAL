<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">CINE ORT</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto center">
          <li class="texto" v-if="!($store.state.estaLogueado)">
            Sin sesion iniciada
          </li>
          <li class="texto" v-if="($store.state.estaLogueado)">
            Bienvenido : {{$store.state.currentUser.nombre}}
          </li>
          <li class="nav-item">
            <router-link to="/" class="btn btn-primary my-3 mr-3">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/estrenos" class="btn btn-primary my-3 mr-3">Estrenos</router-link>
          </li>
          <li class="nav-item" v-if="!($store.state.estaLogueado)">
            <router-link to="/login" class="btn btn-primary my-3 mr-3">Login</router-link>
          </li>
          <li @click="LogOut()" class="btn btn-primary my-3 mr-3" v-if="($store.state.estaLogueado)">
            LogOut
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavBar',
  methods: {
    goToLogin() {
      // Redirige a la página de login
      this.$router.push('/login');
    },
    LogOut() {
      this.$store.dispatch('desloguearse');
    }
  }
}
</script>
<style scoped>
.texto {
  color: white;
  margin-right: 15px;
}
.center {
  display: inline-flex;
  align-items: center;
}
</style>