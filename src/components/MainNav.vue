<script setup lang="ts">
import NavItem from './NavItem.vue'
</script>

<template>
  <nav>
    <ul class="main-nav-list">
      <NavItem text="Menu" url="/menu" />
      <NavItem text="About" url="/about" />
      <NavItem text="Gallery" url="/gallery" />
    </ul>
  </nav>
</template>

<style>
.main-nav-list {
  margin: 0;
  padding: 0;
}
</style>
