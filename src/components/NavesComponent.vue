<template>
    <RouterLink :to="{ name: 'NavesPage'}">
      <div class="naves">
        <div class="nombre">Nombre: {{ name }}</div>
    <div class="model">Modelo: {{ model }}</div>
    <div class="manufacturer">Fabricante: {{ manufacturer }}</div>
    <div class="cost_in_credits">Coste: {{ cost_in_credits }} créditos</div>
    <div class="length">Longitud: {{ length }} metros</div>
    <div class="max_atmosphering_speed">Velocidad máxima en atmósfera: {{ max_atmosphering_speed }} km/h</div>
    <div class="crew">Tripulación: {{ crew }}</div>
    <div class="passengers">Pasajeros: {{ passengers }}</div>
    <div class="cargo_capacity">Capacidad de carga: {{ cargo_capacity }} kg</div>
    <div class="consumables">Consumibles: {{ consumables }}</div>
    <div class="hyperdrive_rating">Clasificación del hiperimpulsor: {{ hyperdrive_rating }}</div>
      </div>
    </RouterLink>
  </template>

<script setup>
const props = defineProps({
  name: String,
  model: String,
  manufacturer: String,
  cost_in_credits: String,
  length: String,
  max_atmosphering_speed: String,
  crew: String,
  passengers: String,
  cargo_capacity: String,
  consumables: String,
  hyperdrive_rating: String,
});
</script>