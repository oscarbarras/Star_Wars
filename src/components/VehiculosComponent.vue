<template>
    <div class="contenedor-vehiculo">
      <div class="vehiculo">
        <div class="mio">Nombre: <span class="api">{{ name }}</span></div>
        <div class="mio">Modelo: <span class="api">{{ model }}</span></div>
        <div class="mio">Fabricante: <span class="api">{{ manufacturer }}</span></div>
        <div class="mio">Costo: <span class="api">{{ cost_in_credits }} créditos</span></div>
        <div class="mio">Longitud: <span class="api">{{ length }} m</span></div>
        <div class="mio">Velocidad máxima: <span class="api">{{ max_atmosphering_speed }} km/h</span></div>
        <div class="mio">Tripulación: <span class="api">{{ crew }}</span></div>
        <div class="mio">Pasajeros: <span class="api">{{ passengers }}</span></div>
        <div class="mio">Capacidad de carga: <span class="api">{{ cargo_capacity }} kg</span></div>
        <div class="mio">Consumibles: <span class="api">{{ consumables }}</span></div>
        <div class="mio">Clase de vehículo: <span class="api">{{ vehicle_class }}</span></div>
        <div class="mio">
          Apariciones en películas:
          <ul>
            <li v-for="(peli, index) in films" :key="index">
              <span class="api">{{ peli }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
        vehicle_class: String,
        films:  Array,
    });

</script>