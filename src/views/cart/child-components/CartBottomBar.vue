<template>
  <!-- <div class="cart-bottom">
    <check-button class="all-select"></check-button>
    <span>全选</span>
    <span>合计:{{totalPrice}}</span>
    <span class="right">结算({{selectedCount}})</span>
  </div> -->
  <div class="cart-bottom">
    <div class="select">
      <check-button class="all-select" 
                    :isChecked="isSelectAll" 
                    @click.native="allSelectClick"></check-button>
      <span>全选</span>
    </div>    
    <div class="total">合计:{{totalPrice}}</div>
    <div class="right" @click="calcClick">结算({{selectedCount}})</div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
import { mapGetters} from 'vuex'
export default {
  name: 'CartBottomBar',
  data () {
    return {

    }
  },
  components:{
    CheckButton,
  },
  computed:{
    totalPrice(){
        return '￥' + this.$store.state.cartList.filter(item =>{
          return item.checked
        }).reduce((preValue,item) =>{
          return preValue += item.price * item.count
        },0).toFixed(2)
    },
    ...mapGetters(['cartList']),//相当于少写this.$store.state
    selectedCount(){
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll(){
      if(this.cartList.length === 0) return false
      //找到没有选中的个数  取反就是false
      //return !(this.cartList.filter(item => !item.checked).length)
      
      //找到没有选中的 取反就是false
      //return !this.cartList.find(item => !item.checked)
      for(let item of this.cartList){
        if(!item.checked){
          return false
        }
      }
      return true
    }
  },
  methods: {
    allSelectClick(){  
      if(this.isSelectAll){//全部选中
        this.cartList.forEach(item => item.checked = false);
      }else{
        this.cartList.forEach(item => item.checked = true);
      }

    },
    calcClick(){
      if(!this.isSelectAll){
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  },
}
</script>
<style scoped>
.cart-bottom{
  height: 40px;
  line-height: 40px;
  display: flex;
  font-size: 14px;
  background: #eee;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);  
  
}
.all-select{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
.select{
  width: 80px;
  text-align: center;
}
.total{
  flex: 1;
}
.cart-bottom .right{
  text-align: center;
  color: #fff;
  width: 90px;
  background: rgb(240, 103, 6);
}

/* .cart-bottom{
  height: 40px;
  line-height: 40px;
  background: #eee;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  font-size: 14px;
  color: #888;
  padding-left:5px;
}
.all-select{
  display: inline-block;  
  margin-right: 2px;
}
.cart-bottom span{
  margin-right: 10px;
}
.cart-bottom .all-select {
  vertical-align: middle;  
}
.cart-bottom .right{
  text-align: center;
  color: #fff;
  width: 90px;
  margin-right: 0;
  background: rgb(240, 103, 6);
} */
</style>
