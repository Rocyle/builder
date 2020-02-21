<template>
  <div class="about-us">
    <van-nav-bar title="关于我们" left-text="返回" @click-left="onClickLeft" class="header" />
    <div class="about-message">
      <div class="msg-title">筑工宝</div>
      <div
        class="msg-intr"
      >鱼泡网是由广大建筑工友与互联网专业人士共同组建而成，致力服务于全国5000万建筑工友。公司是一个由90多位精英组成的优秀团队，利用互联网大数据来改变和优化建筑行业，使建筑行业信息公开化、流程化、规范化，更好的为全国5000万建筑工友提供优质服务，充分解决了建筑工友们招工难、找活难等问题。</div>
      <div class="project-type">
        <p class="title">筑工宝招工</p>
        <p class="details">解决老板招工难，工人找活途径单一。</p>
        <p class="title">筑工宝招工</p>
        <p class="details">解决老板招工难，工人找活途径单一。</p>
        <p class="title">筑工宝招工</p>
        <p class="details">解决老板招工难，工人找活途径单一。</p>
        <!-- <div class="kinds-list"></div> -->
      </div>
      <!-- <div class="msg-title"></div> -->

      <div class="contact">
        <p>筑工宝值得每一位建筑人的期待，定不负你所望！</p>
        <p>筑工宝客服热线：400-838-1888</p>
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

<style lang="less"  scoped>
@deep: ~">>>";
.about-us {
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
  .about-message {
    margin-top: 20px;
    padding: 0 30px;
    position: relative;
    overflow: hidden;
    .msg-title {
      background: rgb(6, 66, 233);
      color: #fff;
      font-size: 34px;
      text-align: center;
      width: 200px;
      line-height: 70px;
      border-radius: 10px;
      position: absolute;
      top: 10px;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: 9999;
    }
    .msg-intr {
      background: #fff;
      padding: 40px 30px 10px;
      color: #333;
      line-height: 40px;
      font-size: 28px;
      margin-top: 50px;
      border-radius: 8px;
      z-index: -1;
    }
    .project-type {
      margin-top: 10px;
      background: #fff;
      //   text-indent: 100px;
      padding: 10px 30px;
      .title {
        color: rgb(6, 66, 233);
        font-size: 34px;
        line-height: 50px;
      }
      .details {
        font-size: 30px;
        line-height: 40px;
      }
    }
    .contact {
      margin-top: 10px;
      height: 180px;
      padding: 20px 40px;
      background: url("../../assets/images/bj2.png");
      background-size: 100%;
      p {
        font-size: 32px;
        margin: 20px 0;
        text-align: center;
      }
    }
  }
}
</style>