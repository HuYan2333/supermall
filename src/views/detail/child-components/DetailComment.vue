<template>
  <div class="detail-comment" v-if="Object.keys(shopComment).length !== 0">
    <div class="user-comment">
      <span class="left">用户评价</span>
      <span class="right">更多</span>
    </div>
    <div class="user-info">
      <img :src="shopComment.user.avatar" alt="">
      <span>{{shopComment.user.uname}}</span>
    </div>
    <div class="detail-info">
      <p>{{shopComment.content}}</p>
      <div class="info-other">
        <span class="date">{{shopComment.created | showDate}}</span>
        <span>{{shopComment.style}}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img :src="item" alt="" v-for="(item,index) in shopComment.images" :key="index">
    </div>
  </div>
</template>
<script>
import {formatDate} from 'common/utils'
export default {
  name: 'DetailComment',
  props:{
    shopComment:{
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
  filters: {
    showDate(value) {
      let date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  methods: {
  },
}
</script>
<style scoped>
.detail-comment{
  padding: 10px 15px;
  border-bottom: 5px solid rgb(240, 239, 239);
}
.user-comment{
  height: 40px;
  line-height: 40px;
  border-bottom: 2px solid #ccc;
}
.user-comment span{
  font-size: 14px;
  color: #333;
}
.user-info{
  margin: 15px 0;
}
.user-info img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ccc;
  vertical-align: middle;
}
.user-info span{
  color: #222;
  font-size: 14px;
  margin-left: 8px;
}
.detail-info p{
  color: #777;
  font-size: 14px;
}
.info-other{
  margin: 10px 0;  
  color: #999;
  font-size: 12px;
}
.info-other .date{
  margin-right: 7px;
}
.info-imgs img{
  width: 100px;
  height: 80px;
  margin-right: 10px;
}
</style>
