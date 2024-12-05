<template>
  <RouterLink :to="{ name: 'PlanetasPage'}">
    <div class="planetas">
      <div><span class="mio">Nombre:</span> <span class="api">{{ name }}</span></div>
      <div><span class="mio">Rotación:</span> <span class="api">{{ rotation_period }}</span></div>
      <div><span class="mio">Órbita:</span> <span class="api">{{ orbital_period }}</span></div>
      <div><span class="mio">Diámetro:</span> <span class="api">{{ diameter }}</span></div>
      <div><span class="mio">Clima:</span> <span class="api">{{ climate }}</span></div>
      <div><span class="mio">Gravedad:</span> <span class="api">{{ gravity }}</span></div>
      <div><span class="mio">Terreno:</span> <span class="api">{{ terrain }}</span></div>
      <div><span class="mio">Superficie acuática:</span> <span class="api">{{ surface_water }}</span></div>
      <div><span class="mio">Población:</span> <span class="api">{{ population }}</span></div>
    </div>
  </RouterLink>
</template>

<script setup>
    const props= defineProps({
        name: String,
        rotation_period: Number,
        orbital_period: Number,
        diameter: Number,
        climate: String,
        gravity: String,
        terrain: String,
        surface_water: String,
        population: String
    })
</script>