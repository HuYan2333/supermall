<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-name">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>      
    </div>
    <div class="shop-middle-info">
      <div class="left-content">
        <div class="sell-count">
          <span>{{shop.sells | Sells}}</span>
          <div>总销量</div>
        </div>
        <div class="baby">
          <span>{{shop.goodsCount | Sells}}</span>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="right-content">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index" class="item-info">
            <td class="item-name">{{item.name}}</td>
            <td :class="{'price-better':item.isBetter}">{{item.score}}</td>
            <td class="quality-low" :class="{'quality':item.isBetter}">{{item.isBetter ? '高':'低'}}</td>
          </tr>
        </table>
      </div>  
    </div>
      <div class="to-shop">进店逛逛</div> 
    </div>
</template>
<script>
export default {
  name: 'DetailShopInfo',
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    Sells(value){
      if(value<10000) return value
      return (value/10000).toFixed(1)+'万'
    }
  },
  methods: {
  },
}
</script>
<style scoped>
.detail-shop-info{
  border-top:3px solid rgba(100,100,100,.1);
  padding: 8px;
  background: #fff;
  color: #222;
  border-bottom: 3px solid #f2f5f8;
}
.shop-name{
  height: 45px;
  display: flex;
  align-items: center;
}
.shop-name img{
  height: 45px;
  width: 45px;
  vertical-align: middle;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.1);
}
.shop-name span{
  margin-left: 8px;
  font-size: 17px;
}

.shop-middle-info{
  display: flex;
}
.left-content{
  flex: 1;
  margin: 20px 0;
  display: flex;
  align-items: center;
  width: 50%;
  border-right: 2px solid #ccc;
  text-align: center;
}
.sell-count, .baby{
  flex:1;
  font-size: 14px;
}
.right-content{
  flex: 1;
  color: green;
  font-size: 14px;
}
.item-info{
  margin-top: 8px;
}

.item-info span{
  margin: 0 5px;
}
.right-content .item-name{
  color: #222;
}
.quality-low{
  color: #fff;
  background: green;
}
.price-better{
  color: var(--color-high-text);  
}
.quality{
  color: #fff;
  background: var(--color-high-text);
}

.right-content table{
  margin: 0 auto;
  border-spacing: 4px 10px;
}
.to-shop{
  height: 30px;
  width: 160px;
  background: rgb(240, 238, 238);
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  margin: 8px auto;
}

</style>
