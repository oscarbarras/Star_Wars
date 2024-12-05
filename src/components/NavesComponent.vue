<template>
  <RouterLink :to="{ name: 'NavesPage'}">
    <div class="naves">
      <div><span class="mio">Nombre:</span> <span class="api">{{ name }}</span></div>
      <div><span class="mio">Modelo:</span> <span class="api">{{ model }}</span></div>
      <div><span class="mio">Fabricante:</span> <span class="api">{{ manufacturer }}</span></div>
      <div><span class="mio">Coste:</span> <span class="api">{{ cost_in_credits }} créditos</span></div>
      <div><span class="mio">Longitud:</span> <span class="api">{{ length }} metros</span></div>
      <div><span class="mio">Velocidad máxima en atmósfera:</span> <span class="api">{{ max_atmosphering_speed }} km/h</span></div>
      <div><span class="mio">Tripulación:</span> <span class="api">{{ crew }}</span></div>
      <div><span class="mio">Pasajeros:</span> <span class="api">{{ passengers }}</span></div>
      <div><span class="mio">Capacidad de carga:</span> <span class="api">{{ cargo_capacity }} kg</span></div>
      <div><span class="mio">Consumibles:</span> <span class="api">{{ consumables }}</span></div>
      <div><span class="mio">Hiperimpulsor:</span> <span class="api">{{ hyperdrive_rating }}</span></div>
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