<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useEventsStore } from '@/stores/events';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';

const route = useRoute();
const router = useRouter();
const eventsStore = useEventsStore();
const event = ref(null);
const isLoading = ref(true);

const getImageUrl = (filename) => {
  return new URL(`/public/${filename}`, import.meta.url).href;
};

// Lugares cercanos hardcodeados
const nearbyPlaces = ref([
  {
    name: "Holiday Inn",
    imageUrl: getImageUrl('Holiday-Inn-Logo.jpg'),
    location: "https://maps.app.goo.gl/BXwehQT4HkD71Tx87",
    address: "Ubicación"
  },
  {
    name: "Lapa Campeche",
    imageUrl: getImageUrl("Lapa-Logo.jpg"),
    location: "https://maps.app.goo.gl/EuftRwUkSGawAnMV9",
    address: "Ubicación"
  },
  {
    name: "Frappisimo",
    imageUrl: getImageUrl("Frappisimo-Logo.jpg"),
    location: "https://www.google.com.mx/maps/search/Frappisimo/@19.838485,-90.5593204,14.45z?entry=ttu&g_ep=EgoyMDI1MDUwMy4wIKXMDSoASAFQAw%3D%3D",
    address: "Ubicación"
  }
]);

onMounted(() => {
  loadEvent();
});

watch(() => route.params.id, () => {
  loadEvent();
});

const loadEvent = () => {
  const eventId = parseInt(route.params.id);
  event.value = eventsStore.events.find(e => e.id === eventId);
  
  if (!event.value) {
    router.push('/');
  }
  isLoading.value = false;
};
</script>

<template>
  <div class="event-detail-page">
    <main class="event-detail-container">
      <!-- Mostrar loader mientras carga -->
      <div v-if="isLoading" class="loading-container">
        <ProgressSpinner />
      </div>
      
      <!-- Mostrar contenido cuando el evento esté cargado -->
      <template v-else-if="event">
        <div class="event-content">
          <!-- Sección de imagen -->
          <div class="event-image-section">
            <img :src=getImageUrl(event.imageUrl) :alt="event.title" class="main-event-image" />
          </div>
          
          <!-- Sección de información -->
          <div class="event-info-section">
            <h1 class="event-title">{{ event.title }}</h1>
            
            <div class="event-meta">
              <div class="meta-item">
                <i class="pi pi-calendar"></i>
                <span>{{ event.date }}</span>
              </div>
              <div class="meta-item">
                <i class="pi pi-clock"></i>
                <span>{{ event.time }}</span>
              </div>
              <div class="meta-item">
                <i class="pi pi-map-marker"></i>
                <span>{{ event.location }}</span>
              </div>
            </div>
            
            <div class="event-description">
              <h3>Descripción del evento</h3>
              <p>{{ event.description }}</p>
            </div>
          </div>
        </div>
        
        <!-- Sección de mapa y lugares cercanos -->
        <div class="map-and-places">
          <!-- Mapa de Google -->
          <div class="map-container">
            <h2>Ubicación</h2>
            <iframe
              v-if="event && event.location"
              :src="`https://maps.google.com/maps?q=${encodeURIComponent(event.location)}&output=embed`"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy">
            </iframe>
          </div>
          
          <!-- Lugares cercanos -->
          <div class="nearby-places-container">
            <h2>Lugares Cercanos</h2>
            <div class="places-list">
              <div v-for="(place, index) in nearbyPlaces" :key="index" class="place-card">
                <img :src="place.imageUrl" :alt="place.name" class="place-image" />
                <div class="place-info">
                  <h3>{{ place.name }}</h3>
                  <a :href="place.location" target="_blank" class="place-location">
                    <i class="pi pi-map-marker"></i> {{ place.address }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      
      <!-- Mensaje si no se encuentra el evento -->
      <div v-else class="not-found-message">
        <h2>Evento no encontrado</h2>
        <Button label="Volver al inicio" @click="router.push('/')" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.event-detail-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.event-detail-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1.5rem;
  flex: 1;
}

.event-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.event-image-section {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.main-event-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 600px;
}

.event-info-section {
  padding: 1rem;
}

.event-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #222;
}

.event-meta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
}

.meta-item i {
  color: #4a6baf;
}

.event-description {
  margin-bottom: 2rem;
}

.event-description h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.event-description p {
  line-height: 1.6;
  color: #555;
}

.event-map-section {
  margin-top: 3rem;
}

.event-map-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #222;
}

/* Responsive design */
@media (max-width: 992px) {
  .event-content {
    grid-template-columns: 1fr;
  }
  
  .main-event-image {
    max-height: 400px;
  }
}

@media (max-width: 768px) {
  .event-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .event-detail-container {
    padding: 0 1rem;
  }
  
  .event-title {
    font-size: 1.6rem;
  }
  
  .meta-item {
    font-size: 1rem;
  }
}

.map-and-places {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
}

.map-container,
.nearby-places-container {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.nearby-places-container h2,
.map-container h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #222;
}

.places-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.place-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: #f9f9f9;
}

.place-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.place-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 8px;
  background: white;
  padding: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.place-info {
  flex: 1;
}

.place-info h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.place-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4a6baf;
  text-decoration: none;
  font-size: 0.9rem;
}

.place-location:hover {
  text-decoration: underline;
}

/* Responsive design */
@media (max-width: 992px) {
  .map-and-places {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .place-card {
    flex-direction: column;
    text-align: center;
  }
  
  .place-info h3 {
    margin-top: 0.5rem;
  }
}

.map-and-places {
  display: grid;
  grid-template-columns: 70% 28%;
  gap: 2%;
  margin-top: 3rem;
}

.map-container {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.map-container iframe {
  width: 100%;
  height: 450px;
  border: none;
  border-radius: 8px;
}

.nearby-places-container {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  height: 100%;
  overflow-y: auto;
}

.places-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.place-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: #f9f9f9;
  text-align: center;
}

.place-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
  background: white;
  padding: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.place-info h3 {
  margin: 0.3rem 0;
  font-size: 0.9rem;
  color: #333;
}

.place-location {
  font-size: 0.8rem;
}

@media (max-width: 992px) {
  .map-and-places {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .map-container iframe {
    height: 350px;
  }
  
  .places-list {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 1rem;
  }
  
  .place-card {
    min-width: 150px;
    flex-direction: column;
  }
}
</style>