<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div> 
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="add-cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'DetailBottom',
  data () {
    return {

    }
  },
  methods: {
    addToCart(){
      this.$emit('addToCart')
    }
  },
}
</script>
<style scoped>
.bottom-bar{
  height: 49px;
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0px;
  display: flex;
}
.bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
.bottom-bar .bar-left{
  display: flex;
  width: 50%;
  text-align: center;
}
.bar-item{
  flex: 1;
  display: flex;
}
.bar-item>div{
  flex: 1;
}
.bar-left img{
  height: 30px;
  width: 30px;
}

.bar-left .service {
  background-position:0 -54px;
}
.bar-left .shop {
  background-position:0 -98px;
}
.bar-left .select{
  background-position:0 0px;
}
.bar-right{
  font-size: 15px;
  text-align: center;
  line-height: 49px;
}
.bar-right .add-cart{
   background-color: #ffe817;
  color: #333;
}
.bar-right .buy {
  background-color: #f69;
  color: #fff;
}
</style>
