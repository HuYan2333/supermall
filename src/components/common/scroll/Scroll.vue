<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import bScroll from "better-scroll"
export default {
  name: 'Scroll',
  data () {
    return {
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted() {
    //创建Bscroll对象
    this.scroll = new bScroll(this.$refs.wrapper,{
      click:true,//点击 false时：div不可以  button可以 
      probeType:this.probeType,//滚动方式(实时监听滚动)
      pullUpLoad:this.pullUpLoad,//上拉加载
    })
    //监听滚动的位置
    if(this.probeType === 2 || this.probeType === 3){
      this.scroll.on('scroll',(position) =>{
      //console.log(position);
      this.$emit('scroll',position)
    })
    }
    //监听是否滚动到底部
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',() =>{
      this.$emit('pullingUp')
    })
    }
   
  },
  methods: {
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  },
}
</script>
<style scoped>

</style>
