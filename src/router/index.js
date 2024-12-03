import { createRouter, createWebHistory } from 'vue-router';
import PersonajesPage from '@/Pages/PersonajesPage.vue';
import PlanetasPage from '@/Pages/PlanetasPage.vue';
import PeliculasPage from '@/Pages/PeliculasPage.vue';
import EspeciesPage from '@/Pages/EspeciesPage.vue';
import VehiculosPage from '@/Pages/VehiculosPage.vue';
import NavesPage from '@/Pages/NavesPage.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/Personajes',
      name: 'PersonajesPage',
      component: PersonajesPage
    },
    {
      path: '/Planetas',
      name: 'PlanetasPage',
      component: PlanetasPage
    },
    {
      path: '/Peliculas',
      name: 'PeliculasPage',
      component: PeliculasPage
    },
    {
      path: '/Especies',
      name: 'EspeciesPage',
      component: EspeciesPage
    },
    {
      path: '/Vehiculos',
      name: 'VehiculosPage',
      component: VehiculosPage
    },
    {
      path: '/Naves',
      name: 'NavesPage',
      component: NavesPage
    }

  ]
})

export default router
