<template>
  <section class="inicio">
    <h2>Bienvenido a BookList</h2>
    <p>
      Esta aplicación permite gestionar un catálogo de libros de forma interactiva.
    </p>

    <div class="card">
      <h3>Usuario actual</h3>
      <p class="usuario">{{ nombreUsuario }}</p>

      <h3>Contador reactivo</h3>
      <p class="contador">{{ contador }}</p>

      <div class="acciones">
        <button @click="disminuir">-1</button>
        <button @click="aumentar">+1</button>
        <button @click="reiniciar">Reiniciar</button>
      </div>
    </div>

    <div class="card">
      <h3>¿Qué puedes hacer aquí?</h3>
      <ul>
        <li>Agregar libros</li>
        <li>Ver listado reactivo</li>
        <li>Eliminar libros</li>
        <li>Ir al detalle de cada libro</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const nombreUsuario = ref('Cris')
const contador = ref(0)

const aumentar = () => {
  contador.value++
}

const disminuir = () => {
  contador.value--
}

const reiniciar = () => {
  contador.value = 0
}
</script>

<style scoped>
.inicio {
  text-align: center;
}

.card {
  max-width: 600px;
  margin: 25px auto;
  background: white;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.usuario,
.contador {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0 20px;
}

.acciones {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

button {
  border: none;
  background: #2563eb;
  color: white;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 8px 0;
}
</style>