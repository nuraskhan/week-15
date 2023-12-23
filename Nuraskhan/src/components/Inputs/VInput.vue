<script setup>
import {defineProps, defineEmits, ref , watch} from 'vue'

const emits = defineEmits(['update:modelValue'])

const {modelValue} = defineProps({
  modelValue:String,
  placeholder:String,
  type:{
    type:String,
    default:'text',
    validator:(val)=>
      [
          'text',
          'textarea',
          'tel',
          'password',
          'email',
          'search'
      ].includes(val)

  }
})

const value = ref(modelValue);

watch(value , ()=>{
  emits('update:modelValue' ,value.value)
})
</script>

<template>
  <div>
    <input v-if="type!=='textarea'" :type="type" :placeholder="placeholder" v-model="value">
    <textarea v-else :placeholder="placeholder" v-model="value"></textarea>
  </div>

</template>

<style scoped>

</style>