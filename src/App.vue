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

    
    
<!-- <div class="splide" id="splide">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="../src/assets/f11.jpg" alt="Imagen 1" class="splide__image">
      </li>

      <li class="splide__slide">
        <img src="../src/assets/f2.jpg" alt="Imagen 2" class="splide__image">
      </li>

      <li class="splide__slide">
        <img src="../src/assets/f3.jpg" alt="Imagen 3" class="splide__image">
      </li>

      <li class="splide__slide">
        <img src="../src/assets/f4.png" alt="Imagen 4" class="splide__image">
      </li>
    </ul>
  </div>
</div> -->


    <div class="titulo"></div>

    <div class="contenido"></div>

      
      <RouterView />
   
  <footer class="footer">
    <div class="letra">
      <span>STAR WARS</span>
    </div>
    <div class="letra">
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
  import Splide from '@splidejs/splide'; 

// onMounted(() => {
//   new Splide('#splide', {
//     type       : 'fade', 
//     heightRatio: 0.5,
//     autoplay  : true, 
//     interval  : 3000, 
//     pauseOnHover: false, 
//     arrows: false,
//     pagination: false,
//     focus       : 'center',    
//     perPage     : 1,           
//     perMove     : 1,    
//   }).mount();
// });
</script>

<style>
  @import "assets/styles.scss";
</style>
