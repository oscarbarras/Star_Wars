<template>
      <input type="text"v-model="busqueda"
      placeholder="Busqueda en los personajes" class="buscador"/>

    <div class="contenedor-personajes" >
      <div class="Personajes">
        <PersonajesComponent 
          v-for="(Personaje, index) in personajesFiltro" 
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
        />        
      </div>
    </div>

      <button class="divBotonPers" v-if="ahora <=todas "@click="confirmarYCargar">Ver Más</button>
      

  </template>

<script setup>
import { ref, computed, onMounted } from "vue";
import PersonajesComponent from '@/components/PersonajesComponent.vue';
import Swal from 'sweetalert2';


const Personajes=ref([]);
const ahora=ref(1);
const todas=9;
const busqueda = ref('');

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

const obtenerPelis = async (url) => {
  const peliculas = [];
  for (let peli of url) {
    const response = await fetch(peli);
    const nombre = await response.json();
    peliculas.push(nombre.title);
  }
  return peliculas;
};

const cargarPersonajes = async () => {
  if (ahora.value > todas) return;

  try {
    const response = await fetch(`https://swapi.py4e.com/api/people?page=${ahora.value}&limit=10`);
    const data = await response.json();
    if (data.results) {
      for (let personaje of data.results) {
        const [homeworld, films] = await Promise.all([
          obtenerPlaneta(personaje.homeworld),
          obtenerPelis(personaje.films)
        ]);

        personaje.homeworld = homeworld;
        personaje.films = films;

        Personajes.value.push(personaje);
      }
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


const personajesFiltro = computed(() => {
  return Personajes.value.filter(personaje => 
    personaje.name.toLowerCase().includes(busqueda.value.toLowerCase())
  );
});


const confirmarYCargar = () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¿Quieres cargar más personajes?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, cargar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      cargarPersonajes(); 
      Swal.fire({
        title: 'Cargando...',
        text: 'Estamos obteniendo más personajes',
        icon: 'info',
        confirmButtonText: 'Aceptar',
      });
    }
  });
};

</script>
