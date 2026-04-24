<template>
  <section>
    <div class="barra-superior">
      <button @click="mostrarFormulario = !mostrarFormulario" class="toggle-btn">
        {{ mostrarFormulario ? 'Ocultar formulario' : 'Mostrar formulario' }}
      </button>
    </div>

    <div v-show="mostrarFormulario">
      <BookForm />
    </div>

    <div class="encabezado">
      <h2>Lista de libros</h2>
      <p>Total de libros: {{ books.length }}</p>
    </div>

    <p v-if="books.length === 0" class="sin-libros">
      No hay libros disponibles.
    </p>

    <div v-else class="grid-libros">
      <Libro
        v-for="libro in books"
        :key="libro.id"
        :libro="libro"
        @eliminar="eliminarLibro"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BookForm from '../components/BookForm.vue'
import Libro from '../components/Libro.vue'
import { books } from '../data/books'

const mostrarFormulario = ref(true)

const eliminarLibro = (id) => {
  const index = books.findIndex(libro => libro.id === id)
  if (index !== -1) {
    books.splice(index, 1)
  }
}
</script>

<style scoped>
.barra-superior {
  margin-bottom: 16px;
}

.toggle-btn {
  border: none;
  background: linear-gradient(135deg, #7c3aed, #db2777);
  color: white;
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}

.encabezado {
  margin-bottom: 20px;
}

.encabezado h2 {
  color: #ffffff;
  font-size: 32px;
  margin-bottom: 8px;
}

.encabezado p {
  color: #cbd5e1;
  font-size: 16px;
  font-weight: 500;
}

.sin-libros {
  background: rgba(127, 29, 29, 0.85);
  color: #ffffff;
  padding: 14px;
  border-radius: 10px;
  font-weight: bold;
}

.grid-libros {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}
</style>