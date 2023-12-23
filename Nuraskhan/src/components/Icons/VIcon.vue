<script setup>
import {computed} from "vue";

const props = defineProps({
  size: {
    type:String,
    default:'small',
    validator:(val)=>
        [
          'x-small',
          'small',
          'medium',
          'large',
          'x-large'
        ].includes(val)
  },
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
  src: {
    type:String,
    required:true
  }
})
const getSize =computed(()=>{
  if(props.size === 'x-small'){
    return '10px'
  }else if(props.size === 'small'){
    return '15px'
  }else if(props.size === 'medium'){
    return '20px'
  }else if(props.size === 'large'){
    return '30px'
  }else if(props.size === 'x-large'){
    return '40px'
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
    <img :src="src" alt="Icon" class="icon" :style="{width: getSize , height:getSize , color:getColor}" v-bind="$attrs">
  </div>
</template>

<style scoped>
.container{
  display: block;
}
</style>