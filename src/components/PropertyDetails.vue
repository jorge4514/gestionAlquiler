<template>
  <article class="property-details">
    <div class="container">
      <!-- Título de la propiedad -->
      <header>
        <h1 class="property-title text-center mb-4">{{ property.title }}</h1>
      </header>

      <!-- Contenedor principal para las imágenes y detalles -->
      <div class="row">
        <!-- Columna de las imágenes -->
        <section class="col-md-5">
          <div id="carouselPropertyDetails" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item" v-for="(image, i) in property.images" :key="i" :class="{ active: i === 0 }">
                <img :src="require(`@/assets/${image}`)" class="d-block w-100"
                  :alt="'Imagen de la propiedad ' + property.title + ' - ' + (i + 1)" loading="lazy" />
              </div>
            </div>
            <!-- Controles del carrousel -->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselPropertyDetails"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselPropertyDetails"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <!-- Columna de texto con los detalles de la propiedad -->
        <section class="col-md-7">
          <div class="property-info">
            <p>{{ property.description }}</p>
            <ul>
              <li><strong>Superficie:</strong> {{ property.size }} m²</li>
              <li><strong>Habitaciones:</strong> {{ property.rooms }}</li>
              <li><strong>Baños:</strong> {{ property.bathrooms }}</li>
              <li><strong>Precio:</strong> <span class="price">{{ property.price }}€</span></li>
            </ul>
            <a :href="'tel:' + property.contactPhone" class="btn btn-contact">Contacta</a>
          </div>
        </section>
      </div>

      <!-- Galería de imágenes adicional -->
      <section class="additional-gallery mt-5">
        <h2 class="text-center mb-4">Galería de la Propiedad</h2>
        <div class="row">
          <div class="col-md-4" v-for="(image, i) in property.images" :key="'gallery-' + i">
            <img :src="require(`@/assets/${image}`)" class="img-fluid" alt="Galería imagen"
              style="width: 500px !important; height: 500px !important;" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- Testimonios -->
      <section class="testimonials mt-5">
        <h2 class="text-center mb-4">Lo que dicen nuestros clientes</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="testimonial">
              <p>"Una experiencia increíble. El chalet es perfecto para nuestra familia. Todo es tal como se describe en
                el anuncio."</p>
              <p>- Juan Pérez</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="testimonial">
              <p>"El entorno es increíble, y el contacto con la agencia fue muy sencillo. Altamente recomendable!"</p>
              <p>- María López</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="testimonial">
              <p>"Un lugar tranquilo y hermoso para vivir. Todo lo que esperábamos y más. ¡Gracias por hacernos sentir
                tan bienvenidos!"</p>
              <p>- Antonio Gómez</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mapa de ubicación -->
      <section class="location mt-5">
        <h2 class="text-center mb-4">Ubicación</h2>
        <div class="map">
          <!-- Aquí se puede insertar un mapa de Google Maps u otro servicio -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.35031033463!2d-0.34968859305571694!3d39.8336069746987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6006c1e7676a83%3A0xcadae30e6d9d3300!2sSerra!5e0!3m2!1ses!2ses!4v1614777995079!5m2!1ses!2ses"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </section>

      <!-- Formulario de contacto -->
      <section class="contact-form mt-5" v-if="!formSubmitted">
        <h2 class="text-center mb-4">Formulario de Contacto</h2>
        <form @submit.prevent="handleContactForm" action="https://formspree.io/f/xqaawoen" method="POST">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" class="form-control" required v-model="form.name" />
          </div>
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input type="email" id="email" name="email" class="form-control" required v-model="form.email" />
          </div>
          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea id="message" name="message" class="form-control" rows="4" required
              v-model="form.message"></textarea>
          </div>
          <button type="submit" class="btn btn-contact w-100">Enviar Mensaje</button>
        </form>
      </section>

      <!-- Mensaje de éxito -->
      <section v-else class="contact-success mt-5">
        <h2 class="text-center mb-4">¡Gracias por tu mensaje!</h2>
        <p class="text-center">Nos pondremos en contacto contigo pronto.</p>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  props: ['title_url'],
  data() {
    return {
      property: null,
      form: {
        name: '',
        email: '',
        message: ''
      },
      formSubmitted: false // Estado para mostrar mensaje de éxito
    };
  },
  created() {
    this.loadPropertyData(this.$route.params.title_url);
    this.updateSEO();
  },
  methods: {
    loadPropertyData(title_url) {
      this.property = this.getPropertyById(title_url);
    },
    getPropertyById(title_url) {
      const properties = [
        {
          id: 1,
          title: "Chalet en alquiler Serra Valencia a estrenar",
          description:
            "Este amplio chalet en la exclusiva urbanización Sierra Calderona, en Serra, ofrece el equilibrio perfecto entre naturaleza y comodidad. Con 4 habitaciones, 3 baños, y un extenso jardín privado, es la opción ideal para familias que buscan tranquilidad en un entorno natural. La urbanización está perfectamente conectada y a pocos minutos del centro de Serra. Disfruta de la paz que ofrece la montaña sin renunciar a la cercanía con Valencia.",
          price: 1400,
          size: 180,
          rooms: 4,
          bathrooms: 3,
          contactPhone: "667685753",
          images: ["IMG_1636.webp", "IMG_1986.webp", "IMG_1987.webp"],
          title_url: "chalet-grande-serra"
        },
        {
          id: 2,
          title: "Chalet barato en alquiler Serra Valencia",
          description:
            "Ubicado en la tranquila urbanización Sierra Calderona, este chalet de tamaño medio ofrece 3 habitaciones y 2 baños, ideal para aquellos que buscan una propiedad espaciosa y funcional, sin perder la cercanía a la naturaleza. La propiedad cuenta con un jardín privado y un entorno perfecto para disfrutar de la paz de Serra, mientras está a solo unos minutos de las principales rutas de acceso. El hogar perfecto para una familia que aprecia la tranquilidad.",
          price: 1100,
          size: 150,
          rooms: 3,
          bathrooms: 2,
          contactPhone: "665789123",
          images: ["IMG_1636.webp", "IMG_1986.webp", "IMG_1987.webp"],
          title_url: "chalet-mediano-serra"
        },
        {
          id: 3,
          title: "Chalet en venta Serra Valencia",
          description:
            "Este chalet acogedor en la urbanización Sierra Calderona es perfecto para quienes buscan un hogar pequeño pero funcional. Con 2 habitaciones y 1 baño, es ideal para parejas o personas solas que deseen vivir en el corazón de la naturaleza sin alejarse demasiado de Valencia. La propiedad cuenta con un pequeño jardín y se encuentra en una ubicación tranquila, a solo unos minutos de Serra, ofreciendo lo mejor de la montaña con todas las comodidades.",
          price: 850,
          size: 95,
          rooms: 2,
          bathrooms: 1,
          contactPhone: "661234567",
          images: ["IMG_1636.webp", "IMG_1986.webp", "IMG_1987.webp"],
          title_url: "chalet-serra-barato"
        }
      ];
      return properties.find((property) => property.title_url === title_url);
    },

    updateSEO() {
      const metaDescription = `${this.property.title} en alquiler, con ${this.property.rooms} habitaciones y ${this.property.size} m². Disfruta de la tranquilidad en un entorno único cerca de Serra.`;
      document.title = `${this.property.title} | Alquileres en Serra`;
      const metaDescriptionTag = document.querySelector('meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute('content', metaDescription);
      }
    },
    async handleContactForm() {
      const formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('email', this.form.email);
      formData.append('message', this.form.message);
      formData.append('url', window.location.href);

      try {
        // Realizamos la petición POST a Formspree
        const response = await fetch('https://formspree.io/f/xqaawoen', {
          method: 'POST',
          body: formData
        });

        if (response) {
          this.formSubmitted = true; // Muestra el mensaje de éxito
        } else {
          alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
        }
      } catch (error) {
        this.formSubmitted = true;        
      }
    }
  }
};
</script>

<style scoped>
.property-details {
  margin-top: 70px;
  /* Margen superior para separar del header */
}

.property-title {
  font-size: 1.9rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 45px;
  margin-top: 10px;
}

.carousel-inner img {
  object-fit: cover;
  height: 350px;
  border-radius: 5px;
}

.property-info ul {
  padding-left: 0;
  list-style-type: none;
  font-size: 1.1rem;
  line-height: 1.6;
}

.property-info ul li {
  margin-bottom: 12px;
}

.property-info .price {
  font-size: 1.8rem;
  font-weight: bold;
  color: #28a745;
}

.property-info .btn-contact {
  background-color: #007bff;
  color: white;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  width: 140px;
  text-align: center;
}

.property-info .btn-contact:hover {
  background-color: #0056b3;
}

.additional-gallery .row img {
  margin-bottom: 15px;
  border-radius: 5px;
}

.testimonial {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.location .map iframe {
  border-radius: 5px;
}

.contact-form .form-group {
  margin-bottom: 15px;
}

.contact-form .btn-contact {
  background-color: #28a745;
  color: white;
  font-weight: bold;
  padding: 12px;
  border-radius: 5px;
  text-align: center;
}

.contact-form .btn-contact:hover {
  background-color: #218838;
}

.contact-success {
  text-align: center;
  padding: 20px;
}

@media (max-width: 767px) {
  .carousel-inner img {
    height: 250px;
  }

  .property-title {
    font-size: 2rem;
  }

  .property-info ul li {
    font-size: 1rem;
  }
}
</style>
