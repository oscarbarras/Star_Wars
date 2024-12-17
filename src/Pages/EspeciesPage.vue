<template>
    <input type="text"v-model="busqueda"
    placeholder="Busqueda en las especies" class="buscador"/>

    <div class="contenedor-especies">
    <div class="contenedor">
      <div class="Especies">
        <EspeciesComponent
          v-for="(Especie, index) in especiesFiltro" 
          :key="Especie.uid"
          :name="Especie.name"
          :classification="Especie.classification"
          :designation="Especie.designation"
          :average_height="Especie.average_height"
          :skin_colors="Especie.skin_colors"
          :hair_colors="Especie.hair_colors"
          :eye_colors="Especie.eye_colors"
          :average_lifespan="Especie.average_lifespan"
          :language="Especie.language"
          :homeworld="Especie.homeworld"
          :people="Especie.people"
          :films="Especie.films"
        />        
      </div>
    </div>
  </div>
    
  <div class="divBoton">
        <button v-if="ahora <=todas " @click="confirmarYCargar">Ver Más</button>
  </div>

</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import EspeciesComponent from '@/components/EspeciesComponent.vue';
import Swal from 'sweetalert2';

const Especies=ref([]);
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

const obtenerGente = async (url) => {
  const personas = [];
  for (let persona of url) {
    const response = await fetch(persona);
    const nombre = await response.json();
    personas.push(nombre.name);
  }
  return personas;
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

const cargarEspecies = async () => {
  if (ahora.value > todas) return;

  try {
    const response = await fetch(`https://swapi.py4e.com/api/species?page=${ahora.value}&limit=10`);
    const data = await response.json();
    if (data.results) {
      for (let especie of data.results) {
        const [homeworld, people, films] = await Promise.all([
          obtenerPlaneta(especie.homeworld),
          obtenerGente(especie.people),
          obtenerPelis(especie.films)
        ]);

        especie.homeworld = homeworld;
        especie.people = people;
        especie.films = films;

        Especies.value.push(especie);
      }
    }
    ahora.value++; 
  } catch (error) {
    console.error("Error cargando especies:", error);
  }
};


onMounted(() =>{
  const storedpage = localStorage.getItem('actual');
  if(storedpage){
    ahora.value=parseInt(storedpage,10);
  }
  cargarEspecies();

});

const especiesFiltro = computed(() => {
  return Especies.value.filter(especie => 
  especie.name.toLowerCase().includes(busqueda.value.toLowerCase())
  );
});


const confirmarYCargar = () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¿Quieres cargar más especies?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, cargar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      cargarEspecies(); 
      Swal.fire({
        title: 'Cargando...',
        text: 'Estamos obteniendo más especies',
        icon: 'info',
        confirmButtonText: 'Aceptar',
      });
    }
  });
};


</script>