<template>
  <section class="info-section py-5" >
    <div class="container">
      <!--<h2 class="text-center mb-4">🏘️ Chalet a Estrenar en Serra, Valencia - Alquiler en la Sierra Calderona</h2>-->
      <!-- Contenedor con el texto y la card de ubicación alineados -->
      <div class="row mt-4">
        <!-- Texto principal -->
        <div class="col-md-7 align-items-center">
          <p v-if="showFullText" class="lead text-justify">
            Este chalet pareado, totalmente nuevo, ofrece unas vistas espectaculares en la hermosa Sierra Calderona, en el municipio de Serra, Valencia. Disfruta de un amplio salón, 3 habitaciones con armarios empotrados, cocina office, baño completo, jardín privado y una zona comunitaria con piscina. ¡El lugar perfecto para vivir tranquilo pero cerca de la ciudad!
          </p>
          
          <p v-if="showFullText" class="text-justify" :style="{ display: 'block' }">
            Ubicado a tan solo 20 minutos de las hermosas playas de Valencia y con fácil acceso a importantes vías de comunicación. Este chalet te permite vivir rodeado de naturaleza sin renunciar a la comodidad de la ciudad. ¡Contáctanos ahora para más información y agenda tu visita sin compromiso!
          </p>

          <p v-if="showFullText" class="text-justify">
            📍 Serra, Valencia. A solo 20 minutos de la playa, con acceso rápido a la ciudad y rodeado de naturaleza, ¡disfruta de una ubicación privilegiada!
          </p>
          
          <div class="read-more-button text-center" v-if="isMobile()">
            <button v-if="!showFullText" @click="toggleText" class="btn btn-primary text-center">Leer más</button>
            <button v-if="showFullText" @click="toggleText" class="btn btn-secondary text-center">Leer menos</button>
          </div>
          
          
          
        </div>

        <!-- Card de Ubicación -->
        <div v-if="showFullText" class="col-md-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Ubicación del Chalet</h5>
              <p class="card-text">📍 Serra, Valencia</p>
              <!-- Google Maps Embed -->
              <iframe 
                src="https://www.google.com/maps/d/u/2/embed?mid=1pB55LGK38sDLd88LXb5hln8MhvqRV_Y&ehbc=2E312F&noprof=1" 
                width="100%" 
                height="250" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showFullText: this.isMobile() ? false : true, // Determina el estado inicial basado en el dispositivo
    };
  },
  methods: {
    toggleText() {
      this.showFullText = !this.showFullText; // Cambia el estado para mostrar/ocultar texto
    },
    isMobile() {
      // Detecta si el dispositivo es móvil usando el userAgent o matchMedia
      return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
             window.matchMedia("(max-width: 768px)").matches;
    },
  },
};
</script>


<style scoped>
.info-section {
  background-color: #f9f9f9;
  padding: 40px 0;
  border-radius: 15px;
}

.info-section h2 {
  font-size: 2rem;
  color: #333;
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 1rem;
}

.info-section p {
  font-size: 1.125rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
  text-align: justify;
}

.info-section .lead {
  font-size: 1.25rem;
  font-weight: 400;
  color: #007bff;
}

.card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.card-title {
  font-size: 1.25rem;
  color: #333;
  font-weight: 500;
}

.card-text {
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin-bottom: 10px;
}

.card-body {
  padding: 15px;
}

iframe {
  border-radius: 8px;
}

@media (max-width: 768px) {
  .info-section h2 {
    font-size: 1.8rem;
  }
  
  .info-section p {
    font-size: 1rem; /* Reduce el tamaño de la fuente */
    line-height: 1.4; /* Ajusta el interlineado */
    margin-bottom: 10px; /* Reduce el espacio entre párrafos */
  }
  
  .info-section .lead {
    font-size: 1.1rem; /* Reducir un poco más la fuente de la clase lead */
  }

  .card-title {
    font-size: 1.1rem; /* Reduce el tamaño de los títulos de la card */
  }

  iframe {
    height: 200px; /* Reduce la altura del iframe en móviles */
  }
}
</style>
