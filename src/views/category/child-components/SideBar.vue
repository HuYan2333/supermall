<template>
  <div>
    <scroll class="side-bar" >
        <div class="content" v-for="(item,index) in cateList" :key="index" 
              :class="{active:index === currentIndex}" @click="itemClick(index)">
          <div>{{item.title}}</div>
        </div>   
    </scroll>  
  </div>
</template>
<script>
import scroll from 'components/common/scroll/Scroll'
export default {
  name: 'SideBar',
  props:{
    cateList:{
      type:Array,
      default(){
        return []
      }
    },
    
  },
  components:{
    scroll
  },
  data () {
    return {
      isActive:false,
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('sidebarClick',index)
    }
    
  },
}
</script>
<style scoped>
.side-bar{
  width: 100px;
  height: 100%;
  background: #f6f6f6;
  text-align: center;
  overflow: hidden;
}
.content{
  height: 45px;
  line-height: 45px;
  font-size: 14px;
}
.active{
  color: var(--color-high-text);
  background:#fff;
  font-weight: 700;
  border-left: 3px solid var(--color-high-text);
}
</style>
