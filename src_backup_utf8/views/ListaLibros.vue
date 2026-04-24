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
  background: #7c3aed;
  color: white;
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}

.encabezado {
  margin-bottom: 20px;
}

.sin-libros {
  background: #fee2e2;
  color: #991b1b;
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