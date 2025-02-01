import Vue from 'vue';
import VueRouter from 'vue-router';
import Principal from '../components/Principal.vue'; // Página principal
import PropertyDetails from '../components/PropertyDetails.vue'; // Página de detalles de propiedad

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal,
  },
  {
    path: '/chalet-alquiler/:title_url',
    name: 'PropertyDetails',
    component: PropertyDetails,
    props: true, // Permite pasar los parámetros de la URL como props
  },
];



const router = new VueRouter({
  mode: 'history',
  base: '/chalets/serra/',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Esto evita que la página se desplace automáticamente a la parte superior
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }; // Regresa a la parte superior de la página
    }
  }
});

export default router;
