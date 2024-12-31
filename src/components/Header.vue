<template>
    <header>
      <div class="logo">Falaguera1A</div>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Propiedades</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed; /* Fija el header en la parte superior */
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000; /* Asegura que se mantenga encima del contenido */
    transition: top 0.3s ease-in-out; /* Transición suave al desplazarse */
    margin-bottom: 30px;
  }
  
  /* Para que el contenido debajo del header no se superponga */
  body {
    padding-top: 70px; /* Ajusta este valor dependiendo de la altura del header */
  }
  
  .logo {
    font-size: 1.8em;
    font-weight: bold;
    color: #333;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  nav li {
    margin: 0 15px;
  }
  
  nav a {
    text-decoration: none;
    color: #555;
    font-weight: 500;
  }
  
  nav a:hover {
    color: #007bff;
    transition: color 0.3s ease;
  }
  </style>
  