<template>
    <input type="text"v-model="busqueda"
    placeholder="Busqueda en los vehiculos" class="buscador"/>

    <div class="contenedor-vehiculos">
      <div class="Vehiculos">
        <VehiculosComponent
          v-for="(Vehiculo, index) in vehiculosFiltro" 
          :key="Vehiculo.uid"
          :name="Vehiculo.name"
          :model="Vehiculo.model"
          :manufacturer="Vehiculo.manufacturer"
          :cost_in_credits="Vehiculo.cost_in_credits"
          :length="Vehiculo.length"
          :max_atmosphering_speed="Vehiculo.max_atmosphering_speed"
          :crew="Vehiculo.crew"
          :passengers="Vehiculo.passengers"
          :cargo_capacity="Vehiculo.cargo_capacity"
          :consumables="Vehiculo.consumables"
          :vehicle_class="Vehiculo.vehicle_class"
          :films="Vehiculo.films"
        />        
      </div>
    </div>

    <div class="divBoton">
        <button v-if="ahora <=todas " @click="confirmarYCargar">Ver Más</button>
  </div>

</template>

<script setup>
import VehiculosComponent from "@/components/VehiculosComponent.vue";
import { ref, computed, onMounted } from "vue";
import Swal from 'sweetalert2';


const Vehiculos=ref([]);
const ahora=ref(1);
const todas=9;
const busqueda = ref('');

const obtenerPelis = async (url) => {
  const peliculas = [];
  for (let peli of url) {
    const response = await fetch(peli);
    const nombre = await response.json();
    peliculas.push(nombre.title);
  }
  return peliculas;
};


const cargarVehiculos = async () => {
  if (ahora.value > todas) return;

  try {
    const response = await fetch(`https://swapi.py4e.com/api/vehicles?page=${ahora.value}&limit=10`);
    const data = await response.json();
    if (data.results) {
      for (let vehiculo of data.results) {
        const [films] = await Promise.all([
          obtenerPelis(vehiculo.films)
        ]);
        vehiculo.films = films;

        Vehiculos.value.push(vehiculo);
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
  cargarVehiculos();

});

const vehiculosFiltro = computed(() => {
  return Vehiculos.value.filter(vehiculo => 
  vehiculo.name.toLowerCase().includes(busqueda.value.toLowerCase())
  );
});


const confirmarYCargar = () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¿Quieres cargar más vehículos?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, cargar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      cargarVehiculos(); 
      Swal.fire({
        title: 'Cargando...',
        text: 'Estamos obteniendo más vehículos',
        icon: 'info',
        confirmButtonText: 'Aceptar',
      });
    }
  });
};

</script>