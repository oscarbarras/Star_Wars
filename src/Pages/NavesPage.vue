<template>
      <input type="text"v-model="busqueda"
      placeholder="Busqueda en las naves" class="buscador"/>

      <div class="contenedor-naves" >
        <div class="Naves">
        <NavesComponent
          v-for="(Nave, index) in navesFiltro" 
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
        <button v-if="ahora <=todas " @click="confirmarYCargar">Ver Más</button>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import NavesComponent from '@/components/NavesComponent.vue';
import Swal from 'sweetalert2';

const Naves=ref([]);
const ahora=ref(1);
const todas=9;
const busqueda = ref('');


const cargarNaves = async () => {
  if (ahora.value > todas) return;

  try {
    const response = await fetch(`https://swapi.py4e.com/api/starships?page=${ahora.value}&limit=10`);
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


const navesFiltro = computed(() => {
  return Naves.value.filter(nave => 
  nave.name.toLowerCase().includes(busqueda.value.toLowerCase())
  );
});


const confirmarYCargar = () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¿Quieres cargar más naves espaciales?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, cargar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      cargarNaves(); 
      Swal.fire({
        title: 'Cargando...',
        text: 'Estamos obteniendo más naves espaciales',
        icon: 'info',
        confirmButtonText: 'Aceptar',
      });
    }
  });
};

</script>