<template>
  <div>
    <van-nav-bar
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};
</script>

<style></style>
