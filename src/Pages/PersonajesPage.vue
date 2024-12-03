<template>
    <div class="contenedor-personajes" >
      <div class="Personajes">
        <PersonajesComponent 
          v-for="(Personaje, index) in Personajes" 
          :key="Personaje.uid"
          :name="Personaje.name"
          :height="Personaje.height"
          :mass="Personaje.mass"
          :hair_color="Personaje.hair_color"
          :skin_color="Personaje.skin_color"
          :eye_color="Personaje.eye_color"
          :birth_year="Personaje.birth_year"
          :gender="Personaje.gender"
          :homeworld="Personaje.homeworld"
          :films="Personaje.films"
          :species="Personaje.species"
          :vehicles="Personaje.vehicles"
          :starships="Personaje.starships"
        />        
      </div>
    </div>
    <div class="divBoton">
        <button v-if="ahora <=todas " @click="VerMas">Ver Más</button>
    </div>
  </template>

<script setup>
import { onMounted, ref } from 'vue';
import PersonajesComponent from '@/components/PersonajesComponent.vue';

const Personajes=ref([]);
const ahora=ref(1);
const todas=9;

const obtenerPlaneta = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.name; 
  } catch (error) {
    console.error("Error cargando el planeta:", error);
    return null; 
  }
};

const cargarPersonajes = async () => {
  if (ahora.value > todas) return;

  try {
    const response = await fetch(`https://swapi.dev/api/people?page=${ahora.value}&limit=10`);
    const data = await response.json();
    if (data.results) {
      for (let personaje of data.results) {
        if (personaje.homeworld) {
          personaje.homeworld = await obtenerPlaneta(personaje.homeworld);
        }
      }
      Personajes.value.push(...data.results);
    }

    ahora.value++; 
  } catch (error) {
    console.error("Error cargando personajes:", error);
  }
};

onMounted(() =>{
  const storedpage = localStorage.getItem('actual');
  if(storedpage){
    ahora.value=parseInt(storedpage,10);
  }
  cargarPersonajes();

});


</script>
