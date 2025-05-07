import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useEventsStore = defineStore('event', () => {
    const events = ref([
        {
          id: 1,
          imageUrl: 'artesMundoNeurodivergentes.jpeg',
          title: 'Las artes y el mundo neurodivergente en primera persona',
          description: 'Festival conmemorativo al día internacional de la conciencia sobre el autismo',
          location: 'Centro de Formación y Producción de Artes Visuales La Arrocera',
          date: '2025-04-11',
          time: '19:00 hrs',
          mapsUrl: 'https://maps.app.goo.gl/2yR4wndqXdMSLBv38'
        },
        {
          id: 2,
          imageUrl: 'HoraCuento.jpg',
          title: 'La Hora del Cuento',
          description: 'Presentación del libro Cuentame lo que te imagínas, relatos de niñas y niños',
          location: 'Biblioteca Pública Central Lic. Francisco Sosa Escalante',
          date: '2025-04-12',
          time: '10:00 hrs',
          mapsUrl: 'https://maps.app.goo.gl/FVDhxH1Vyir62erH6'
        },
        {
          id: 3,
          imageUrl: 'ObrasBeethoven.jpg',
          title: 'Obras de Beethoven y Haydn',
          description: 'Orquesta Sinfónica de Campeche interpretando Beethoven y Haydn',
          location: 'Teatro Francisco de Paula Toro',
          date: '2025-04-12',
          time: '20:00 hrs',
          mapsUrl: 'https://maps.app.goo.gl/kdHupbhqZSQsvtco6'
        },
        {
          id: 4,
          imageUrl: 'ElArbolLecturaDramatizada.jpg',
          title: 'El Árbol lectura dramatizada',
          description: 'Lectura dramatizada versión libre',
          location: 'Sala Teatro Manuel Ávila Cano del Centro Cultural El Claustro',
          date: '2025-04-10',
          time: '20:00 hrs',
          mapsUrl: 'https://maps.app.goo.gl/sLzVioe9F17DiUic9'
        },
        {
          id: 5,
          imageUrl: 'BrigadaCorteCabello.jpg',
          title: 'Brigada de Corte de Cabello Para niñas y damas',
          description: 'Degusta los mejores platillos de mariscos de la región.',
          location: 'Centro de Desarrollo Comunitario Imí II',
          date: '2025-04-07 - 2025-04-09',
          time: '18:00 hrs - 20:00 hrs',
          mapsUrl: 'https://maps.app.goo.gl/haeUfv6yFQCSpaG98'
        },
        {
          id: 6,
          imageUrl: 'ExpoAutos.jpg',
          title: 'Expo Autos Campeche 2025',
          description: '¡Las mejores marcas, los modelos más nuevos y las promos que no vas a volver a ver!',
          location: 'Centro Internacional de Convenciones y Exposiciones Campeche XXI',
          date: '2025-05-24 - 2025-04-25',
          time: '11:00 hrs - 18:00 hrs',
          mapsUrl: 'https://maps.app.goo.gl/oT4DueYuJFuaaQmNA'
        },
        {
          id: 7,
          imageUrl: 'FightNight.jpg',
          title: 'XMF Vol. 22 FIght Night',
          description: '¡Se va a poner brutal, Campeche! Regresa Xtreme Fighting México, el eventazo de MMA que trae pura adrenalina a la jaula. Peleadores pro de todo México listos para darlo todo. ¿Te lo vas a perder?',
          location: 'Circo Teatro Renacimiento',
          date: '2025-05-16',
          time: '19:00 hrs',
          mapsUrl: 'https://maps.app.goo.gl/9tCxnmtzrNZD3gTJ7'
        },
        {
          id: 8,
          imageUrl: 'RicardoOFarril.jpg',
          title: 'Ricardo O´Farrill presenta: Corto Circuito en Campeche',
          description: 'En Cortocircuito, Ricardo O´ Farril ofrece una experiencia profundamente personal y honesta, combinando su característico humor ácido con reflexiones vulnerables sobre su vida.',
          location: 'Teatro de la Ciudad Francisco de Paula Toro',
          date: '2025-08-17',
          time: '19:00 hrs',
          mapsUrl: 'https://maps.app.goo.gl/SyQrPJiscGvxpNme9'
        },
        {
          id: 9,
          imageUrl: 'Tsunami.jpg',
          title: 'Tsunami Campeche',
          description: 'Presentando lo mejor del mundo del anime, comics, kpop, cosplay y videojuegos',
          location: 'Centro Internacional de Convenciones y Exposiciones Campeche XXI',
          date: '2025-05-31 - 2025-06-01',
          time: '11:00 hrs',
          mapsUrl: 'https://maps.app.goo.gl/oT4DueYuJFuaaQmNA'
        }
      ])

      return {events}
})