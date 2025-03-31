<template>
    <div class="card">
        <Menubar :model="items" />
        <br>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Menubar from 'primevue/menubar';

const items = ref([
    {
        label: 'Inicio',
        icon: 'pi pi-home'
    },
    {
        label: 'Notificaciones',
        icon: 'pi pi-bell'
    },
    {
        label: 'Contacto',
        icon: 'pi pi-envelope'
    }
]);
</script>