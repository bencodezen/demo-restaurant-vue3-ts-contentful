<script setup lang="ts">
import DietIcon from './DietIcon.vue'
</script>

<template>
  <section>
    <div class="menu-item-header">
      <h3 class="menu-item-title">The Im-Pasta</h3>
      <span class="menu-item-price">$14</span>
      <ul class="menu-item-diet">
        <li><DietIcon type="Vegetarian" /></li>
        <li><DietIcon type="Vegan" /></li>
      </ul>
    </div>
    <p class="menu-item-description">
      This meal is pretty sus. It's the sneakiest pasta you'll ever eat, because
      it'll surprise you with a delicious punch in the face. You'll never want
      to vent on this one.
    </p>
  </section>
</template>

<style>
.diet-icon {
  width: 32px;
  height: 32px;
  border: 1px solid #222;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.menu-item-description {
  margin: 0;
}

.menu-item-diet {
  display: flex;
  margin: 0;
  padding: 0;
}

.menu-item-diet li {
  margin-left: 10px;
  list-style-type: none;
}

.menu-item-diet li:first-child {
  margin-left: 15px;
}

.menu-item-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.menu-item-price {
  margin-left: 15px;
  font-size: 18px;
}

.menu-item-title {
  margin: 0;
  font-size: 20px;
}
</style>
