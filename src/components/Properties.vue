<template>
    <div class="properties mb-5" id="propiedades">
      <h2 class="text-center mb-4">Propiedades disponibles</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="(property, index) in properties" :key="index">
          <div class="card shadow-sm">
            <!-- Carrusel de imágenes de cada propiedad -->
            <div :id="'carouselProperty' + index" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item" v-for="(image, i) in property.images" :key="i" :class="{ active: i === 0 }">
                  <img :src="require(`@/assets/${image}`)" @click="openLightbox(require(`@/assets/${image}`))" class="d-block w-100" :alt="'Imagen de la propiedad ' + (index + 1)"  style="border-radius: 5px !important;"/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselProperty' + index" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" :data-bs-target="'#carouselProperty' + index" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
  
            <!-- Información de la propiedad -->
            <div class="card-body">
              <h5 class="card-title">{{ property.title }}</h5>
              <p class="card-text">{{ property.description }}</p>
              <ul class="list-unstyled">                
                <li><strong>Superficie:</strong> {{ property.size }} m²</li>
                <li><strong>Habitaciones:</strong> {{ property.rooms }}</li>
                <li><strong>Baños:</strong> {{ property.bathrooms }}</li>
                <li><strong>Precio:</strong> <span class="price">{{ property.price }}€</span></li>
              </ul>
              <a :href="'tel:' + property.contactPhone" class="btn btn-primary w-100 mt-3">Contacta</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        properties: [
          {
            title: "Pareado en Sierra Calderona",
            description:
              "Chalet pareado en plena Sierra Calderona, a tan solo 29 km de Valencia capital. Excelente entorno residencial con piscina comunitaria.",
            price: 1130,
            size: 125,
            rooms: 4,
            bathrooms: 3,
            contactPhone: "667685753",
            images: ["IMG_1636.jpg", "IMG_1986.jpg", "IMG_1987.jpg"],
          },
          {
            title: "Pareado en Sierra Calderona",
            description:
              "Casa más pequeña pero igualmente acogedora, ideal para parejas o familias pequeñas. Cerca de Serra, con acceso a la naturaleza.",
            price: 800,
            size: 95,
            rooms: 3,
            bathrooms: 2,
            contactPhone: "667685753",
            images: ["IMG_1636.jpg", "IMG_1986.jpg", "IMG_1987.jpg"],
          },
          {
            title: "Pareado en Sierra Calderona",
            description:
              "Casa más pequeña pero igualmente acogedora, ideal para parejas o familias pequeñas. Cerca de Serra, con acceso a la naturaleza.",
            price: 800,
            size: 95,
            rooms: 3,
            bathrooms: 2,
            contactPhone: "667685753",
            images: ["IMG_1636.jpg", "IMG_1986.jpg", "IMG_1987.jpg"],
          },
        ],
      };
    },
    methods: {
      openLightbox(image) {
        this.$emit('open-lightbox', image);
      },
    },
  };
  </script>
  
  <style scoped>
  .properties {
    margin-top: 30px;
  }
  
  .carousel-inner img {
    object-fit: cover;
    height: 300px;
  }
  
  .card-img-top {
    object-fit: cover;
    height: 400px;
  }
  
  .card-body ul {
    padding-left: 0;
  }
  
  .card-body ul li {
    margin-bottom: 8px;
  }

  .btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.card-body ul li {
  margin-bottom: 8px;
}

.card-body ul li .price {
  font-size: 1.3rem;  /* Tamaño de fuente mayor */
  font-weight: bold;  /* Hacerlo en negrita */
  color: #000000; /* Color verde para hacerlo más atractivo */
  background-color: #f8f9fa00; /* Fondo claro para el precio */
  padding: 8px 15px; /* Espaciado alrededor del precio */
  border-radius: 5px; /* Bordes redondeados */
  display: inline-block; /* Asegura que se comporte como un bloque */
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.carousel-control-prev-icon {
 background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e") !important;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' opacity='1' viewBox='0 0 14 14' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") !important;
}

.card{
  border-radius: 18px !important;
}

  </style>
  