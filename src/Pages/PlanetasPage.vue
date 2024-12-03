<template>
    <div class="contenedor-planetas" >
      <div class="Planetas">
        <PlanetasCpmponent
          v-for="(Planeta, index) in Planetas" 
          :key="Planeta.uid"
          :name="Planeta.name"
          :rotation_period="Planeta.rotation_period"
          :orbital_period="Planeta.orbital_period"
          :diameter="Planeta.diameter"
          :climate="Planeta.climate"
          :gravity="Planeta.gravity"
          :terrain="Planeta.terrain"
          :surface_water="Planeta.surface_water"
          :population="Planeta.population"
        />        
      </div>
    </div>
    <div class="divBoton">
        <button v-if="ahora <=todas " @click="VerMas">Ver Más</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PlanetasCpmponent from '@/components/PlanetasCpmponent.vue';

const Planetas=ref([]);

onMounted(()=>{
    fetch("https://swapi.dev/api/planets")
        .then((response)=>response.json())
        .then((data)=>{
            Planetas.value=data.results;
        })
        .catch((error)=>{
            console.error("Error",error)
    });
});
</script>