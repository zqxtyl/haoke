<template>
  <div>
    <van-cell :to="`/article/${Id}`">
      <van-nav-bar
        title="收藏列表"
        left-arrow
        @click-left="onClickLeft"
        class="navbar"
      />
      <List v-for="(item, index) in Slist" :key="index" :item="item" :id='item.houseCode' @getAll='change'/>
    </van-cell>
  </div>
</template>

<script>
import { getShou } from '@/api/user';
import List from '@/components/list';
export default {
  name: 'ShouIndex',
  data() {
    return {
      Slist: [],
      Id:{}
    };
  },
  components: {
    List,
  },
  methods: {
    async loading() {
      const { data } = await getShou();
      this.Slist = data.body; 
      this.Id=data.body[0].houseCode
      this.$store.commit('getId')
    },

    onClickLeft() {
      this.$router.back();
    },
    change(id){
      console.log(id);
      this.Id=id
      this.$store.commit('getId',id)
    }

  },
  created() {
    this.loading();
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
</style>
