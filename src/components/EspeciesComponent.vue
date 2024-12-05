<template>
<div class="contenedor-especies">
    <div class="contenedorespecie">
      <div class="especie">
        <div class="mio">Nombre: <span class="api   ">{{ name }}</span></div>
        <div class="mio">Clasificación: <span class="api">{{ classification }}</span></div>
        <div class="mio">Designación: <span class="api">{{ designation }}</span></div>
        <div class="mio">Altura promedio: <span class="api">{{ average_height }} cm</span></div>
        <div class="mio">Colores de piel: <span class="api">{{ skin_colors }}</span></div>
        <div class="mio">Colores de cabello: <span class="api">{{ hair_colors }}</span></div>
        <div class="mio">Colores de ojos: <span class="api">{{ eye_colors }}</span></div>
        <div class="mio">Esperanza de vida promedio: <span class="api">{{ average_lifespan }} años</span></div>
        <div class="mio">Lenguaje: <span class="api">{{ language }}</span></div>
        <div class="mio">Planeta: <span class="api">{{ homeworld }}</span></div>
        <div class="mio">
          Aparicion en peliculas:
          <ul>
            <li v-for="(peli, index) in films" :key="index">
              <a :href="peli" target="_blank" class="api">{{ peli }}</a>
            </li>
          </ul>
        </div>
        <div class="mio">
          Personas relacionadas:
          <ul>
            <li v-for="(persona, index) in people" :key="index">
              <a :href="persona" target="_blank" class="api"> {{ persona }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
    const props = defineProps({
      name: String,
      classification: String,
      designation: String,
      average_height: String,
      skin_colors: String,
      hair_colors: String,
      eye_colors: String,
      average_lifespan: String,
      language: String,
      homeworld: String,
      films: Array,
      people: Array
    });
  </script>