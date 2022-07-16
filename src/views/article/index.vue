<template>
  <div>
    <div>
      <van-nav-bar
        :title="List.community"
        class="navbar"
        left-arrow
        @click-left="onClickLeft"
      />
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <div class="biaoti">
        <div >
          <p>{{ List.price }}</p>
          <p>租金</p>
        </div>
        <div>
          <p>{{ List.roomType }}</p>
          <p>房型</p>
        </div>
        <div>
          <p>{{ List.size }}</p>
          <p>面积</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllHouse } from '@/api/user';
export default {
  name: 'Allhouse',
  methods: {
    async loading() {
      const { data } = await getAllHouse(this.$store.state.UId);
      this.List = data.body;
      console.log(data);
    },
    onClickLeft() {
      this.$router.back();
    },
  },
  created() {
    this.loading();
  },
  data() {
    return {
      List: [],
      baseUrl: 'http://liufusong.top:8080',
    };
  },
};
</script>

<style scoped lang="less">
.navbar {
  background-color: #21b97a;
  /deep/ .van-nav-bar__title {
    color: #fff;
  }
  /deep/ .van-icon {
    color: #fff;
    font-size: 20px;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.biaoti{
  display: flex;
  justify-content: space-evenly;
}
</style>
