<template>
  <RouterLink :to="{ name: 'PersonajesPage'}">
    <div class="personajes">
      <div class="mio">Nombre: <span class="api">{{ name }}</span></div>
      <div class="mio">Altura: <span class="api">{{ height }} cm</span></div>
      <div class="mio">Peso: <span class="api">{{ mass }} kg</span></div>
      <div class="mio">Color de pelo: <span class="api">{{ hair_color }}</span></div>
      <div class="mio">Color de piel: <span class="api">{{ skin_color }}</span></div>
      <div class="mio">Color de ojos: <span class="api">{{ eye_color }}</span></div>
      <div class="mio">Nacimiento: <span class="api">{{ birth_year }}</span></div>
      <div class="mio">Género: <span class="api">{{ gender }}</span></div>
      <div class="mio">Planeta: <span class="api">{{ homeworld }}</span></div>
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
  