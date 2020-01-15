<template>
  <div class="login-content">
    <van-nav-bar title="登录/注册" left-arrow @click-left="onClickLeft" class="header" />
    <div class="logo">筑梦之家</div>
    <div class="login-form">
      <van-cell-group>
        <van-field
          v-model="value1"
          label="手机号"
          left-icon="friends-o"
          right-icon="warning-o"
          placeholder="请输入手机号码"
        />
        <van-field v-model="value2" clearable label="密码" left-icon="bag-o" placeholder="请输入密码" />
      </van-cell-group>
      <van-button type="info" class="login-btn">登录</van-button>
      <p class="forget-text">
        忘记密码，
        <a>立即找回</a>
      </p>
    </div>
    <!-- 底部选项 -->
    <Footer page="index"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: { Footer },
  data() {
    return {
      value1: "",
      value2: "123"
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
@deep: ~">>>";
.login-content {
  background: #fff;
  .header {
    width: 100%;
    @{deep} .van-nav-bar__title {
      font-size: 19px;
      color: #333333;
    }
    @{deep} .van-icon {
      font-size: 19px;
      font-weight: 500;
      color: #333333;
    }
  }
  .logo {
    height: 200px;
  }
  .login-form {
    padding: 0 30px;
    .login-btn {
      display: block;
      width: 300px;
      height: 80px;
      line-height: 40px;
      text-align: center;
      margin: 30px auto 10px;
      font-size: 40px;
    }
    .forget-text {
      text-align: center;
      font-size: 24px;
      a {
        color: rgb(59, 128, 255);
      }
    }
  }
}
</style>
