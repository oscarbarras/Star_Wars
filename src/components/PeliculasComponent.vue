<template>
  
  <RouterLink :to="{ name: 'PeliculasPage', params: { episode_id: episode_id } }">
    <div class="peliculas">
      <div class="pelicula-fecha">{{ release_date }}</div>
      <div class="pelicula-titulo">{{ title }}</div>
      <div class="pelicula-director">{{ director }}</div>
      <div class="pelicula-productor">{{ producer }}</div>
      <div class="pelicula-descripcion">{{ opening_crawl }}</div>
    </div>
  </RouterLink>
</template>

<script setup>
const props = defineProps({
  episode_id: Number,
  director: String,
  title: String,
  producer: String,
  release_date: Date,
  opening_crawl: String
});
</script>
