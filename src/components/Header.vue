<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#inicio">Tu Hogar Ideal</a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/chalets/serra/#inicio">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/chalets/serra/#propiedades">Propiedades</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/chalets/serra/#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>


<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/* Espacio para que el contenido no se solape con el header */
body {
  padding-top: 70px; /* Ajusta este valor según la altura del header */
}

/* Estilos adicionales si deseas personalizar */
.navbar-brand {
  font-size: 1.8em;
  color: #333;
}

.navbar-nav .nav-link {
  color: #555;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #007bff;
}
</style>
