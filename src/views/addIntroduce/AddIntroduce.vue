<template>
  <div class="add-indtrodce">
    <van-nav-bar title="人员信息" left-text="返回" @click-left="onClickLeft" class="header" />
    <div class="indtroduce-main">
      <div class="basemsg-form">
        <van-field v-model="text" label="工龄" placeholder="如：3年" />
        <van-field v-model="text" label="家乡" placeholder="如：四川广安" />
        <van-field v-model="text" label="熟练度" type="digit" placeholder="如：初级" />
        <van-field v-model="text" label="人员构成" placeholder="如：构成" />
      </div>
      <div class="skills-label">
        <h3>为自己贴个标签，让老板更懂你（可选3个）：</h3>

        <div class="skills">
          <span>任劳任怨</span>
          <span>吃苦耐劳</span>
          <span>质量保证</span>
          <span>尽职尽责</span>
        </div>
        <div class="skills">
          <span>任劳任怨</span>
          <span>吃苦耐劳</span>
          <span>质量保证</span>
          <span>尽职尽责</span>
        </div>
      </div>
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
      text: ""
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
.add-indtrodce {
  padding-bottom: 140px;
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

  .indtroduce-main {
    margin-top: 10px;
    padding: 0 30px;
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
    .skills-label {
      background: #fff;
      margin-top: 10px;
      padding: 20px 30px;
      h3 {
        line-height: 60px;
        font-size: 26px;
        font-weight: bold;
      }
      .skills {
        display: flex;
        justify-content: space-between;
        span {
          display: inline-block;
          padding: 10px 20px;
          line-height: 40px;
          margin: 10px 0;
          border: 1px solid #000;
          border-radius: 8px;
        }
      }
    }
  }
  button {
    display: block;
    width: 460px;
    margin: 20px auto 0;
    line-height: 80px;
    text-align: center;
    color: #fff;
    font-size: 28px;
    font-weight: bold;
  }
}
</style>