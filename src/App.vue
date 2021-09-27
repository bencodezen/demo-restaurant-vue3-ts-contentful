<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MainSidebar from './components/MainSidebar.vue'
</script>

<template>
  <div class="home-grid">
    <MainSidebar />
    <router-view />
  </div>
</template>

<style>
@import './styles/main.css';
</style>
