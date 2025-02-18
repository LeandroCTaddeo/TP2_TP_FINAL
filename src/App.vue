<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from './componentes/FooterComponent.vue';
import NavBar from './componentes/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent,
  },
};
</script>
<style>
h1 {
  color: blue;
  font-size: 2rem;
  text-align: center;
  margin-top: 20px;
}
#app {
  background-color: #343a40
}
</style>