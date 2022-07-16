<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      class="navbar"
      title="账号登录"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 表单 -->
    <van-form @submit="onSubmit" class="biaodan">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      >
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>

    <!-- 注册 -->
    <div class="zhuce">
      <a>还没有账号，去注册~</a>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    async onSubmit() {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true, // 禁用背景点击
        duration: 0, // 持续时间，默认 2000，0 表示持续展示不关闭
      });
      try {
        const { data } = await login(this.username, this.password);
        this.$store.commit('setUser', data.body);
        this.$toast.success('登录成功');
        this.$router.push('/my');
      } catch (error) {
        this.$toast.fail('登录失败，请稍后重试')
      }
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.navbar {
  background-color: #21b97a;
  /deep/ .van-nav-bar__title {
    color: #fff;
  }
  /deep/ .van-icon {
    color: #fff;
    font-size: 20px;
  }
  /deep/ .van-nav-bar__content {
    margin-bottom: 15px;
  }
}

.biaodan {
  .van-button {
    background-color: #21b97a;
  }
}
/deep/ .zhuce {
  text-align: center;
  font-size: 15px;
}
</style>
