<template>
  <section class="detalle" v-if="libro">
    <h2>Detalle del libro</h2>

    <div class="card">
      <h3>{{ libro.titulo }}</h3>
      <p><strong>Autor:</strong> {{ libro.autor }}</p>
      <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
      <p><strong>Descripción:</strong> {{ libro.descripcion }}</p>

      <RouterLink to="/libros" class="volver">
        ← Volver a la lista
      </RouterLink>
    </div>
  </section>

  <section v-else class="no-encontrado">
    <h2>Libro no encontrado</h2>
    <RouterLink to="/libros" class="volver">
      ← Volver a la lista
    </RouterLink>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { books } from '../data/books'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const libro = computed(() =>
  books.find(item => item.id === Number(props.id))
)
</script>

<style scoped>
.detalle,
.no-encontrado {
  display: flex;
  justify-content: center;
  color: #f8fafc;
}

.card {
  width: 100%;
  max-width: 650px;
  background: rgba(15, 23, 42, 0.72);
  padding: 25px;
  border-radius: 18px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.28);
  border: 1px solid rgba(255,255,255,0.08);
}

.volver {
  display: inline-block;
  margin-top: 18px;
  color: white;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
}
</style>