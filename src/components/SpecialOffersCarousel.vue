<template>
    <div class="carousel-container mb-5">
        <h2 class="text-center mb-3">Urbanización</h2>
        <div id="carouselOfertas" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(offer, index) in specialOffers" :key="index" :class="{ active: index === 0 }">
                    <div class="carousel-img-container">
                        <img :src="require(`@/assets/${offer.image}`)" class="d-block w-100" alt="Oferta especial" 
                        @click="openLightbox(require(`@/assets/${offer.image}`))" loading="lazy"/>
                    </div>
                    <div class="carousel-caption d-none d-md-block">
                        <p class="carousel-description">{{ offer.description }}</p>
                    </div>
                </div>
            </div>
            <!-- Botones de navegación (flechas) -->
            <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselOfertas'" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" :data-bs-target="'#carouselOfertas'" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        specialOffers: Array
    },
    methods: {
      openLightbox(image) {
        this.$emit('open-lightbox', image);
      },
    },
};
</script>

<style scoped>
/* Contenedor de la imagen */
.carousel-img-container {
    width: 100%;
    height: 400px; /* Establecemos una altura fija para las imágenes */
    overflow: hidden; /* Aseguramos que las imágenes no se desborden del contenedor */
    border-radius: 8px; /* Bordes ligeramente redondeados */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Imagen redondeada ligeramente */
.carousel-inner img {
    width: 100%; /* Aseguramos que la imagen ocupe todo el contenedor */
    height: 100%; /* Aseguramos que la imagen ocupe toda la altura */
    object-fit: cover; /* Aseguramos que la imagen se ajuste sin distorsionarse */
    border-radius: 15px; /* Bordes ligeramente redondeados */
}

/* Descripción dentro del carrusel */
.carousel-caption {
    background-color: rgba(0, 0, 0, 0.6); /* Fondo semitransparente para el texto */
    padding: 10px;
    border-radius: 10px;
    bottom: 20px; /* Colocamos la descripción un poco más abajo */
}

/* Estilo para la descripción */
.carousel-description {
    font-size: 1rem;
    color: #fff;
    font-weight: 400;
    margin: 0;
}
</style>
