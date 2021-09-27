<script setup lang="ts">
import MenuItem from '../components/MenuItem.vue'
</script>

<template>
  <main class="menu-page">
    <h1>Menu</h1>
    <h2 class="section-title">Chef's Menu</h2>
    <MenuItem />
  </main>
</template>

<style>
.menu-page {
  margin: 80px;
}

.section-title {
  margin: 0;
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
}

.section-title::after {
  content: '';
  display: block;
  width: 150px;
  height: 10px;
  margin-top: 20px;
  margin-left: 1px;
  background-color: #c83030;
}
</style>
