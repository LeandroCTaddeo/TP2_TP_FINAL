<template>
  <div class="card" style="width: 18rem;">
    <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" class="card-img-top" alt="movie poster">
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <p class="card-text">{{ movie.overview.substring(0, 100) }}...</p>
      <router-link :to="'/movie/' + movie.id" class="btn btn-primary">Ver detalles</router-link>
    </div>
  </div>
</template>
<script>

export default {

  name: 'MovieCard',

  props: {

    movie: Object

  }

};
</script>
<style scoped>
.card {

  margin-bottom: 20px;

}
</style>