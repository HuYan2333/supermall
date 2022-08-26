<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" 
      :src="item" :key="index" alt="" @load="imageLoad">
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailGoodsInfo',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
      counter:0,
      imagesLength:0
    }
  },
  methods: {
    imageLoad(){
      //判断所有的图片全部加载完之后，在进行一次回调
      if(++this.counter === this.imagesLength){
        this.$emit('imageLoad')
      }
    }
  },
  watch:{//监听的是data里的detailInfo的变化
    detailInfo(){
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    }
  }
}
</script>
<style scoped>
.detail-goods-info{
  padding: 0 15px;
  margin: 20px 0;
  border-bottom: 5px solid #f2f5f8;  
}
.info-desc .start,.info-desc .end{
  height: 1px;
  width: 90px;
  background-color: rgb(172, 169, 169);
  position: relative;
}
.start{
  float: left;
}
.end{
  float: right;
}
.info-desc .start::before,.info-desc .end::after{
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background:#333;
  bottom: 0;
}
.info-desc .end::after{
  right: 0;
}
.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>
