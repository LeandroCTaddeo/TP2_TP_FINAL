<template>
  <div class="container">
    <h1 class="my-5">Bienvenidos al cine ORT!</h1>
    <!-- Componente Carousel -->
    <Carousel />
    <!-- Botón de Estrenos -->
    <br>
    <button class="btn btn-success my-3 mr-3" @click="goToEstrenos">Ver Estrenos</button>
  </div>
</template>

<script>
  /* eslint-disable vue/multi-word-component-names */
import Carousel from '@/componentes/Carousel.vue';

export default {
  name: 'Home',
  components: {
    Carousel
  },
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
  background-color: #202938;
  min-height: 79.1vh;
}
</style>
