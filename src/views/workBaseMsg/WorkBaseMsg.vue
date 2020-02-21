<template>
  <div class="baseMsg-content">
    <van-nav-bar title="基础信息" left-text="返回" @click-left="onClickLeft" class="header" />
    <div class="basemsg-main">
      <div class="prompt-message">注：资料越完善，找活越容易</div>
      <div class="basemsg-form">
        <van-field v-model="text" label="姓名" placeholder="如：张三" />
        <van-field v-model="text" label="性别" placeholder="如：男" />
        <van-field v-model="text" label="年龄" type="digit" placeholder="如：45" />
        <van-field v-model="text" label="民族" placeholder="如：汉族" />
        <van-field v-model="text" label="地区" placeholder="如：四川广安" />
        <van-field v-model="text" label="所属工种" placeholder="如：汉族" />
      </div>
      <van-field v-model="text" label="手机号" placeholder="187256665582" class="tel" />

      <van-field
        v-model="message"
        rows="2"
        autosize
        label="留言"
        type="textarea"
        maxlength="500"
        placeholder="请输入留言"
        show-word-limit
        class="leave-message"
      />
      <van-button type="info">保存资料</van-button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer
  },
  data() {
    return {
      text: "",
      message: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
.baseMsg-content {
  padding-bottom: 120px;
  .header {
    background: rgb(6, 29, 240);
    width: 100%;
    @{deep} .van-nav-bar__title,
    @{deep}.van-nav-bar__text {
      font-size: 19px;
      color: #fff;
    }
    @{deep} .van-icon {
      font-size: 19px;
      font-weight: 500;
      color: #fff;
    }
  }
  .basemsg-main {
    padding: 0 30px;
    .prompt-message {
      background: #fff;
      color: rgb(240, 129, 26);
      line-height: 80px;
      font-size: 28px;
      text-align: center;
    }
    .basemsg-form {
      margin-top: 20px;
    }
    .tel,
    .leave-message {
      background: #fff;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    @{deep}.van-field__label {
      font-size: 16px;
      font-weight: bold;
    }
    button {
      //   margin-top: 20px;
      display: block;
      width: 460px;
      margin: 0 auto;
      line-height: 80px;
      text-align: center;
      color: #fff;
      font-size: 28px;
      font-weight: bold;
    }
  }
}
</style>