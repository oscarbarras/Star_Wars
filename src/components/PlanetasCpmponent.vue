<template>
        <RouterLink :to="{ name: 'PersonajesPage'}">
      <div class="personajes">
        <div class="nombre">Nombre: {{name }}</div>
        <div class="rotacion">Rotacion: {{ rotation_period }} </div>
        <div class="orbita">Orbita: {{orbital_period }}</div>
        <div class="diametro">Diametro: {{diameter }}</div>
        <div class="climate">Clima: {{climate }}</div>
        <div class="gravity">Gravedad: {{gravity }}</div>
        <div class="terrain">Terreno: {{terrain }}</div>
        <div class="surface_water">Superficie acuatica: {{surface_water }}</div>
        <div class="population">Poblacion: {{population }}</div>
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