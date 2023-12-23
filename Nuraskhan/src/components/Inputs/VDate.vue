<script setup>
import {defineProps, defineEmits, ref , watch} from 'vue'

const emits = defineEmits(['update:modelValue'])

const {modelValue} = defineProps({
  modelValue:String,
})

const value = ref(modelValue);

watch(value , ()=>{
  emits('update:modelValue' ,value.value)
})
</script>

<template>
  <div>
    <input type="date"  v-model="value">
  </div>

</template>

<style scoped>

</style>