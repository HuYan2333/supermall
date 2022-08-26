<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品信息 -->
    <cart-list></cart-list>
    <!-- 结算 -->
    <cart-bottom-bar class="cart-pay"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './child-components/CartList'
import {mapGetters} from 'vuex'
import CartBottomBar from './child-components/CartBottomBar.vue'

export default {
  name: "Cart",
  data() {
    return {}
  },
  components:{
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed:{
    //...mapGetters(['cartLength','cartList']),
    ...mapGetters({
      length:'cartLength',
    })
  },
  methods:{},
}
</script>

<style scoped>
.nav-bar{
  background: var(--color-tint);
  color: #fff;
}
.cart-pay{
  position: relative;
  left: 0;
  right: 0;
  bottom: 0px;
}
</style>