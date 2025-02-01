<template>
  <section class="hero-section d-flex align-items-center justify-content-center text-center text-white" id="inicio" aria-labelledby="hero-title">
    <div class="overlay">
      <!-- Título principal de la sección, mejorando SEO con palabras clave -->
      <h1 id="hero-title" class="display-4">Alquiler de Chalets en Serra, Valencia</h1>
      <p class="lead">Disfruta de la naturaleza y tranquilidad en el corazón de la Sierra Calderona</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero-section {
  position: relative;
  background-image: url('../assets/IMG_7171.webp');
  background-size: cover;
  background-position: 20% 35%; /* Centrado horizontalmente y desplazado un poco hacia arriba */
  height: 400px;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
}

.hero-section .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.47); /* Filtro oscuro para mejorar la legibilidad del texto */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: 700; /* Aumentamos el peso para un mejor impacto visual */
}

.hero-section p {
  font-size: 1.5rem;
}

/* Agregar una pequeña mejora para responsividad */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.5rem; /* Reducir el tamaño en móviles */
  }

  .hero-section p {
    font-size: 1.2rem; /* Reducir el tamaño de los párrafos en móviles */
  }
}
</style>
