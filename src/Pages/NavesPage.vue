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
        <button v-if="ahora <=todas " @click="cargarNaves">Ver Más</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import NavesComponent from '@/components/NavesComponent.vue';

const Naves=ref([]);
const ahora=ref(1);
const todas=9;


const cargarNaves = async () => {
  if (ahora.value > todas) return;

  try {
    const response = await fetch(`https://swapi.dev/api/starships?page=${ahora.value}&limit=10`);
    const data = await response.json();
    if (data.results) {
      Naves.value.push(...data.results);
    }
    ahora.value++; 
  } catch (error) {
    console.error("Error cargando planetas:", error);
  }
};

onMounted(() =>{
  const storedpage = localStorage.getItem('actual');
  if(storedpage){
    ahora.value=parseInt(storedpage,10);
  }
  cargarNaves();

});
</script>