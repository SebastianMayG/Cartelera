<script setup>
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';

</script>
<template>
    <main class="app-container">
        <NavBar/>
        <router-view/>
    </main>
</template>

<style scoped>
.app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}

</style>