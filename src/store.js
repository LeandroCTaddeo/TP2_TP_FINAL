import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    estaLogueado: false,
    usuarioActual: null,
    esAdmin: false,
    failUser: false,
    currentUser: null,
    idUser: null,
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
    },
    desloguearse(state) {
      state.usuarioActual = null;
      state.estaLogueado = false;
      state.failUser = false;
      state.currentUser = null;
      state.idUser = null;
      state.esAdmin = false;
    },
    loguearse(state, usuario) {
      state.usuarioActual = usuario;
      state.estaLogueado = true;
      state.currentUser = usuario;
      state.idUser = usuario.id;
    },
    loguearseAdmin(state, usuario) {
      state.usuarioActual = usuario;
      state.estaLogueado = true;
      state.esAdmin = true;
      state.currentUser = usuario;
      state.idUser = usuario.id;
    },
    failLogin(state) {
      state.failUser = true;
    }
  },

  actions: {
    async fetchMovieDetail({ commit }, id) {
      commit('setLoading', true);
      try {
        const response = await axios.get(`https://679a41f8747b09cdccce3cd1.mockapi.io/Movies/${id}`);
        commit('setMovieDetail', response.data);
      } catch (error) {
        commit('setError', 'Error al cargar los detalles de la película');
      } finally {
        commit('setLoading', false);
      }
    },
    desloguearse({ commit }) {
      commit('desloguearse');
    },
    loguearse({ commit }, usuario) {
      commit('loguearse', usuario);
    },
    loguearseAdmin({ commit }, usuario) {
      commit('loguearseAdmin', usuario);
    },
    failLogin({ commit }) {
      commit('failLogin');
    }
  },

  plugins: [
    new VuexPersistence({
      storage: window.localStorage
    }).plugin
  ]
});