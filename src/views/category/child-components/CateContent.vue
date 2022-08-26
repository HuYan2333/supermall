<template>
  <div class="cate-content" v-if="subcategory!=null">
    <div class="sub-item" v-for="(item,index) in subcategory" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CateContent',
  props:{
    subcategory:{
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
.cate-content{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.sub-item{
  width: 28%;
  font-size: 14px;
  text-align: center;
  margin-top:10px;
  margin-left:10px;
}
.sub-item img{
  width: 100%;
}
</style>
