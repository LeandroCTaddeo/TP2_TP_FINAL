<template>
  <div class="container">
  <h2 class="text-center my-4">Estrenos</h2>
  <div v-if="loading" class="spinner">Cargando...</div>
  <div v-if="error" class="error">{{ error }}</div>
  <div v-else class="row">
  <div v-for="movie in movies" :key="movie.id" class="col-md-4 mb-4">
  <div class="card">
  <div class="card-body">
  <h5 class="card-title">{{ movie.TituloPelicula }}</h5>
  <button @click="toggleSynopsis(movie.id)" class="btn btn-primary">
               {{ movie.showSynopsis ? "Ocultar Sinopsis" : "Ver Sinopsis" }}
  </button>
  <p v-if="movie.showSynopsis" class="mt-2">{{ movie.Sinopsis }}</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </template>
  <script>
  /* eslint-disable vue/multi-word-component-names */
  import axios from "@/axios"; // Importamos axios
  export default {
   name: "Estrenos",
   data() {
     return {
       movies: [],
       loading: false,
       error: null,
     };
   },
   methods: {
     async fetchMovies() {
       this.loading = true;
       this.error = null;
       try {
         const response = await axios.get("Movies"); // Llama a MockAPI
         this.movies = response.data.map(movie => ({
           ...movie,
           showSynopsis: false, // Agregamos una propiedad para manejar el botón
         }));
       } catch (error) {
         this.error = "Error al cargar las películas.";
       } finally {
         this.loading = false;
       }
     },
     toggleSynopsis(id) {
       const movie = this.movies.find(m => m.id === id);
       if (movie) {
         movie.showSynopsis = !movie.showSynopsis;
       }
     }
   },
   created() {
     this.fetchMovies();
   }
  };
  </script>
  <style scoped>
  h2 {
    color: white;
  }
  .spinner {
   text-align: center;
   font-size: 20px;
   color: #007bff;
  }
  .error {
   color: red;
   text-align: center;
  }
  .card {
   text-align: center;
  }
  </style>