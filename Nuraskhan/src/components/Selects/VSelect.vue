<script setup>
import {defineEmits, ref, watch} from "vue";

const emits = defineEmits(['update:modelValue'])
const {modelValue} = defineProps({
  modelValue:String,
  label:String,
  name:String,
  data: Array,
  variant:String
})
const value = ref(modelValue);

watch(value , ()=>{
  emits('update:modelValue' , value.value)
})
</script>
<template>
  <div class="container">
    <label for="select">{{label}}</label>
    <select :name="name" id="select" v-model="value" >
      <option v-for="info in data" :key="info" :value="info">
        {{ info }}
      </option>
    </select>
  </div>
</template>

<style scoped>

label{
  display: block;
}
#select{
  font-size: 15px;
  border:1px solid;
  padding:10px;
  width:100px;
  height:50px;
}
</style>