<template>
  <div class="container">
    <h1 class="my-5">Bienvenidos al cine ORT!</h1>
    <!-- Carrusel de imágenes -->
    <div id="carouselExampleAutoplaying" class="carousel slide" data-ride="carousel" data-interval="3000">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/Images/imagen1.png" class="d-block w-100" alt="Imagen 1">
        </div>
        <div class="carousel-item">
          <img src="@/assets/Images/imagen2.png" class="d-block w-100" alt="Imagen 2">
        </div>
        <div class="carousel-item">
          <img src="@/assets/Images/imagen3.png" class="d-block w-100" alt="Imagen 3">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleAutoplaying" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleAutoplaying" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- Botones -->
     <br>
    <button class="btn btn-success my-3 mr-3" @click="goToEstrenos">Ver Estrenos</button>
  </div>
</template>
<script>
/* eslint-disable vue/multi-word-component-names */

export default {
  name: 'Home',
  methods: {
    goToEstrenos() {
      this.$router.push('/estrenos');
    }
  }
}
</script>
<style scoped>
h1 {
  color: white;
}
.container {
  background-color: #343a40;
  color: #343a40;
  min-height: 85.6vh; /* Ocupa el 100% de la altura de la pantalla */
}
</style>