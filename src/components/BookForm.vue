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
  background: rgba(15, 23, 42, 0.78);
  padding: 22px;
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(0,0,0,0.28);
  margin-bottom: 25px;
  border: 1px solid rgba(255,255,255,0.08);
  color: #f8fafc;
}

.form-section h2 {
  color: #ffffff;
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
  border: 1px solid #64748b;
  border-radius: 10px;
  font-size: 15px;
  background: rgba(255,255,255,0.08);
  color: #ffffff;
}

input::placeholder,
textarea::placeholder {
  color: #cbd5e1;
}

/* IMPORTANTE: esto mejora la visibilidad del desplegable */
select {
  color: #ffffff;
  background-color: rgba(255,255,255,0.08);
}

select option {
  background-color: #ffffff;
  color: #111827;
}

select:focus,
input:focus,
textarea:focus {
  outline: none;
  border-color: #38bdf8;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.18);
}

.btn-agregar,
.btn-aviso {
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  color: white;
}

.btn-agregar {
  background: linear-gradient(135deg, #10b981, #14b8a6);
}

.btn-aviso {
  background: linear-gradient(135deg, #f59e0b, #f97316);
}

.preview {
  margin-top: 20px;
  background: rgba(30, 41, 59, 0.82);
  border-left: 5px solid #38bdf8;
  padding: 15px;
  border-radius: 12px;
  color: #f8fafc;
}

.preview h3 {
  color: #ffffff;
}
</style>