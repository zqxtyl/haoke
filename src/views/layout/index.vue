<template>
  <div>
    <router-view></router-view>
    <van-tabbar  route class="layout-tabbar">
      <van-tabbar-item to="/home">
        <i slot="icon" class="toutiao toutiao-shouye"></i>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/house">
        <i slot="icon" class="toutiao toutiao-wenda"></i>
        <span class="text">找房</span>
      </van-tabbar-item>
      <van-tabbar-item to="/xinxi">
        <i slot="icon" class="toutiao toutiao-shipin"></i>
        <span class="text">咨询</span>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <i slot="icon" class="toutiao toutiao-wode"></i>
        <span class="text">{{$store.state.user?'我的':'未登录'}}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>