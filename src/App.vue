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
:root {
  --bg-main: #1e1b4b;
  --bg-soft: #312e81;
  --bg-accent: #0f766e;
  --bg-accent-2: #7c3aed;
  --text-main: #f8fafc;
  --text-dark: #172033;
}

* {
  box-sizing: border-box;
}

html, body, #app {
  min-height: 100%;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text-main);
  background:
    radial-gradient(circle at top left, rgba(59,130,246,0.35) 0%, transparent 25%),
    radial-gradient(circle at top right, rgba(168,85,247,0.30) 0%, transparent 25%),
    radial-gradient(circle at bottom left, rgba(20,184,166,0.28) 0%, transparent 25%),
    linear-gradient(135deg, #111827 0%, #1e1b4b 35%, #312e81 65%, #0f766e 100%);
  background-attachment: fixed;
}

a {
  text-decoration: none;
}

.app {
  min-height: 100vh;
}

.header {
  background: linear-gradient(135deg, rgba(37,99,235,0.9), rgba(124,58,237,0.9), rgba(217,70,239,0.85));
  color: white;
  padding: 24px 20px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
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
  background: rgba(255,255,255,0.14);
  padding: 10px 16px;
  border-radius: 12px;
  font-weight: bold;
  border: 1px solid rgba(255,255,255,0.15);
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