<template>
    <footer class="bg-light py-4 mt-5">
      <div class="container text-center">
        <p class="mb-1">
          <strong>Tu Hogar Ideal</strong> - Alquileres en Serra y Valencia
        </p>
        <p class="mb-0">
          Encuentra tu hogar ideal en Serra o Valencia. Alquileres modernos y totalmente equipados.
        </p>
        <p class="mt-3 mb-0">
          <a href="mailto:contacto@.com" class="text-decoration-none">contacto@.com</a>
        </p>
        <p class="mt-2 mb-0">
          <small>&copy; 2025 Tu Hogar Ideal. Todos los derechos reservados.</small>
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  footer {
    background-color: #f8f9fa;
    color: #495057;
    font-family: 'Afacad Flux', sans-serif;
  }
  
  footer a {
    color: #007bff;
    transition: color 0.3s ease;
  }
  
  footer a:hover {
    color: #0056b3;
  }
  
  footer small {
    color: #6c757d;
  }
  </style>
  