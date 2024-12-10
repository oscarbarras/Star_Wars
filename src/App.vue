<template>
  <div class="app">
    <header class="header">
      <nav class="container">
        <ul class="menu d-flex flex-wrap justify-content-center gap-5">
          <li><RouterLink to="/" class="menu-item">Inicio</RouterLink></li>
          <li><RouterLink to="/Personajes" class="menu-item">Personajes</RouterLink></li>
          <li><RouterLink to="/Planetas" class="menu-item">Planetas</RouterLink></li>
          <li><RouterLink to="/Peliculas" class="menu-item">Películas</RouterLink></li>
          <li><RouterLink to="/Especies" class="menu-item">Especies</RouterLink></li>
          <li><RouterLink to="/Vehiculos" class="menu-item">Vehículos</RouterLink></li>
          <li><RouterLink to="/Naves" class="menu-item">Naves Espaciales</RouterLink></li>
        </ul>
      </nav>
    </header>

    <div class="titulo"></div>

    <main class="contenido container-fluid">
      <RouterView />
    </main>

    <div class="fondoPantalla">
  <Splide :options="option" aria-label="carrusel">
    <SplideSlide>
      <img class="fondo" src="../src/assets/FO4.png" alt="Imagen 1">
    </SplideSlide>
    <SplideSlide>
      <img class="fondo" src="../src/assets/f2.jpg" alt="Imagen 2">
    </SplideSlide>
    <SplideSlide>
      <img class="fondo" src="../src/assets/ff2.png" alt="Imagen 3">
    </SplideSlide>
    <SplideSlide>
      <img class="fondo" src="../src/assets/ff3.png" alt="Imagen 4">
    </SplideSlide>
    <SplideSlide>
      <img class="fondo" src="../src/assets/ff1.jpg" alt="Imagen 5">
    </SplideSlide>
    <SplideSlide>
      <img class="fondo" src="../src/assets/f4.png" alt="Imagen 6">
    </SplideSlide>
    <SplideSlide>
      <img class="fondo" src="../src/assets/ff4.png" alt="Imagen 7">
    </SplideSlide>
  </Splide>
</div>

    <footer class="footer mt-auto">
      <div class="container d-flex justify-content-between align-items-center">
        <span class="letra">STAR WARS</span>
        <span class="letra1">OSCAR B. C. &reg</span>
        <span class="letra">2024</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import { onMounted } from 'vue';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';

  let option = {
      type       : 'fade',
      heightRatio: 1, 
      heightRatio: 0.5,
      autoplay  : true, 
      interval  : 5000, 
      pauseOnHover: false, 
      arrows: false,
      pagination: false,
      focus       : 'center',    
      perPage     : 1,           
      perMove     : 1,
      rewind: true,
      cover: true,
    };

  onMounted(() => {
  });
</script>

<style>
  @import "assets/styles.scss";
</style>
