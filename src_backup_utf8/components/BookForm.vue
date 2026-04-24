<template>
  <section class="form-section">
    <h2>Agregar nuevo libro</h2>

    <form @submit.prevent="agregarLibro" class="formulario">
      <input
        v-model="nuevoLibro.titulo"
        type="text"
        placeholder="Título del libro"
        @keydown.enter.prevent="agregarLibro"
      />

      <input
        v-model="nuevoLibro.autor"
        type="text"
        placeholder="Autor"
      />

      <select v-model="nuevoLibro.categoria">
        <option disabled value="">Seleccione una categoría</option>
        <option>Novela</option>
        <option>Fábula</option>
        <option>Poesía</option>
        <option>Ciencia ficción</option>
        <option>Historia</option>
      </select>

      <textarea
        v-model="nuevoLibro.descripcion"
        placeholder="Descripción del libro"
        rows="4"
      ></textarea>

      <button type="submit" class="btn-agregar">
        Agregar libro
      </button>

      <button type="button" @click.once="mostrarAviso" class="btn-aviso">
        Mostrar aviso una vez
      </button>
    </form>

    <div class="preview">
      <h3>Vista previa en tiempo real</h3>
      <p><strong>Título:</strong> {{ nuevoLibro.titulo }}</p>
      <p><strong>Autor:</strong> {{ nuevoLibro.autor }}</p>
      <p><strong>Categoría:</strong> {{ nuevoLibro.categoria }}</p>
      <p><strong>Descripción:</strong> {{ nuevoLibro.descripcion }}</p>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { books } from '../data/books'

const nuevoLibro = reactive({
  titulo: '',
  autor: '',
  categoria: '',
  descripcion: ''
})

const agregarLibro = () => {
  if (
    !nuevoLibro.titulo.trim() ||
    !nuevoLibro.autor.trim() ||
    !nuevoLibro.categoria.trim() ||
    !nuevoLibro.descripcion.trim()
  ) {
    alert('Completa todos los campos')
    return
  }

  books.push({
    id: Date.now(),
    titulo: nuevoLibro.titulo,
    autor: nuevoLibro.autor,
    categoria: nuevoLibro.categoria,
    descripcion: nuevoLibro.descripcion
  })

  nuevoLibro.titulo = ''
  nuevoLibro.autor = ''
  nuevoLibro.categoria = ''
  nuevoLibro.descripcion = ''
}

const mostrarAviso = () => {
  alert('Este botón usa .once y solo funciona una vez')
}
</script>

<style scoped>
.form-section {
  background: white;
  padding: 22px;
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(0,0,0,0.08);
  margin-bottom: 25px;
}

.formulario {
  display: grid;
  gap: 12px;
}

input,
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-size: 15px;
}

.btn-agregar,
.btn-aviso {
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}

.btn-agregar {
  background: #10b981;
  color: white;
}

.btn-aviso {
  background: #f59e0b;
  color: white;
}

.preview {
  margin-top: 20px;
  background: #f9fafb;
  border-left: 5px solid #2563eb;
  padding: 15px;
  border-radius: 12px;
}
</style>