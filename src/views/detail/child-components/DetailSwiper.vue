<template>
  <div>
    <swiper>
      <swiper-item v-for="item in topImages" :key="item.id" class="swiper-item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper,SwiperItem} from "components/common/swiper"

export default {
  name: 'DetailSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
  },
}
</script>
<style scoped>
.swiper-item{
  height: 300px;
  overflow: hidden;
}
</style>
