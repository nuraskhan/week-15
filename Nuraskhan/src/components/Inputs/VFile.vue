<script setup>
import {computed, defineProps, defineEmits, ref, watch} from "vue";

const emits=defineEmits(['update:modelValue'])

const {modelValue} = defineProps({
  modelValue:Array,
  label:String
})
const value = ref(modelValue)
const uploadFile=(e)=>{
  const[file] = e.target.files;
  value.value=file

}

const previewFilePath =computed(()=>{
  if(value.value){
    return URL.createObjectURL(value.value)
  }
  return '#'
})


watch(value , ()=>{
  emits('update:modelValue' ,value.value)
})


</script>

<template>
  <div class="container">
    <label class="label">{{label}}:</label>
    <div class="file">
      <input type="file"
             @change="uploadFile"
             class="input">
      <div class="div-prev" style="justify-content: center; width:200px">
        <img v-if="previewFilePath!=='#'" :src="previewFilePath" alt="" class="preview">
      </div>
    </div>
    </div>
</template>

<style scoped>
.container{
  width:100%;
  border:1px solid;
  border-radius: 4px;
  padding:10px;
  margin-top:10px;

}
.label{
  font-weight: bold;
  display: block;
  margin-top:10px;
}
.input{
  border:1px solid;
  border-radius: 4px;
  padding:10px;
  margin-top:10px;
}
img{
  width:200px;
}
</style>