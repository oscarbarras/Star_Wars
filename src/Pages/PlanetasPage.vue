<template>
    <input type="text"v-model="busqueda"
    placeholder="Busqueda en los planetas" class="buscador"/>

    <div class="contenedor-planetas" >
      <div class="Planetas">
        <PlanetasCpmponent
          v-for="(Planeta, index) in planetasFiltro" 
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
        <button v-if="ahora <=todas " @click="confirmarYCargar">Ver Más</button>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import PlanetasCpmponent from '@/components/PlanetasCpmponent.vue';
import Swal from 'sweetalert2';

const Planetas=ref([]);
const ahora=ref(1);
const todas=9;
const busqueda = ref('');


const cargarPlanetas = async () => {
  if (ahora.value > todas) return;

  try {
    const response = await fetch(`https://swapi.py4e.com/api/planets?page=${ahora.value}&limit=10`);
    const data = await response.json();
    if (data.results) {
      Planetas.value.push(...data.results);
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
  cargarPlanetas();

});


const planetasFiltro = computed(() => {
  return Planetas.value.filter(planeta => 
  planeta.name.toLowerCase().includes(busqueda.value.toLowerCase())
  );
});



const confirmarYCargar = () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¿Quieres cargar más planetas?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, cargar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      cargarPlanetas(); 
      Swal.fire({
        title: 'Cargando...',
        text: 'Estamos obteniendo más planetas',
        icon: 'info',
        confirmButtonText: 'Aceptar',
      });
    }
  });
};

</script>