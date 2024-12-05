<template>
  <div class="app">

    <header class="header">
      <nav>
        <ul class="menu">
          <li><RouterLink to="/" class="menu-item">Inicio</RouterLink></li>
          <li><RouterLink to="/Personajes" class="menu-item">Personajes</RouterLink></li>
          <li><RouterLink to="/Planetas" class="menu-item">Planetas</RouterLink></li>
          <li><RouterLink to="/Peliculas" class="menu-item">Peliculas</RouterLink></li>
          <li><RouterLink to="/Especies" class="menu-item">Especies</RouterLink></li>
          <li><RouterLink to="/Vehiculos" class="menu-item">Vehiculos</RouterLink></li>
          <li><RouterLink to="/Naves" class="menu-item">Naves Espaciales</RouterLink></li>
        </ul>
      </nav>
    </header>

    <div class="titulo"></div>

    <div class="contenido"></div>

      
      <RouterView />


    <div class="fondoPantalla">
      <Splide :options="option" aria-label="carrusel">
        <SplideSlide>
          <img class="fondo" src="../src/assets/FO4.png" alt="7">
        </SplideSlide>
        <SplideSlide>
          <img class="fondo" src="../src/assets/f2.jpg" alt="2">
        </SplideSlide>
        <SplideSlide>
          <img class="fondo" src="../src/assets/ff2.png" alt="3">
        </SplideSlide>
        <SplideSlide>
          <img class="fondo" src="../src/assets/ff3.png" alt="4">
        </SplideSlide>
        <SplideSlide>
          <img class="fondo" src="../src/assets/ff1.jpg" alt="5">
        </SplideSlide>
        <SplideSlide>
          <img class="fondo" src="../src/assets/f4.png" alt="6">
        </SplideSlide>
        <SplideSlide>
          <img class="fondo" src="../src/assets/ff4.png" alt="7">
        </SplideSlide>
      </Splide>
    </div>
      
   
  <footer class="footer">
    <div class="letra">
      <span>STAR WARS</span>
    </div>
    <div class="letra1">
      <span>OSCAR B. C. &reg</span>
    </div>

    <div class="letra">
      <span>2024</span>
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
      heightRatio: 0.5,
      autoplay  : true, 
      interval  : 5000, 
      pauseOnHover: false, 
      arrows: false,
      pagination: false,
      focus       : 'center',    
      perPage     : 1,           
      perMove     : 1,
      rewind: true    
    };

  onMounted(() => {
  });
</script>

<style>
  @import "assets/styles.scss";
</style>
