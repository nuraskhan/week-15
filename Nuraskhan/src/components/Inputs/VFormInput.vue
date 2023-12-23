<script setup>
import VInput from "./VInput.vue";
import VFile from "./VFile.vue";
import {defineEmits, reactive, ref, watch} from "vue";
import VDate from "./VDate.vue";

const emits = defineEmits(['update:modelData'])

const {modelData} = defineProps({
  modelData:Object,
  text:String,
  email:String,
  password:String,
  tel:String,
  file:Object,
  birthday:Date
})
const data =reactive({
      text:String,
      email:String,
      password:String,
      tel:String,
      file:Object,
      birthday:Date
})
watch(data , ()=>{
  emits('update:modelData' ,data)
})
</script>

<template>
<!--  <div>-->
<!--    <label>Text:</label>-->
<!--    <VInput type="text" v-model="text"/>-->
<!--    <label>Email:</label>-->
<!--    <VInput  type="email" v-model="email"/>-->
<!--    <label>Password:</label>-->
<!--    <VInput  type="password" v-model="password"/>-->
<!--    <label>Phone number:</label>-->
<!--    <VInput  type="tel" v-model="tel"/>-->
<!--    <VFile  label="photo" v-model="file"/>-->
<!--    <VDate   v-model="birthday"/>-->
<!--  </div>-->
</template>

<style scoped>

</style>