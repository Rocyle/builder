<template>
  <div class="send-lookwork-content">
    <van-nav-bar title="找活干名片" left-text="返回" @click-left="onClickLeft" class="header" />
    <div class="prompt-message">请完善以下信息</div>
    <div class="lookwork-main">
      <div class="material-list">
        <p class="list-title">基础信息</p>
        <div class="list-msg">
          <p>您还没有完善基础信息</p>
          <van-button type="info" to="/workBaseMsg">去完善</van-button>
        </div>
      </div>
      <div class="material-list">
        <p class="list-title">人员信息</p>
        <div class="list-msg">
          <p>您还没有完善基础信息</p>
          <van-button type="info" to="/addIntroduce">添加人员信息</van-button>
        </div>
      </div>
      <div class="material-list">
        <p class="list-title">工作经验</p>
        <div class="list-msg">
          <p>您还没有完善基础信息</p>
          <van-button type="info" to="/workExperience">添加工作经验</van-button>
        </div>
      </div>
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
    return {};
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
.send-lookwork-content {
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
  .prompt-message {
    background: #fff;
    line-height: 80px;
    font-size: 28px;
    text-align: center;
  }
  .lookwork-main {
    margin-top: 10px;
    padding: 20px 0;
    .material-list {
      .list-title {
        font-size: 32px;
        text-align: center;
        line-height: 80px;
        font-weight: bold;
      }
      .list-msg {
        background: #fff;
        padding: 20px 0;
        p {
          line-height: 80px;
          text-align: center;
          font-size: 30px;
          color: #808080;
        }
        button {
          display: block;
          padding: 0 30px;
          font-size: 30px;
          font-weight: 500;
          line-height: 44px;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>