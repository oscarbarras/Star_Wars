<template>
        <div class="contenedor-naves" >
      <div class="Naves">
        <NavesComponent
          v-for="(Nave, index) in Naves" 
          :key="Nave.uid"
          :name="Nave.name"
          :model="Nave.model"
          :manufacturer="Nave.manufacturer"
          :cost_in_credits="Nave.cost_in_credits"
          :length="Nave.length"
          :max_atmosphering_speed="Nave.max_atmosphering_speed"
          :crew="Nave.crew"
          :passengers="Nave.passengers"
          :cargo_capacity="Nave.cargo_capacity"
          :consumables="Nave.consumables"
          :hyperdrive_rating="Nave.starship_class"
          :population="Nave.population"
        />        
      </div>
    </div>

    <div class="divBoton">
        <button v-if="ahora <=todas " @click="VerMas">Ver Más</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import NavesComponent from '@/components/NavesComponent.vue';

const Naves=ref([]);

onMounted(()=>{
    fetch("https://swapi.dev/api/starships")
        .then((response)=>response.json())
        .then((data)=>{
            Naves.value=data.results;
        })
        .catch((error)=>{
            console.error("Error",error)
    });
});
</script>