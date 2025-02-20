<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Footer from './componentes/Footer.vue';
import NavBar from './componentes/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
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
  background-color: #202938
}
</style>