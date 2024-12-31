<template>
    <div v-if="visible" class="lightbox" @click="close">
      <div class="lightbox-content" @click.stop>
        <!-- Botón de cierre (X) -->
        <button class="btn-close btn-close-white position-absolute top-0 end-0 m-3" aria-label="Close" @click="close"></button>
        
        <!-- Imagen dentro del lightbox -->
        <img :src="image" class="img-fluid lightbox-image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: String,
      visible: Boolean
    },
    methods: {
      close() {
        this.$emit('close-lightbox');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Fondo oscuro con opacidad para el lightbox */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050; /* Asegura que esté encima de otros componentes */
  }
  
  /* Contenedor central para la imagen */
  .lightbox-content {
    background-color: transparent;
    border-radius: 8px;
    overflow: hidden;
    position: relative; /* Para posicionar el botón de cierre en la esquina */
  }
  
  /* Imagen dentro del lightbox */
  .lightbox-image {
    max-width: 100%;
    max-height: 80vh; /* Limita la altura de la imagen */
    object-fit: contain;
  }
  
  /* Estilo del botón de cierre (X) */
  .btn-close {
    opacity: 1 !important;
    border: none;
    font-size: 1rem;
    color: white; /* Asegura que la X sea blanca */
    background-color: transparent; /* No tendrá fondo */
    cursor: pointer;
    z-index: 1060; /* Asegura que esté encima de otros elementos */
  }
  
  /* Cambio de color al pasar el ratón por encima */
  .btn-close:hover {
    color: #ccc;
    background-color: transparent; /* Sin fondo al hacer hover */
  }
  </style>
  