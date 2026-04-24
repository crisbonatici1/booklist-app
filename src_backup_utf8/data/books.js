import { reactive } from 'vue'

export const books = reactive([
  {
    id: 1,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    categoria: 'Novela',
    descripcion: 'Una obra clásica del realismo mágico.'
  },
  {
    id: 2,
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    categoria: 'Fábula',
    descripcion: 'Una historia breve con reflexiones profundas.'
  }
])