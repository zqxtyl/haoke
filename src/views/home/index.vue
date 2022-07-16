<template>
  <div class="app">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><img src="~@/assets/1.png" alt="" style="width: 100%"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="~@/assets/2.png" alt="" style="width: 100%"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="~@/assets/3.png" alt="" style="width: 100%"
      /></van-swipe-item>
    </van-swipe>

    <!-- 搜素 -->
    <div class="sou2">
      <div @click="beijing">
        <span class="beij">北京</span>
      </div>
      <van-search v-model="value" placeholder="请输入小区或地址" class="sousuo">
      </van-search>
    </div>

    <!-- 模块 -->
    <van-grid :column-num="4" clickable>
      <van-grid-item icon="photo-o" text="文字">
        <i slot="icon"><img src="~@/assets/6.png" alt="" class="pictor" /></i>
        <span slot="text" class="text">我的收藏</span>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <i slot="icon"><img src="~@/assets/7.png" alt="" class="pictor" /></i>
        <span slot="text" class="text">我的出租</span>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <i slot="icon"><img src="~@/assets/8.png" alt="" class="pictor" /></i>
        <span slot="text" class="text">看房记录</span>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字">
        <i slot="icon"><img src="~@/assets/9.png" alt="" class="pictor" /></i>
        <span slot="text" class="text">看房记录</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch() {},
    beijing(){
      this.$router.push('/location')
    }
  },
};
</script>

<style scoped lang="less">
.app {
  /deep/.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    height: 200px;
  }
  .pictor {
    width: 50px;
  }
  .sou2 {
    position: relative;
    .sousuo {
      position: fixed;
      top: 15px;
      left: 15px;
      background-color: #fff0 !important;
      width: 350px;
      height: 15px;
    }
    .van-search__content {
      height: 30px;
      line-height: 30px;
    }
    .beij {
      font-size: 10px;
      position: fixed;
      top: 15px;
      left: 30px;
      width: 350px;
      height: 15px;
      z-index: 1;
    }
    /deep/.van-field__control{
      margin-left: 15px;
    }
    /deep/.van-icon-search{
      left: 15px;
    }
  }
}
</style>
