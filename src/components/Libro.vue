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
  background: rgba(15, 23, 42, 0.78);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 18px rgba(0,0,0,0.28);
  border: 1px solid rgba(255,255,255,0.08);
  color: #f8fafc;
}

.libro-card h3 {
  color: #ffffff;
}

.libro-card p {
  color: #e2e8f0;
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
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
}

.eliminar {
  background: linear-gradient(135deg, #ef4444, #f97316);
  color: white;
}
</style>