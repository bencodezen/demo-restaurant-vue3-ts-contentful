<script setup lang="ts">
import { computed } from 'vue'

type Diets = 'Vegetarian' | 'Vegan' | 'Pescatarian' | 'Gluten-Free'

const props = defineProps<{ type: Diets }>()

const symbol = computed(() => {
  switch (props.type) {
    case 'Vegetarian':
      return 'V'
    case 'Vegan':
      return 'VE'
    case 'Pescatarian':
      return 'P'
    case 'Gluten-Free':
      return 'GF'
  }
})
</script>

<template>
  <abbr :title="type" class="diet-icon">{{ symbol }}</abbr>
</template>

<style></style>
