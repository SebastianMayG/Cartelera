import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import EventDetailView from '../views/EventDetailView.vue' // Asegúrate de crear este archivo

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contactanos',
      name: 'Contact',
      component: ContactView,
    },
    {
      path: '/evento/:id',
      name: 'event-detail',
      component: EventDetailView,
      props: true
    }
  ],
})

export default router