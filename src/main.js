import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de importar el router aquí

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router, // Agrega el router aquí
}).$mount('#app');
