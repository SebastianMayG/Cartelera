import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useCarruselStore = defineStore('carrusel', () => {
    const carruseles = ref([
        {
          id: 1,
          imageUrl: "https://media.istockphoto.com/id/1294450400/es/foto/campeche-mexico.jpg?s=1024x1024&w=is&k=20&c=GOQlycs308m75rKlAZr3g5kAbd841_tvxXX3g6CxHZI=",
        },
        {
          id: 2,
          imageUrl: "https://media.istockphoto.com/id/1294450400/es/foto/campeche-mexico.jpg?s=1024x1024&w=is&k=20&c=GOQlycs308m75rKlAZr3g5kAbd841_tvxXX3g6CxHZI=",
        },
        {
          id: 3,
          imageUrl: "https://media.istockphoto.com/id/1294450400/es/foto/campeche-mexico.jpg?s=1024x1024&w=is&k=20&c=GOQlycs308m75rKlAZr3g5kAbd841_tvxXX3g6CxHZI=",
        },
        {
          id: 4,
          imageUrl: "https://media.istockphoto.com/id/1294450400/es/foto/campeche-mexico.jpg?s=1024x1024&w=is&k=20&c=GOQlycs308m75rKlAZr3g5kAbd841_tvxXX3g6CxHZI=",
        },
        {
          id: 5,
          imageUrl: "https://media.istockphoto.com/id/1294450400/es/foto/campeche-mexico.jpg?s=1024x1024&w=is&k=20&c=GOQlycs308m75rKlAZr3g5kAbd841_tvxXX3g6CxHZI=",
        },
      ])

      return {carruseles}
})