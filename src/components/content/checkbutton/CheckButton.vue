<template>
  <div class="check-button" :class="{check:isChecked}" >
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>
<script>
export default {
  name: 'CheckButton',
  data () {
    return {

    }
  },
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  },
  methods: {
  },
}
</script>
<style scoped>
.check-button{
  line-height: 18px;
}
.check-button img{
  border: 1px solid #aaa;
  border-radius: 50%;
}
.check img{  
  border: 1px solid red;
  background: red;
}
</style>
