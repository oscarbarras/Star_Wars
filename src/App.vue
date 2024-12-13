<template>
  <div class="app">

  <Splide :options="option" aria-label="carrusel" class="splide-background">
    <SplideSlide>
      <img src="../src/assets/FO4.png" alt="Imagen 1" class="img-fluid" />
    </SplideSlide>
    <SplideSlide>
      <img src="../src/assets/f2.jpg" alt="Imagen 2" class="img-fluid" />
    </SplideSlide>
    <SplideSlide>
      <img src="../src/assets/ff2.png" alt="Imagen 3" class="img-fluid" />
    </SplideSlide>
    <SplideSlide>
      <img src="../src/assets/ff3.png" alt="Imagen 4" class="img-fluid" />
    </SplideSlide>
    <SplideSlide>
      <img src="../src/assets/ff1.jpg" alt="Imagen 5" class="img-fluid" />
    </SplideSlide>
    <SplideSlide>
      <img src="../src/assets/f4.png" alt="Imagen 6" class="img-fluid" />
    </SplideSlide>
    <SplideSlide>
      <img src="../src/assets/ff4.png" alt="Imagen 7" class="img-fluid" />
    </SplideSlide>
  </Splide>


  <header class="header">
  <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto text-center gap-5 ">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link text-warning border border-warning rounded px-3 py-1 ">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Personajes" class="nav-link text-warning border border-warning rounded px-3 py-1">Personajes</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Planetas" class="nav-link text-warning border border-warning rounded px-3 py-1">Planetas</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Peliculas" class="nav-link text-warning border border-warning rounded px-3 py-1">Películas</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Especies" class="nav-link text-warning border border-warning rounded px-3 py-1">Especies</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Vehiculos" class="nav-link text-warning border border-warning rounded px-3 py-1">Vehículos</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Naves" class="nav-link text-warning border border-warning rounded px-3 py-1">Naves Espaciales</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>



    <div class="titulo"></div>

    <main class="contenido container-fluid">
      <RouterView />
    </main>

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
  type: 'fade',
  heightRatio: 0.5,
  autoplay: true,
  interval: 5000,
  pauseOnHover: false,
  arrows: false,
  pagination: false,
  focus: 'center',
  perPage: 1,
  perMove: 1,
  rewind: true,
  cover: true,
};

onMounted(() => {});
</script>
<style>
  @import "assets/styles.scss";
</style>
