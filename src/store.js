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
        const response = await axios.get(`https://679a41f8747b09cdccce3cd1.mockapi.io/Movies/${id}`);
        commit('setMovieDetail', response.data);
        commit('setLoading', false);
      } catch (error) {
        commit('setError', 'Error al cargar los detalles de la película');
        commit('setLoading', false);
      }
    }
  }
});