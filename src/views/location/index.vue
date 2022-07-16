<template>
  <div>
    <van-nav-bar
      title="城市列表"
      left-arrow
      @click-left="onClickLeft"
      class="navbar"
    />
    <van-index-bar>
      <van-index-anchor index="1">当前城市</van-index-anchor>
      <van-cell title="北京" />
      <div>
        <van-index-anchor index="2">热门城市</van-index-anchor>
      </div>

      <div v-for="(item,index) in listName" :key="index">
        <van-index-anchor :index="item.short" />
        <van-cell
          :title="item.label" />
      </div>
    </van-index-bar>

  </div>
</template>

<script>
import { locaTion, locaHot } from '@/api/shouye';
export default {
  name: 'location',
  data() {
    return {
      listName: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    async loading() {
      const { data } = await locaTion(1);
      console.log(data.body);
      this.listName = data.body;
    },
  },
  created() {
    this.loading();
  },
};
</script>

<style lang="less" coped>
.navbar {
  background-color: #21b97a;
  .van-nav-bar__title {
    color: #fff;
  }
  .van-icon-arrow-left {
    color: #fff;
  }
}
</style>
