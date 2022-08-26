<template>
  <div class="params-info" v-if="Object.keys(paramInfo).length !==0">
    <table v-for="(item,index) in paramInfo.sizes" :key="index">
      <tr v-for="(tr,indey) in item" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
   
    <table class="rule">
      <tr v-for="(item,index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{item.key}}</td>
        <td class="info-param-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="param-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>

</template>
<script>
export default {
  name: 'DetailParamInfo',
  props:{
    paramInfo:{
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
.params-info{
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.params-info table {
  width: 100%;
  border-collapse: collapse;
}
 .params-info table tr{
  height: 42px;
}
.params-info table tr td{
  border-bottom: 1px solid #f2f5f8;
}
.info-param-key{
  width: 95px;
}
.info-param-value{
  color: #eb4868;
}
.param-img img{
  width: 100%;
}
</style>
