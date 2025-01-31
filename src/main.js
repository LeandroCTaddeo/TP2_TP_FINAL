import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';  // Asegúrate de que Bootstrap esté cargado
import 'bootstrap/dist/js/bootstrap.bundle.js'; // Asegúrate de que los JS de Bootstrap estén cargados

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
