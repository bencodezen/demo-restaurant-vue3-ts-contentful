<script setup lang="ts">
import NavItem from './NavItem.vue'
</script>

<template>
  <nav>
    <ul class="main-nav-list">
      <NavItem text="Menu" />
      <NavItem text="About" />
      <NavItem text="Gallery" />
    </ul>
  </nav>
</template>

<style>
.main-nav-list {
  margin: 0;
  padding: 0;
}
</style>
