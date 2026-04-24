<template>
  <div class="app">
    <header class="header">
      <h1>📚 BookList SPA</h1>

      <nav class="nav">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/libros">Lista de Libros</RouterLink>
      </nav>
    </header>

    <main class="contenido">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f7fb;
  color: #1f2937;
}

a {
  text-decoration: none;
}

.app {
  min-height: 100vh;
}

.header {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
  padding: 20px;
  text-align: center;
}

.nav {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.nav a {
  color: white;
  background: rgba(255,255,255,0.15);
  padding: 10px 16px;
  border-radius: 10px;
  font-weight: bold;
}

.nav a.router-link-active {
  background: white;
  color: #2563eb;
}

.contenido {
  max-width: 1100px;
  margin: 0 auto;
  padding: 25px;
}
</style>