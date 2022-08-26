<template>
  <div class="info">
    <div class="item" v-for="(item,index) in listData" :key="index">
      <img :src="getImg(item.icon)" alt="">
      <div>{{item.info}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NormalListView',
  data () {
    return {

    }
  },
  props:{
    listData:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    getImg(iconName){
      return require('assets/img/profile/'+iconName)
    }
  },
}
</script>
<style scoped>
.info{
  margin-top:15px;
}
.item{
  display: flex;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: #222;
  padding-left: 15px;
  background: #fff;
}
img{
  height: 16px;
  width: 16px;
  margin-top: 7px;
}
.item div{
  flex: 1;
  margin-left: 5px;
  border-bottom: 1px solid rgb(240, 237, 237);
}
.item:last-of-type div{
  border-bottom: none;
}
</style>
