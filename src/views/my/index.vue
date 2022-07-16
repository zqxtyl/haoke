<template>
  <div class="app">
    <!-- 已经登录头部 -->
    <div class="user-info" v-if="user">
      <div class="come">
        <img class="img2" alt="" src="~@/assets/avatar.png" />
        <p class="you">{{data.body.nickname||[]}}</p>
        <van-button type="primary" class="btn" @click="onLogout"
          >退出</van-button
        >
      </div>
    </div>

    <!-- 未登录头部 -->
    <div class="header not-login" v-else>
      <div class="login-btn box" @click="$router.push('/login')">
        <img class="mobile-img" alt="" src="~@/assets/avatar.png" />
        <p class="you">游客</p>
        <van-button type="primary" class="btn2">登录</van-button>
      </div>
    </div>
    <div class="top1">
      <van-grid :column-num="3" clickable>
        <van-grid-item icon="photo-o" text="文字" to="/shoucang">
          <i slot="icon" class="toutiao toutiao-shoucang"></i>
          <span slot="text" class="text">我的收藏</span>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字" to="/houseList">
          <i slot="icon" class="toutiao toutiao-shouye"></i>
          <span slot="text" class="text">我的出租</span>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字">
          <i slot="icon" class="toutiao toutiao-lishi"></i>
          <span slot="text" class="text">看房记录</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="top">
      <van-grid :column-num="3" clickable>
        <van-grid-item icon="photo-o" text="文字">
          <i slot="icon" class="toutiao toutiao-shipin"></i>
          <span slot="text" class="text">我的收藏</span>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字">
          <i slot="icon" class="toutiao toutiao-wode"></i>
          <span slot="text" class="text">我的出租</span>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字">
          <i slot="icon" class="toutiao toutiao-zuopin"></i>
          <span slot="text" class="text">看房记录</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div><img src="~@/assets/join.png" alt="" class="join" /></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  name: 'MyIndex',
  data() {
    return {
      userInfo: {},
      data: { body: '' },
    };
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    onLogout() {
      this.$dialog
        .confirm({
          title: '确认退出吗？',
        })
        .then(() => {
          // on confirm
          // 确认退出：清除登录状态（容器中的 user + 本地存储中的 user）
          this.$store.commit('setUser');
        })
        .catch(() => {
          // on cancel
          console.log('取消执行这里');
        });
    },
   async loadUserInfo() {
      try {
        const { data } = await getUserInfo()
        this.data = data
      } catch (err) {
        this.$toast('获取用户信息失败,请重试', err)
        console.log(err)
      }
    }
  },
  created() {},
  mounted() {
    this.loadUserInfo();
  },
};
</script>

<style scoped lang="less">
.app {
  background-color: #fff;
  /deep/.header {
    height: 300px;
    background: url('~@/assets/bg.png') no-repeat;
    background-size: contain;
    position: relative;
  }
  .user-info {
    background: url(~@/assets/avatar1.png) no-repeat;
    width: 400px;
    background-size: contain;
    height: 370px;
    .come {
      background-color: #fff;
      width: 320px;
      height: 200px;
      position: fixed;
      top: 170px;
      left: 25px;
      box-shadow: 0 0 20px 6px #ddd;
      position: relative;
      .img2 {
        position: absolute;
        width: 50px;
        height: 50px;
        left: 140px;
        top: -15px;
        border: 5px solid #f5f5f5;
        border-radius: 50%;
      }
      .you {
        position: absolute;
        left: 50%;
        top: 25%;
        transform: translate(-50%,-50%);
      }
      /deep/ .van-button {
        position: absolute;
        left: 140px;
        top: 80px;
      }
    }
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      .mobile-img {
        position: absolute;
        width: 50px;
        height: 50px;
        top: -20px;
        border: 5px solid #f5f5f5;
        border-radius: 50%;
      }
      .you {
        font-size: 8px;
      }
      .btn {
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        padding: 0 15px;
      }
    }
    .box {
      position: absolute;
      top: -50px;
      background-color: #fff;
      width: 350px;
      height: 150px;
      margin-top: 100px;
      box-shadow: 0 0 20px 6px #ddd;
    }
  }
  .join {
    width: 100%;
    margin-top: 70px;
  }
  .top {
    margin-top: 25px;
  }
  /deep/.van-grid-item__content--clickable {
    font-size: 10px;
  }
}
</style>
