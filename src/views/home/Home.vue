<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
                @tabClick="tabClick"
                ref="tabControl1"
                class="tab-control"
                v-show="isTabFixed"
                />
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swipperImageLoad="swipperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" 
                @tabClick="tabClick"
                ref="tabControl2"
                />
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    

  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
import TabControl from "components/content/tabcontrol/TabControl"
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import HomeSwiper from "./child-components/HomeSwiper"
import RecommendView from "./child-components/RecommendView"
import FeatureView from "./child-components/FeatureView"//那个图片


import {getHomeMultidata,getHomeGoods} from "network/home"
import {itemImgListenerMixin} from 'common/mixin'


export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  data () {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page: 0, list:[]},
        'new':{page: 0, list:[]},
        'sell':{page: 0, list:[]},
      },
      currentType:'pop',
      tabOffsetTob:0,
      isTabFixed:false,
      saveY:0
    }
  },
  mixins:[itemImgListenerMixin],
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created(){
    //1.请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
    
  },
  destroyed() {
    console.log('home destory')
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    //保存Y值
    this.saveY = this.$refs.scroll.getScrollY()
    this.$refs.scroll.refresh()

    //取消全局事件的监听
    //（因为在detail中调用了goodsListitem中点击商品后，会发送自定义事件让home的scroll重新加载）
    this.$bus.$off('itemImgLoad',this.itemImgListener)
  },
  mounted() {
    //用混入封装重复的代码
    // //防抖函数
    // let newrefresh = debounce(this.$refs.scroll.refresh)
    // //对监听的时间进行保存 //在created中写，this.$refs.scroll可能是空的
    // this.itemImgListener = () =>{
    //   newrefresh()   
    // }
    
    // //监听item中的图片加载完成
    // this.$bus.$on('itemImageLoad',this.itemImgListener)
  },
  methods:{
    // 事件监听相关
    
    tabClick(index){
      switch (index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      }
      this.$refs.tabControl1.currentIndex=index
      this.$refs.tabControl2.currentIndex=index
    },
    contentScroll(position){
      //console.log(position);
      //1.判断backtop是否显示
      this.isShowBackTop = -position.y>1000

      //2.决定tabControl是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTob
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    swipperImageLoad(){//图片加载后（这个图片加载的慢，占主要因素），计算出顶部到tabControl的位置
      this.tabOffsetTob=this.$refs.tabControl2.$el.offsetTop;
    },

    // 网络请求相关
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
      //console.log(res);
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1; 
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);//将数组拆分成单个的东西，一个个加进新数组中
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();//加载完，在下一次加载
      })
    }

  },
}
</script>
<style scoped>
  #home{
    /* padding-top: 44px; */
    position: relative;
    height: 100vh;
  }
.home-nav{
  background-color:var(--color-tint);
  color:#fff;
}
/* .tab-control{ 吸顶效果失效了
  position:sticky;
  top:44px;
  z-index: 9;
} */
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;

  overflow: hidden;
}
/* .content{
  height: calc(100%-93px);
  overflow: hidden;
  margin-top: 44px;
} */
.tab-control{
  position: relative;
  z-index: 9;
}

</style>