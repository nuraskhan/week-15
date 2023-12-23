<script setup>
import {ref} from "vue";
import VToggle from "./components/Toggles/VToggle.vue";
import GroupButton from "./components/Buttons/GroupButton.vue";
import VSlider from "./components/Slider/VSlider.vue";
const a = ref('')
</script>
<template>
  <VSlider type="horizontal" color="black"/>
  {{a}}
</template>

<style scoped>

</style>
