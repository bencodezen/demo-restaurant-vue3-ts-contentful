<script setup lang="ts">
import MainNav from './MainNav.vue'
</script>

<template>
  <aside class="sidebar">
    <router-link to="/">
      <img src="/logo.svg" alt="" />
    </router-link>
    <MainNav />
    <footer class="main-footer">
      <p class="built-with-text">Built with Vue 3 and Netlify</p>
    </footer>
  </aside>
</template>

<style>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  display: grid;
  align-items: center;
  grid-template-rows: 200px 1fr 75px;
}

.main-footer {
  align-self: end;
}
</style>
