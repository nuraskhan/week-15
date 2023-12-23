<template>
  <div class="divider" :class="[typeClass, colorClass]"></div>
</template>

<script>
import {computed} from "vue";

const props = defineProps({
  type: {
    type: String,
    default: 'horizontal',
    validator: (value) => ['horizontal', 'vertical'].includes(value),
  },
  color: {
    type: String,
    default: 'black',
    validator: (value) => ['black', 'red', 'green', 'blue'].includes(value),
  }
})
const typeClass = computed(()=>{
  return `divider-${this.type}`;
})
const colorClass = computed(()=>{
  return `divider-${this.color}`;
})
</script>

<style scoped>
.divider {
  height: 1px;
  width: 100%;
}

.divider-vertical {
  width: 1px;
  height: 100%;
}

.divider-black {
  background-color: black;
}

.divider-red {
  background-color: red;
}

.divider-green {
  background-color: green;
}

.divider-blue {
  background-color: blue;
}
</style>
