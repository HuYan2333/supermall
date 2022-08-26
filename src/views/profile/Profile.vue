<template>
  <div class="profile">
    <nav-bar class="nav-bar"><div slot="center">我的档案</div></nav-bar>
    <user-info/>
    <account-info/>
    <normal-list-view :list-data="orderList"/>
    <normal-list-view :list-data="serviceList"/>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar'
import UserInfo from './child-components/UserInfo.vue'
import AccountInfo from './child-components/AccountInfo.vue'
import NormalListView from './child-components/NormalListView.vue'

export default {
  name: "Profile",
  data() {
    return {
      orderList:[
        {icon:'message.svg',info:'我的消息'},
        {icon: 'pointer.svg', info: '积分商城'},
			  {icon: 'vip.svg', info: '会员卡'},
      ],
      serviceList:[
        {icon: 'cart.svg', info: '我的购物车'},
			  {icon: 'shopping.svg', info: '下载购物APP'},
      ],
    }
  },
  components:{
    Scroll,
    NavBar,
    UserInfo,
    AccountInfo,
    NormalListView,
  },
}
</script>

<style scoped>
.profile{
  background: rgb(240, 237, 237);
}
.nav-bar{
  background: var(--color-high-text);
  color: #fff;
  font-size: 16px;
}
</style>