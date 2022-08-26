<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-base">
    <div class="info-title">{{goods.title}}</div>
    <div class="price">
      <span class="info-price">{{goods.newPrice}}</span>
      <span class="info-old-price">{{goods.oldPrice}}</span>
      <span class="info-discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length -1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div> 
  </div>
</template>
<script>
export default {
  name: 'DetailBaseInfo',
  props:{
    goods:{
      type:Object,
      default(){
        return {}
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
.detail-base{
  padding:8px;
}
.info-title{
  margin-bottom: 8px;
  color: #222;
}
.price{
  margin-bottom: 8px;
}
.info-price{
  color:var(--color-high-text);
  font-weight: 600;
}
.info-old-price{
  text-decoration: line-through;
  font-size: 12px;
  margin: 0 5px;
}
.info-discount{
  color: #fff;
  background: var(--color-high-text);
  border-radius: 6px;
  font-size: 12px;
  vertical-align: top;
  padding:1px 3px;
}
.info-other{
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  text-align: center;
  font-size: 12px;
  border-bottom: 1px solid rgba(100,100,100,.1);  
}
.info-services{
  display: flex;
  justify-content: space-between;
  color: #333;
  font-size: 13px;
  padding: 10px 0;
}

.info-services img{
  height: 14px;
  width: 14px;
  position: relative;
  top:2px;
}
</style>
