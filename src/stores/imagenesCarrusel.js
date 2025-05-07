import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useCarruselStore = defineStore('carrusel', () => {
    const carruseles = ref([
        {
          id: 1,
          imageUrl: "1.png",
        },
        {
          id: 2,
          imageUrl: "2.png",
        },
        {
          id: 3,
          imageUrl: "3.png",
        },
        {
          id: 4,
          imageUrl: "4.png",
        },
      ])

      return {carruseles}
})