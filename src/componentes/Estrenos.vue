<template>
  <div class="container">
    <h1 class="my-5">Estrenos</h1>
    
    <!-- Listado de Estrenos -->
    <div class="row">
      <div v-for="(pelicula, index) in peliculas" :key="index" class="col-md-4 mb-4">
        <div class="card">
          <img :src="pelicula.poster" class="card-img-top" alt="Poster de la película">
          <div class="card-body">
            <h5 class="card-title">{{ pelicula.titulo }}</h5>
            <p class="card-text">{{ pelicula.descripcion }}</p>
            <button class="btn btn-danger" @click="verDetalles(pelicula)">Ver Detalles</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Desactivar ESLint solo para esta regla en este archivo
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Estrenos',
  data() {
    return {
      peliculas: [
        { titulo: 'Pelicula 1', descripcion: 'Descripción de la película 1', poster: 'https://via.placeholder.com/150' },
        { titulo: 'Pelicula 2', descripcion: 'Descripción de la película 2', poster: 'https://via.placeholder.com/150' },
        { titulo: 'Pelicula 3', descripcion: 'Descripción de la película 3', poster: 'https://via.placeholder.com/150' },
      ]
    };
  },
  methods: {
    verDetalles(pelicula) {
      this.$router.push({ name: 'detalle', params: { id: pelicula.id } });
    }
  }
};
</script>

<style scoped>
/* Aquí puedes agregar tus estilos personalizados */
</style>
