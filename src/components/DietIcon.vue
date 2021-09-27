<script setup lang="ts">
import { computed } from 'vue'

type Diets = 'glutenFree' | 'vegan' | 'vegetarian'

const props = defineProps<{ type: Diets }>()

const symbol = computed(() => {
  switch (props.type) {
    case 'glutenFree':
      return 'GF'
    case 'vegetarian':
      return 'V'
    case 'vegan':
      return 'VE'
  }
})
</script>

<template>
  <abbr :title="type" class="diet-icon">{{ symbol }}</abbr>
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
</style>
