<template>
  <div id="app">
    <Header />
    <main>
      <!-- Aquí Vue Router renderiza el componente según la ruta activa -->
      <router-view />
    </main>
  </div>
</template>

<script>
// Importa Vue Router y el archivo de rutas
import Vue from "vue";
import VueRouter from "vue-router";
import Header from "./components/Header.vue";
import router from './router'; // Asegúrate de que este es el archivo correcto

// Usa Vue Router
Vue.use(VueRouter);

export default {
  name: "App",
  components: {
    Header,
  },
  router,
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

main {
  padding: 20px;
}
</style>
