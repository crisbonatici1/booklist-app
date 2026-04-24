<template>
  <article class="libro-card">
    <h3>{{ libro.titulo }}</h3>
    <p><strong>Autor:</strong> {{ libro.autor }}</p>
    <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
    <p><strong>Descripción:</strong> {{ libro.descripcion }}</p>

    <div class="acciones">
      <RouterLink :to="`/libros/${libro.id}`" class="btn detalle">
        Ver detalle
      </RouterLink>

      <button @click="$emit('eliminar', libro.id)" class="btn eliminar">
        Eliminar
      </button>
    </div>
  </article>
</template>

<script setup>
defineProps({
  libro: {
    type: Object,
    required: true
  }
})

defineEmits(['eliminar'])
</script>

<style scoped>
.libro-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 18px rgba(0,0,0,0.08);
}

.acciones {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 15px;
}

.btn {
  border: none;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}

.detalle {
  background: #2563eb;
  color: white;
}

.eliminar {
  background: #ef4444;
  color: white;
}
</style>