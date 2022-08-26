<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar"
                    @titleClick="titleClick"
                    ref='nav'></detail-nav-bar>
    <scroll class="ss-content" ref="scroll" :probe-type="3" @scroll="contentScroll">
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>  
        <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
        <detail-param-info ref="param" :paramInfo="paramInfo" />
        <detail-comment ref="comment" :shopComment="shopComment" />
        <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <detail-bottom @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <!-- <toast :message='message' :isShow="showToast"></toast> -->
  </div>
</template>
<script>
import DetailNavBar from "views/detail/child-components/DetailNavBar"
import DetailSwiper from "views/detail/child-components/DetailSwiper"
import DetailBaseInfo from "views/detail/child-components/DetailBaseInfo"
import DetailShopInfo from './child-components/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetailGoodsInfo from './child-components/DetailGoodsInfo'
import DetailParamInfo from './child-components/DetailParamInfo'
import DetailComment from './child-components/DetailComment'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottom from './child-components/DetailBottom'
import Toast from 'components/common/toast/Toast'

import {getDetail,Goods,Shop,GoodsParams,getRecommend} from "network/detail"
import {itemImgListenerMixin} from 'common/mixin'
import {mapActions} from 'vuex'



export default {
  name: 'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    GoodsList,
    DetailBottom,
  },
  data () {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      shopComment:{},
      recommends:[],
      themeTopYs:[],
      currentIndex:0,
    }
  },
  mixins:[itemImgListenerMixin],
  mounted() {
    
  },
  destroyed() {
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid
    //2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      //console.log(res)
      const data=res.result
      //1.获取顶部轮播图图片
      this.topImages=res.result.itemInfo.topImages
      //2.获取商品信息 从对象中
      this.goods =new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //3.获取店铺信息
      this.shop= new Shop(data.shopInfo)
      //4.获取商品详情
      this.detailInfo =data.detailInfo
      //5.获取商品的参数
      this.paramInfo= new GoodsParams(data.itemParams.info,data.itemParams.rule)
      //6.获取商品评论
      if(data.rate.cRate !== 0) {
        this.shopComment = data.rate.list[0]
      }
    })
    //3.根据iid请求详情推荐数据
    getRecommend(this.iid).then(res =>{
      //console.log(res);
      this.recommends = res.data.list
    })
  },
  methods: {
    ...mapActions(['addCart']),
    imageLoad(){//detailGoodsInfo设置了只调用一次
      //this.$refs.scroll.refresh();
      this.newrefresh()
       //给getThemeTopY赋值  点击navbar定位在那里
      this.themeTopYs=[]
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)//添加一个最大值 方便写滚动的条件
        //console.log(this.themeTopYs);
    },
    titleClick(index){
      //console.log(index);
      //navbar滑到相应的位置
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    contentScroll(position){
      const positionY = -position.y
      const length = this.themeTopYs.length
      // for(let i = 0;i < length;i++){
      //   if(this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))){
      //     this.currentIndex = i
      //     console.log(this.currentIndex);
      //     this.$refs.nav.currentIndex = this.currentIndex
      //   }
      // }
      for(let i = 0;i<length-1;i++){
        if(this.currentIndex !== i && (i < length - 1 && positionY >=this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
          this.currentIndex = i
          this.$refs.nav.currentIndex=this.currentIndex
        }
      }
      //判断backtop是否显示
      this.isShowBackTop = -position.y>1000
    },
    addToCart(){
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      //调用mutation中用commit  
      //this.$store.commit('addCart',product)
      //调用action中的用dispatch
      // this.$store.dispatch('addCart',product).then(res =>{
      //   console.log(res);
      // })

      this.addCart(product).then(res => {
        // this.showToast=true
        // this.message=res
        // setTimeout(()=>{
        //   this.showToast=false
        //   this.message=''
        // },1500)
        
        //console.log(this.$toast);
        this.$toast.show(res,2000)
      })
    }
  },
}
</script>
<style scoped>
.detail{
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}
.detail-nav-bar{
  position: relative;
  z-index: 9;
  /* background: #fff; */
}
.ss-content{
  height: calc(100% - 44px - 49px);
  overflow: hidden;
  /* position: absolute;
  top:44px;
  bottom: 49px; */
  
}
</style>
