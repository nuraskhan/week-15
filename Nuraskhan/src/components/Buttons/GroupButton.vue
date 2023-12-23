<script setup>
import {defineProps, defineEmits, ref , watch} from 'vue'
import VButton from "./VButton.vue";
import VDivider from "../Others/VDivider.vue";

const emits = defineEmits(['update:modelValue'])

const {modelValue} = defineProps({
  modelValue:String,
  data:Array
})

const value = ref(modelValue);

watch(value , ()=>{
  emits('update:modelValue' ,value.value)
})
</script>

<template>
  <div class="group">
    <ul>
      <li v-for="(info,index) in data"><VButton @click="value=info" variant="text">{{info}}</VButton><VDivider v-if="index !== data.length-1" type="vertical" color="success"/> </li>
    </ul>
  </div>

</template>

<style scoped>
.group {
  display: flex;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid;
}

ul {

  list-style: none;
  display: flex;
  padding: 0;
}
li {
  display: flex;
}


</style>