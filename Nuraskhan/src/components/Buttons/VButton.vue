<script setup>
import Spinner from "../Others/Spinner.vue";

const props = defineProps({
  size: {
    type:Number,
    default:20
  },
  leftIcon:Object,
  rightIcon:Object,
  centerIcon:Object,
  loading:String,
  rounded:Number,
  padding:Number,
  paddingX:Number,
  paddingY:Number,
  variant:String
});
</script>

<template>
    <button
        class="btn" :style="{fontSize : props.size+'px' , borderRadius: props.rounded+'px', padding: props.padding+'px', paddingTop: props.paddingY+'px',paddingBottom: props.paddingY+'px', paddingLeft: props.paddingX+'px',paddingRight: props.paddingX+'px'}"
        :class="props.variant"
    >
      <Spinner v-if="props.loading=== 'left'"  :size="props.size" :class="{ loadLeft : props.loading==='left'}"  />
    <component
        :is="props.leftIcon"
        class="left-btn"
    />
    <slot v-if="loading!=='center' && !centerIcon"  />
      <component
          :is="props.centerIcon"
          class="center-btn"
      />
      <Spinner v-if="props.loading === 'center'" :size="props.size" :class="{ loadCenter : props.loading==='center'}"></Spinner>
      <component
          :is="props.rightIcon"
          class="right-btn"
      />
      <Spinner v-if="props.loading=== 'right'"  :size="props.size" :class="{ loadRight : props.loading==='right'}"  />
  </button>

</template>

<style scoped>
.btn{
  display: inline-flex;
  align-items: center;
  background-color: black;
  color:white;
  font-size: 12px;
  border-radius: 4px;
  min-height: 32px;
  padding: 2px 12px;
  font-weight:bold ;
}
.btn:hover{
  background-color: #7a7a7a;
}
.left-btn{
  width:20px;
  height: 20px;
  margin-right: 8px;
}
.right-btn{
  width:20px;
  height: 20px;
  margin-left: 8px;
}
.center-btn{
  width:20px;
  height: 20px;
}
.loadLeft{
  margin-top:2px;
  margin-bottom: 2px;
  margin-right: 5px;
}
.loadRight{
  margin-top:2px;
  margin-bottom: 2px;
  margin-left: 5px;
}
.loadCenter{
  margin-top:2px;
  margin-bottom: 2px;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.elevated{

}
.tonal{
  background-color: #7a7a7a;
}
.tonal:hover{
  border-color: transparent;
}
.outlined{
  background: none;
  border:1px solid white;
}
.text{
  background: none;
  border-color: transparent;
}
.plain{
  background: none;
  opacity: 0.5;
}
.plain:hover{
  background: none;
  opacity: initial;
  border-color: transparent;
}
</style>