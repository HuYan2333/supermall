<template>
  <div>
    <swiper>
       <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link" alt="">
          <img :src="item.image" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"
export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imageLoad(){
      if(!this.isLoad){//让图片加载一次就可以，不需要加载四次
        this.$emit('swipperImageLoad')
        this.isLoad=true
      }
      
    }
  },
}
</script>

<style scoped>

</style>