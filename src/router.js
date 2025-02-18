import Vue from 'vue';
import Router from 'vue-router';
import Home from './componentes/Home.vue';
import Estrenos from './componentes/Estrenos.vue';
import MovieDetail from './componentes/MovieDetail.vue';
import FormUsuario from './componentes/FormUsuario.vue';
import Login from './componentes/Login.vue';
import Carousel from './componentes/Carousel.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/estrenos', component: Estrenos },
    { path: '/detalle/:id', name: 'detalle', component: MovieDetail },
    { path: '/registro', name: 'registro', component: FormUsuario },
    { path: '/login', name: 'login', component: Login },
    { path: '/formUsuario', component: FormUsuario },
    { path: '/carousel', name: 'carousel', component: Carousel }
  ]
});
