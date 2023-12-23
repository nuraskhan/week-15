<script setup>
import Button from "./VButton.vue";
import {ref} from "vue";
const clicked = ref(false);
const props = defineProps({
  icons:Array,
  data:Array,
})
</script>

<template>
  <div class="button-container">
    <div class="button">
      <Button @click="clicked = !clicked"><slot/> <div :class="{ up:clicked , down:!clicked } "></div></Button>
    </div>
    <div>
      <ul>

        </ul>
    </div>
  </div>
</template>

<style scoped>
.down{
  margin-left:10px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
.up{
  margin-left:10px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}
</style>