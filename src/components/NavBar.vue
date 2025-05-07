<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '@/assets/logo.png'

const router = useRouter()
const isMenuOpen = ref(false)

const menuItems = [
  {
    label: 'Inicio',
    icon: 'pi pi-home',
    command: () => router.push('/')
  },
  {
    label: 'Suscripción',
    icon: 'pi pi-bell',
    command: () => router.push('/suscripcion')
  },
  {
    label: 'Contactanos',
    icon: 'pi pi-phone',
    command: () => router.push('/contactanos')
  }
]

const executeCommand = (command) => {
  command()
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo y nombre -->
      <div class="navbar-brand" @click="router.push('/')">
        <img :src="logo" alt="Logo Plan Campeche" class="navbar-logo">
        <span class="navbar-title">Plan Campeche</span>
      </div>

      <!-- Menú para desktop -->
      <div class="navbar-menu">
        <div 
          v-for="(item, index) in menuItems" 
          :key="index" 
          class="navbar-item"
          @click="executeCommand(item.command)"
        >
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </div>
      </div>

      <!-- Botón móvil -->
      <button class="navbar-toggle" @click="isMenuOpen = !isMenuOpen">
        <i class="pi pi-bars"></i>
      </button>

      <!-- Menú móvil -->
      <div class="navbar-mobile-menu" :class="{ 'is-open': isMenuOpen }">
        <div 
          v-for="(item, index) in menuItems" 
          :key="index" 
          class="navbar-mobile-item"
          @click="executeCommand(item.command)"
        >
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
/* Import debe estar al principio */
@import url('https://unpkg.com/primeicons@6.0.1/primeicons.css');

/* Estilos base */
.navbar {
  background-color: #11B981;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo y título */
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.navbar-logo {
  height: 2.5rem;
  width: auto;
}

.navbar-title {
  font-size: 1.25rem;
  font-weight: 600;
}

/* Menú desktop */
.navbar-menu {
  display: flex;
  gap: 1.5rem;
}

.navbar-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.navbar-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.navbar-item i {
  font-size: 1.1rem;
}

/* Menú móvil */
.navbar-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.navbar-mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background-color: #11B981;
  padding: 1rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.navbar-mobile-menu.is-open {
  display: block;
}

.navbar-mobile-item {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar-mobile-item:last-child {
  border-bottom: none;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }
  
  .navbar-toggle {
    display: block;
  }
}
</style>