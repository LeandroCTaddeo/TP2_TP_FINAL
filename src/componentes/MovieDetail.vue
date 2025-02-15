<template>
  <div>
    <div v-if="movieDetail">
      <h2>{{ movieDetail.title }}</h2>
      <img :src="'https://image.tmdb.org/t/p/w500/' + movieDetail.poster_path" alt="movie poster" class="img-fluid">
      <p><strong>Fecha de estreno:</strong> {{ movieDetail.release_date }}</p>
      <p><strong>Resumen:</strong> {{ movieDetail.overview }}</p>
      <p><strong>Género:</strong> {{ movieDetail.genres.map(genre => genre.name).join(', ') }}</p>
    </div>
    <div v-if="loading" class="spinner">Cargando...</div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  props: ['id'],
  computed: {
    ...mapState({
      movieDetail: state => state.movieDetail,
      loading: state => state.loading,
      error: state => state.error
    })
  },
  created() {
    this.fetchMovieDetail(this.id);
  },
  methods: {
    ...mapActions(['fetchMovieDetail'])
  }
};
</script>
<style scoped>
img {
  max-width: 100%;
  margin-bottom: 20px;
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
</style>