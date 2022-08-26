<template>
  <div class="cartlistitem">
    <div class="item-selector">
      <check-button :isChecked="product.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <img :src='product.image' alt="商品图片"/>
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{product.price}}</div>
        <div class="item-price right">×{{product.count}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
export default {
  components: { CheckButton },
  name: 'cartListItem',
  data () {
    return {
      
    }
  },
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    checkClick(){
      this.product.checked = !this.product.checked
    }
  },
}
</script>
<style scoped>
.cartlistitem{
  display: flex;
  padding: 8px;
  height: 110px;
  border-bottom: #777 solid 1px;
}
.item-selector{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
}
.item-img{
  width: 28%;
}

.item-img img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.item-info{
  padding:0px 10px;
  width: 73%;
}
.item-title{
  font-size: 15px;
  color: #222;
  margin-bottom: 5px;
}
.item-desc{
  font-size: 12px;
  color: #777;
}
.item-title , .item-desc{
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info-bottom{
  margin-top: 20px;
}
.info-bottom .item-price{
  font-size: 14px;
}
.left{
 color: red;
}
</style>
