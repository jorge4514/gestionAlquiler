<template>
    <div class="carousel-container mb-5">
      <h2 class="text-center mb-4">Serra: Tot Natura</h2>
      <div class="card shadow-sm">
        <div id="carouselDestacados" class="carousel slide">
          <div class="carousel-inner">
            <div
              class="carousel-item"
              v-for="(image, index) in featuredImages"
              :key="index"
              :class="{ active: index === 0 }"
            >
              <img
                :src="require(`@/assets/${image.image}`)"
                class="d-block w-100"
                :alt="image.title"
                @click="openLightbox(require(`@/assets/${image.image}`))"
                loading="lazy"
              />
            </div>
          </div>
          <!-- Controles del carrusel -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselDestacados"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselDestacados"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="card-body text-center">
          <p class="card-text text-muted">Serra, un encantador pueblo en el corazón de la Sierra Calderona, combina naturaleza, tranquilidad y comodidad. Con rutas de senderismo, impresionantes vistas y a solo 30 minutos de Valencia, es el lugar ideal para desconectar sin alejarse de la ciudad. Perfecto para familias y amantes de la vida al aire libre.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      featuredImages: Array,
    },
    methods: {
      openLightbox(image) {
        this.$emit('open-lightbox', image);
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    max-width: 800px;
    max-height: 600px;
    margin: 0 auto;
  }
  
  .card {
    border: none;
    border-radius: 15px;
    overflow: hidden;
  }
  
  .carousel-inner img {
    object-fit: cover;
    max-height: 400px;
    width: 100%;
  }
  
  .card-body {
    padding: 1.5rem;
    background-color: #f8f9fa;
  }
  
  .card-text {
    font-size: 1rem;
    color: #6c757d;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    z-index: 10;
  }
  
  
  .carousel-control-prev:hover,
  .carousel-control-next:hover {
    background-color: transparent;
  }
  
  @media (max-width: 767px) {
    .carousel-inner img {
      max-height: 300px;
    }
  }
  </style>
  