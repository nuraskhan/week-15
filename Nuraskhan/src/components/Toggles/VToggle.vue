<script setup>
import {defineEmits, ref, watch} from 'vue';
const emits = defineEmits(['update:modelValue'])
const {modelValue} = defineProps({
  modelValue:Boolean,
  isActive: {
    type:Boolean,
    default:true
  }
})
const isActive = ref(modelValue);

watch(isActive , ()=>{
  emits('update:modelValue' ,isActive.value)
})


function setNewToggleState() {
  isActive.value = !isActive.value;
}
</script>
<template>

  <div class="toggle-slider" >
    <label class="switch" >
      <input v-model="isActive" type="checkbox" @click="setNewToggleState" />
      <span class="track">
        <span class="handle"></span>
      </span>
    </label>
  </div>

</template>
<style scoped>
.switch {
position: relative;
display: inline-block;
width: 70px;
height: 30px;
}

input {
display: none;
}

.track {
display: flex;
align-items: center;
width: 100%;
height: 100%;
background-color:#ccc;
cursor: pointer;
border: 1px solid #ccc;
border-radius: 50px;
transition: 0.4s;
}

.handle {
display: flex;
width: 30px;
height: 30px;
background-color: #fff;
border-radius: 50%;
transition: 0.4s;
}

input:checked + .track {
background-color: #2196f3;
border: 1px solid #2196f3;
}

input:focus + .track {
box-shadow: 0 0 1px #2196f3;
}

input:checked + .track > .handle {
transform: translateX(40px);
}
</style>