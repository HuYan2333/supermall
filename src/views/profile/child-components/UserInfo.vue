<template>
  <div>
    <div class="user-info">
      <div class="pic">
        <img src="~assets/img/profile/avatar.svg" alt="">
      </div>
      <div class="center-info">
        <div class="login">登录/注册</div>
        <div class="phone">
          <img src="~assets/img/profile/phone.svg" alt="">
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="set">
        <img src="~assets/img/common/arrow-left.svg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  data () {
    return {

    }
  },
  methods: {
  },
}
</script>
<style scoped>
.user-info{
  height: 85px;
  display: flex;
  padding: 6px 15px;
  background: var(--color-high-text);
}
.pic{
  height: 70px;
  width: 70px;  
}
img{
  width: 100%;
}
.center-info{
  flex: 1;
  padding:15px;
  color: #fff;
  font-size: 12px;
}
.phone img{
  width: 20px;
  height: 30px;
  vertical-align: middle;
  margin-left: -5px;
}

.set{
  width: 20px;
  display: flex;
  align-items: center;  
}
</style>
