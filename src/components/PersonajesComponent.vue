<template>
    <RouterLink :to="{ name: 'PersonajesPage'}">
      <div class="personajes">
        <div class="nombre">Nombre: {{name }}</div>
        <div class="altura">Altura: {{ height }} cm</div>
        <div class="peso">Peso: {{mass }} kg</div>
        <div class="color-cabello">Color de pelo: {{hair_color }}</div>
        <div class="colorPiel">Color de Piel: {{skin_color }}</div>
        <div class="colorOjos">Color de ojos: {{eye_color }}</div>
        <div class="nacimiento">Nacimiento: {{birth_year }}</div>
        <div class="genero">Genero: {{gender }}</div>
        <div class="planeta">Planeta: {{homeworld }}</div>
      </div>
    </RouterLink>
  </template>
  
  <script setup>
  const props = defineProps({
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: String
  });
  </script>
  