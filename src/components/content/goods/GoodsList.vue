<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"/>
  </div>
</template>
<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'
export default {
  name: 'GoodsList',
  data () {
    return {

    }
  },
  components:{
    GoodsListItem,
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
  },
}
</script>
<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;/* 包裹 默认是不包过 */
  justify-content: space-around; /* 均等分布 */

  padding: 2px;/*两边和中建缝隙不等，看着不好看 微调一下 */
}
</style>
