import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useEventsStore = defineStore('event', () => {
    const events = ref([
        {
          id: 1,
          imageUrl: '/artesMundoNeurodivergentes.jpeg',
          title: 'Las artes y el mundo neurodivergente en primera persona',
          description: 'Festival conmemorativo al día internacional de la conciencia sobre el autismo',
          location: 'Centro de Formación y Producción de Artes Visuales La Arrocera',
          date: '2025-04-11',
          time: '19:00 hrs',
          mapsUrl: 'https://maps.app.goo.gl/2yR4wndqXdMSLBv38'
        },
        {
          id: 2,
          imageUrl: '/HoraCuento.jpg',
          title: 'La Hora del Cuento',
          description: 'Presentación del libro Cuentame lo que te imagínas, relatos de niñas y niños',
          location: 'Biblioteca Pública Central Lic. Francisco Sosa Escalante',
          date: '2025-04-12',
          time: '10:00 hrs',
          mapsUrl: 'https://maps.app.goo.gl/FVDhxH1Vyir62erH6'
        },
        {
          id: 3,
          imageUrl: '/public/ObrasBeethoven.jpg',
          title: 'Obras de Beethoven y Haydn',
          description: 'Orquesta Sinfónica de Campeche interpretando Beethoven y Haydn',
          location: 'Teatro Francisco de Paula Toro',
          date: '2025-04-12',
          time: '20:00 hrs',
          mapsUrl: 'https://maps.app.goo.gl/kdHupbhqZSQsvtco6'
        },
        {
          id: 4,
          imageUrl: '/ElArbolLecturaDramatizada.jpg',
          title: 'El Árbol lectura dramatizada',
          description: 'Lectura dramatizada versión libre',
          location: 'Sala Teatro Manuel Ávila Cano del Centro Cultural El Claustro',
          date: '2025-04-10',
          time: '20:00 hrs',
          mapsUrl: 'https://maps.app.goo.gl/sLzVioe9F17DiUic9'
        },
        {
          id: 5,
          imageUrl: '/BrigadaCorteCabello.jpg',
          title: 'Brigada de Corte de Cabello Para niñas y damas',
          description: 'Degusta los mejores platillos de mariscos de la región.',
          location: 'Centro de Desarrollo Comunitario Imí II',
          date: '2025-04-07 - 2025-04-09',
          time: '18:00 hrs - 20:00 hrs',
          mapsUrl: 'https://maps.app.goo.gl/haeUfv6yFQCSpaG98'
        },
      ])

      return {events}
})