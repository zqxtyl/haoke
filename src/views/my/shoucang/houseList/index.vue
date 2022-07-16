<template>
  <div>
    <van-nav-bar
      title="房屋管理"
      left-arrow
      @click-left="onClickLeft"
      class="navbar"
    />
    <List v-for="(item,index) in houseList" :key="index" :item='item'/>
  </div>
</template>

<script>
import {getHouse} from '@/api/user'
import List from '@/components/list'
export default {
  name: 'HouseIndex',
  data(){
    return{
      houseList:[]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
   async loadings(){
      const {data}=await getHouse()
      this.houseList=data.body
      
    }
  },
  created(){
    this.loadings()
  },
  components:{
    List
  }
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
