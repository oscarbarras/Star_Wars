<template>
    <div class="contenedor-peliculas" >
      <div class="Peliculas">
        <PeliculasComponent 
          v-for="(Pelicula, index) in Peliculas" 
          :key="Pelicula.uid"
          :episode_id="Pelicula.episode_id"
          :director="Pelicula.director"
          :title="Pelicula.title"
          :producer="Pelicula.producer"
          :release_date="Pelicula.release_date"
          :opening_crawl="Pelicula.opening_crawl"
        />        
      </div>
    </div>
  </template>

<script setup>
import { onMounted, ref } from 'vue';
import PeliculasComponent from '@/components/PeliculasComponent.vue'

const Peliculas=ref([]);

onMounted(()=>{
    fetch("https://swapi.dev/api/films")
        .then((response)=>response.json())
        .then((data)=>{
            Peliculas.value=data.results;
        })
        .catch((error)=>{
            console.error("Error",error)
    });
});



</script>

