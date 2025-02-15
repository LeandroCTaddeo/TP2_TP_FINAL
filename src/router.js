import Vue from 'vue';
import Router from 'vue-router';
import Home from './componentes/Home.vue'; // Asegúrate de que la ruta sea correcta
import Estrenos from './componentes/Estrenos.vue';
import MovieDetail from './componentes/MovieDetail.vue';
Vue.use(Router);
export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/estrenos', component: Estrenos },
    { path: '/detalle/:id', name: 'detalle', component: MovieDetail }
  ]
})