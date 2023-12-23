<script setup>
import {computed} from "vue";

const props = defineProps({
  type:String,
  color: {
    type:String,
    default:'grey',
    validator:(val)=>
        [
          'grey',
          'success',
          'info',
          'warning',
          'error'
        ].includes(val)
  },
  opacity: {
    type:String,
    default:'100',
    validator:(val)=>
        [
          '100',
          '75',
          '50',
          '25',
          '0'
        ].includes(val)
  }
})
const getOpacity =computed(()=>{
  if(props.opacity === '100'){
    return '1'
  }else if(props.opacity === '75'){
    return '0.75'
  }else if(props.opacity === '50'){
    return '0.5'
  }else if(props.opacity === '25'){
    return '0.25'
  }else if(props.opacity === '0'){
    return '0'
  }else{
    return '#'
  }
})
const getColor = computed(()=>{
  if(props.color === 'grey'){
    return 'grey'
  }else if(props.color === 'success'){
    return 'green'
  }else if(props.color=== 'info'){
    return 'blue'
  }else if(props.color === 'warning'){
    return 'orange'
  }else if(props.color === 'error'){
    return 'red'
  }
})
</script>


<template>
  <div class="container">
    <div v-if="type==='inset'" class="inset" :style="{borderColor:getColor, opacity:getOpacity}"></div>
    <div v-else-if="type==='vertical'" class="vertical" :style="{borderColor:getColor, opacity:getOpacity}"></div>
    <div v-else class="divider" :style="{borderColor:getColor, opacity:getOpacity}"></div>
  </div>
</template>

<style scoped>
.inset {
  width:80%;
  justify-content: center;
  border-top: 1px solid #ccc;
  margin: 10px 0;
}

.vertical {
  height: 100%;
  border-left: 1px solid #ccc;
  margin: 0 10px;
}

.divider {
  border-top: 1px solid #ccc;
  margin: 10px 0;
}
</style>