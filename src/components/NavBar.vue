<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Menubar from 'primevue/menubar'

const router = useRouter()

const items = ref([
  {
    label: 'Inicio',
    icon: 'pi pi-home',
    command: () => {
      router.push('/')
    }
  },
  {
    label: 'Notificaciones',
    icon: 'pi pi-bell',
  },
  {
    label: 'Contacto',
    icon: 'pi pi-envelope',
    command: () => {
      router.push('/contactanos')
    }
  }
])
</script>

<template>
  <Menubar :model="items" />
  <br>
</template>
