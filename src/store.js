import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieDetail: null,
    loading: false,
    error: null
  },
  mutations: {
    setMovieDetail(state, movie) {
      state.movieDetail = movie;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    }
  },
  actions: {
    async fetchMovieDetail({ commit }, id) {
      commit('setLoading', true);
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=es-ES`);
        commit('setMovieDetail', response.data);
        commit('setLoading', false);
      } catch (error) {
        commit('setError', 'Error al cargar los detalles de la película');
        commit('setLoading', false);
      }
    }
  }
});
