<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

const iconFileName = computed(() => {
  return `${props.text.toLowerCase()}-icon.svg`
})
</script>

<template>
  <li class="nav-item">
    <a href="#" class="nav-item-link">
      <img :src="`/${iconFileName}`" alt="" />
      <span>{{ text }}</span>
    </a>
  </li>
</template>

<style>
.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  list-style-type: none;
  border-top: 1px solid #222;
}

.nav-item:last-child {
  border-bottom: 1px solid #222;
}

.nav-item-link {
  display: grid;
  justify-items: center;
  grid-template-rows: 40px auto;
  grid-row-gap: 5px;
  font-weight: bold;
  text-decoration: none;
  color: #222;
}
</style>
