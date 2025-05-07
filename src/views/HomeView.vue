<script setup>
import { ref } from 'vue';
import { useEventsStore } from '@/stores/events';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';
import { useToast } from "primevue/usetoast";
import 'primeicons/primeicons.css';
import { useCarruselStore}from '@/stores/imagenesCarrusel';
import Carousel from 'primevue/carousel';
import { useRouter } from 'vue-router'; // Añade esta importación

const toast = useToast();
const router = useRouter(); // Instancia el router aquí
const eventsStore = useEventsStore();
const eventsCarruselStore = useCarruselStore() // Contiene una referencia a los eventos. Revisar src/stores/imagenesCarrusel.js
const visible = ref(false);
const selectedImage = ref('');

const handleInscription = (eventId) => {
  router.push({ name: 'event-detail', params: { id: eventId } });
};

const showImageModal = (imageUrl) => {
  selectedImage.value = imageUrl;
  visible.value = true;
};
</script>

<template>
  <main>
    <Toast />
    <Dialog v-model:visible="visible" modal :style="{ width: '90vw', maxWidth: '600px' }" :breakpoints="{ '960px': '75vw', '640px': '90vw' }">
      <img :src="selectedImage" alt="Imagen ampliada del evento" style="width: 100%; border-radius: 8px;" />
    </Dialog>

    <div class="compact-carousel-container">
    <Carousel 
      :value="eventsCarruselStore.carruseles" 
      :numVisible="1"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="4000"
      class="small-carousel"
    >
      <template #item="slotProps">
        <div class="carousel-item">
          <img 
            :src="slotProps.data.imageUrl" 
            :alt="slotProps.data.title" 
            class="carousel-image"
            @click="openEventDetails(slotProps.data)"
          />
        </div>
      </template>
    </Carousel>
  </div>

    <div class="cards-section p-4 md:p-6 lg:p-8">
      <div v-for="event in eventsStore.events" :key="event.id" class="modern-card">
        <!-- Sección de imagen clickeable -->
        <div class="card-image-section" @click="showImageModal(event.imageUrl)">
          <img :src="event.imageUrl" alt="Imagen del evento" class="card-image" />
          <div class="image-overlay">
            <div class="price-tag" v-if="event.price">${{ event.price }}</div>
            <div class="date-tag">{{ event.date }}</div>
          </div>
        </div>
        
        <!-- Contenido principal de la tarjeta -->
        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">{{ event.title }}</h3>
            <div class="card-location">
              <i class="pi pi-map-marker"></i>
              <a :href="event.mapsUrl" target="_blank">{{ event.location }}</a>
            </div>
          </div>
          
          <p class="card-description">{{ event.description }}</p>
          
          <div class="card-meta">
            <div class="meta-item">
              <i class="pi pi-clock"></i>
              <span>{{ event.time }}</span>
            </div>
            <div class="tags-container">
              <span class="tag" v-if="event.duration">{{ event.duration }}</span>
              <span class="tag highlight" v-if="event.category">{{ event.category }}</span>
            </div>
          </div>
        </div>
        
        <!-- Pie de tarjeta con botón -->
        <div class="card-footer">
          <Button 
            label="Más información" 
            icon="pi pi-calendar-plus" 
            class="reserve-btn" 
            @click="handleInscription(event.id)" 
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Estilos del hero (se mantienen igual) */
.hero-section {
  position: relative;
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-text {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  padding: 0 1rem;
}

/* Nuevos estilos para las tarjetas modernas */
.cards-section {
  max-width: 1400px;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  padding: 0 1.5rem;
}

.modern-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

.modern-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.card-image-section {
  position: relative;
  height: 220px;
  overflow: hidden;
  cursor: pointer;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.modern-card:hover .card-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px;
}

.price-tag {
  background: rgba(255, 255, 255, 0.9);
  padding: 6px 18px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.3rem;
  color: #111;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.date-tag {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.card-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-header {
  margin-bottom: 15px;
}

.card-title {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #222;
  line-height: 1.3;
}

.card-location {
  display: flex;
  align-items: center;
  color: #2e7d32; /* Color verde para la ubicación */
  font-size: 0.95rem;
}

.card-location i {
  margin-right: 6px;
  color: #2e7d32; /* Color verde para el icono */
}

.card-location a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

.card-location a:hover {
  color: #1b5e20; /* Verde más oscuro al hacer hover */
}

.card-description {
  color: #555;
  margin: 0 0 20px;
  line-height: 1.6;
  flex: 1;
  font-size: 0.95rem;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.meta-item {
  display: flex;
  align-items: center;
  color: #666;
  font-size: 0.9rem;
}

.meta-item i {
  margin-right: 5px;
  color: #4a6baf;
}

.tags-container {
  display: flex;
  gap: 8px;
}

.tag {
  background: #f0f4ff;
  color: #4a6baf;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.tag.highlight {
  background: #4a6baf;
  color: white;
}

.card-footer {
  padding: 0 20px 20px;
}

.reserve-btn {
  width: 100%;
  background: linear-gradient(135deg, #111 0%, #333 100%);
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-weight: 600;
  color: white;
  transition: all 0.3s ease;
}

.reserve-btn:hover {
  background: linear-gradient(135deg, #333 0%, #555 100%);
  transform: translateY(-2px);
}

/* Responsive design */
@media (max-width: 768px) {
  .hero-text {
    font-size: 2.5rem;
  }
  .hero-section {
    height: 35vh;
  }
  .cards-section {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-text {
    font-size: 2rem;
  }
  .cards-section {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .card-title {
    font-size: 1.4rem;
  }
}

/* Estilos para el carrusel compacto */
.compact-carousel-container {
  max-width: 7000px;
  
}

.section-title {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #333;
}

.small-carousel {
  width: 100%;
}

.carousel-item {
  padding: 0 0.1rem;
}

.carousel-image {
  width: 100%;
  height: 400px; /* Altura reducida */
  object-fit: cover; /* Para que se vea bien*/
  border-radius: 8px;
  
  transition: transform 0.3s ease;
}

/* .carousel-image:hover {
  transform: scale(1.03);
  opacity: 0.9;
} */

/* Ajustes específicos para el carrusel de PrimeVue */
:deep(.p-carousel-content) {
  padding: 0.5rem 0.1rem;
}

:deep(.p-carousel-prev),
:deep(.p-carousel-next) {
  width: 1.5rem;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  color: #333;
}

:deep(.p-carousel-indicators) {
  padding: 0.5rem 0;
}

:deep(.p-carousel-indicator button) {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  
}

:deep(.p-carousel-indicator.p-highlight button) {
  background-color: #6366F1;
}

@media (max-width: 768px) {
  .carousel-image {
    height: 150px;
  }
}

@media (max-width: 480px) {
  .carousel-image {
    height: 120px;
  }
}

:deep(.p-carousel-container) {
  padding: 0 !important;
}
</style>