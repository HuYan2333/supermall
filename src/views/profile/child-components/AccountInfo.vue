<template>
  <div class="account">
    <div class="account-item">
      <div class="info">
        <span>0.00</span>元
      </div>
      <div class="me">我的余额</div>
    </div>
    <div class="account-item">
      <div class="info">
        <span>0</span>个
      </div>
      <div class="me">我的优惠</div>
    </div>
    <div class="account-item">
      <div class="info">
        <span>0</span>分
      </div>
      <div class="me">我的积分</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AccountInfo',
  data () {
    return {

    }
  },
  methods: {
  },
}
</script>
<style scoped>
.account{
  height: 70px;
  display: flex;  
}
.account-item{
  width: 100%;
  text-align: center;
  margin-right: 1px;
  font-size: 13px;
  padding: 15px;
  background: #fff;
}
.account-item:last-of-type {
  margin-right: 0;
}
.info span{
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}
</style>
