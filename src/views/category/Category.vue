<template>
    <div class="category">
      <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
      <div class="content">
        <side-bar :cateList="cateList" @sidebarClick="sidebarClick"></side-bar>
        <scroll class="cate-content" ref="scroll">
          <cate-content :subcategory="subcategory"></cate-content>
          <tab-control :titles="['综合','新品','销量']" @tabClick="tabClick"/>
          <goods-list :goods="showCategoryDetail"></goods-list>
        </scroll>
      </div>      
    </div>
</template>

<script>
import {getCategoryData,getSubCategory,getCategoryDetail} from 'network/category'
import SideBar from 'views/category/child-components/SideBar'
import NavBar from 'components/common/navbar/NavBar'
import CateContent from './child-components/CateContent'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {itemImgListenerMixin} from 'common/mixin'
import {POP,NEW,SELL} from 'common/const'

export default {
  components: { 
    SideBar,
    NavBar,
    CateContent,
    Scroll,
    TabControl,
    GoodsList
  },
  mixins:[itemImgListenerMixin],
  data() {
    return {
      //bscroll:null,
      cateList:[],//侧边栏的数据
      subcategory:[],//子类的图片
      categoryData:{},//三类
      currentIndex:-1,
      currentType:POP
    }
  },
  mounted() {
    // this.bscroll =new bScroll(document.querySelector('.wrapper'),{
    //   probeType:3,//有时候我们需要知道滚动的位置。当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。如果没有设置该值，其默认值为 0，即不派发 scroll 事件。
    //   pullUpLoad:true,
    // })
    // this.bscroll.on('scroll',(position) =>{
    //   console.log(position);
    // })

    // this.bscroll.on('pullingUp',() =>{
    //   console.log('上拉加载更多');
    //   //发送网络请求，请求更多页的数据

    //   //等数据请求完成，并将数据展示出来后
    //   setTimeout(() =>{
    //     this.bscroll.finishPullUp()
    //   },2000)
    // })
  },
  computed:{
    showCategoryDetail(){
      if(this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  created() {
    this._getCategoryData();
    
  },
  deactivated() {
    //取消全局事件的监听
    //（因为在detail中调用了goodsListitem中点击商品后，会发送自定义事件让home的scroll重新加载）
    this.$bus.$off('itemImgLoad',this.itemImgListener)
  },
  methods:{
    sidebarClick(index){
      this._getSubCategory(index)
    },
    tabClick(index){
      switch (index){
        case 0:
          this.currentType=POP
          break
        case 1:
          this.currentType=NEW
          break
        case 2:
          this.currentType=SELL
          break
      }
    },
    // 网络请求相关
    
    _getCategoryData(){
      getCategoryData().then(res => {
        //console.log(res);
        //获取分类的侧边栏数据
        this.cateList = res.data.category.list;
        //默认展示的类别
        this._getSubCategory(0)
        //初始化每个类别的子数据
        for(let i = 0;i< this.cateList.length;i++){
          this.categoryData[i] = {
            categoryDetail:{
              'pop':[],
              'new':[],
              'sell':[]
            }
          }
        }

    })
    },
    //获取maitKey后，以便获取图片
    _getSubCategory(index){
      this.currentIndex = index
      let maitKey = this.cateList[this.currentIndex].maitKey
      getSubCategory(maitKey).then(res => {
        //console.log(res);
        this.subcategory = res.data.list
       // console.log(this.subcategory);
        this._getCategoryDetail(POP)
        this._getCategoryDetail(SELL)
        this._getCategoryDetail(NEW)
      })
    },
    //获取miniWallke和type后，以便获取综合，新品，销量的数据
    _getCategoryDetail(type){
      const miniWallkey = this.cateList[this.currentIndex].miniWallkey
      getCategoryDetail(miniWallkey,type).then(res =>{
        //console.log(res);
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    }
    
  },
}
</script>

<style scoped>
 .content{
  display: flex;
  height:calc(100vh - 44px - 49px);
 }
 
.cate-content{
  flex: 1;
  overflow: hidden;
}
.nav-bar{
  background: var(--color-high-text);
  color: #fff;
  font-size: 16px;
}
</style>