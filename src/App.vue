<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import MainSidebar from './components/MainSidebar.vue'
</script>

<template>
  <div class="home-grid">
    <MainSidebar />
    <main>
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    </main>
  </div>
</template>

<style>
:root {
  --sansSerif: 'Quicksand', 'Segoe UI', Candara, 'DejaVu Sans',
    'Bitstream Vera Sans', 'Trebuchet MS', Verdana, 'Verdana Ref', sans-serif;
}

*,
html,
body {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: var(--sansSerif);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.built-with-text {
  font-size: 0.8rem;
}

.home-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
}

.sidebar {
  height: 100vh;
  border-right: 1px solid #222;
  left: 0;
}
</style>
