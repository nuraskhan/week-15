<script setup>
import {defineEmits, ref, watch} from "vue";
const emits = defineEmits(['update:modelValue'])

const {moduleValue} = defineProps({
  moduleValue:String,
  label:String
})
const value = ref(moduleValue)

watch(value , ()=>{
  emits('update:modelValue' ,value.value)
})
</script>

<template>
  <div>
    <input type="radio" v-model="value" :value="label">
    <label for="">{{label}}</label>
  </div>
</template>

<style scoped>

</style>