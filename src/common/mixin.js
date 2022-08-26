import {debounce} from 'common/utils'
import BackTop from 'components/content/backtop/BackTop'
export const itemImgListenerMixin ={
  data(){
    return {
      itemImgListener:null,
      newrefresh:null,
      isShowBackTop:false,
    }
  },
  components:{
    BackTop,
  },
  mounted() {
    //防抖函数
    this.newrefresh = debounce(this.$refs.scroll.refresh)
    //对监听的时间进行保存 //在created中写，this.$refs.scroll可能是空的
    this.itemImgListener = () =>{
      this.newrefresh()   
    }
    //监听item中的图片加载完成
    this.$bus.$on('itemImageLoad',this.itemImgListener)
    //console.log('我是混入内容');
  },
  methods: {
    backClick(){
      //console.log('backClick');
      this.$refs.scroll.scrollTo(0,0)//scroll组件中封装了此方法
    },
  },
}