<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MenuItem from '../components/MenuItem.vue'

const menuData = ref([])

onMounted(async () => {
  const response = await fetch('/data/menu.json').then(res => res.json())

  menuData.value = response
})
</script>

<template>
  <main class="menu-page">
    <h1>Menu</h1>
    <h2 class="section-title">Chef's Menu</h2>
    <MenuItem v-for="item in menuData" :key="item.title" :item="item" />
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
