<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";
import 'primeicons/primeicons.css';

const toast = useToast();


const events = ref([
  {
    id: 1,
    imageUrl: 'artesMundoNeurodivergentes.jpeg',
    title: 'Las artes y el mundo neurodivergente en primera persona',
    description: 'Festival conmemorativo al día internacional de la conciencia sobre el autismo',
    location: 'Centro de Formación y Producción de Artes Visuales La Arrocera',
    date: '2025-04-11',
    time: '19:00 hrs'
  },
  {
    id: 2,
    imageUrl: 'HoraCuento.jpg',
    title: 'La Hora del Cuento',
    description: 'Presentación del libro Cuentame lo que te imagínas, relatos de niñas y niños',
    location: 'Biblioteca Pública Central Lic. Francisco Sosa Escalante',
    date: '2025-04-12',
    time: '10:00 hrs'
  },
  {
    id: 3,
    imageUrl: 'ObrasBeethoven.jpg',
    title: 'Obras de Beethoven y Haydn',
    description: 'Orquesta Sinfónica de Campeche interpretando Beethoven y Haydn',
    location: 'Teatro Francisco de Paula Toro',
    date: '2025-04-12',
    time: '20:00 hrs'
  },
  {
    id: 4,
    imageUrl: 'ElArbolLecturaDramatizada.jpg',
    title: 'El Árbol lectura dramatizada',
    description: 'Lectura dramatizada versión libre',
    location: 'Sala Teatro Manuel Ávila Cano del Centro Cultural El Claustro',
    date: '2025-04-10',
    time: '20:00 hrs'
  },
  {
    id: 5,
    imageUrl: 'BrigadaCorteCabello.jpg',
    title: 'Brigada de Corte de Cabello Para niñas y damas',
    description: 'Degusta los mejores platillos de mariscos de la región.',
    location: 'Centro de Convenciones Siglo XXI',
    date: '2025-04-07 - 2025-04-09',
    time: '18:00 hrs - 20:00 hrs'
  },
]);

const handleInscription = (eventId) => {
  console.log(`Inscribirse al evento con ID: ${eventId}`);
  toast.add({ severity: 'info', summary: 'Info', detail: 'Inscrito al evento', life: 3000 });
  //alert(`Inscripción solicitada para el evento ${eventId}`);
};

</script>

<template>
  <main>
    <Toast />
    <div class="hero-section">
      <div class="hero-overlay">
        <img
          src="https://media.istockphoto.com/id/1294450400/es/foto/campeche-mexico.jpg?s=1024x1024&w=is&k=20&c=GOQlycs308m75rKlAZr3g5kAbd841_tvxXX3g6CxHZI="
          alt="Imagen de fondo" class="hero-image" />
        <h1 class="hero-text">Cartelera Camp</h1>
      </div>
    </div>

    <div class="cards-section p-4 md:p-6 lg:p-8">
      <Card v-for="event in events" :key="event.id" class="mb-4 shadow-md">
        <template #header>
          <img :src="event.imageUrl" alt="Imagen del evento" class="event-image" />
        </template>
        <template #title>
          {{ event.title }}
        </template>
        <template #subtitle>
          <div class="text-sm text-gray-600">
            <i class="pi pi-map-marker mr-1"></i> {{ event.location }} <br />
            <i class="pi pi-calendar mr-1"></i> {{ event.date }} | <i class="pi pi-clock mr-1"></i> {{ event.time }}
          </div>
        </template>
        <template #content>
          <p>{{ event.description }}</p>
        </template>
        <template #footer>

          <Button label="Inscribirme" icon="pi pi-user-plus" class="p-button-sm" @click="handleInscription(event.id)" />
        </template>
      </Card>
    </div>
  </main>
</template>
<style scoped>
.hero-section {
  position: relative;
  height: 45vh;
  /* Ajusta la altura según necesites */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* Evita el desbordamiento de la imagen */
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Asegura que la imagen cubra todo el espacio */
  z-index: -1;
  /* Coloca la imagen detrás del texto */
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  /* Capa oscura semitransparente */
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
  /* Añade padding horizontal para pantallas pequeñas */
}

.cards-section {
  max-width: 1200px;
  margin: 2rem auto;
  /* Añade margen superior e inferior */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
  /* Añade padding horizontal para evitar bordes en pantallas pequeñas */
}

.event-image {
  width: 100%;
  height: 400px;
  /* Ajusta la altura según necesites */
  object-fit: contain;
  display: block;
}

/* Ajustes responsivos para el texto hero */
@media (max-width: 768px) {
  .hero-text {
    font-size: 2.5rem;
  }

  .hero-section {
    height: 35vh;
  }
}

@media (max-width: 480px) {
  .hero-text {
    font-size: 2rem;
  }

  .cards-section {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>