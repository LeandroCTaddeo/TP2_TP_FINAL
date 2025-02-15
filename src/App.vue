<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from './componentes/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar,
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
</style>