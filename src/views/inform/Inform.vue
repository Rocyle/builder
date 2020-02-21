<template>
  <div class="inform-content">
    <van-nav-bar title="举报骗子企业" left-text="返回" @click-left="onClickLeft" class="header" />
    <div class="report-msg">
      <div class="report-word">
        <p>
          鱼泡网为给工友们提供一个更加安全可靠、方便快捷的招工找活平台，同时也希望为净化建筑行业出一份力，故开通举报热线：
          <a
            href="tel:400-838-1888"
          >400-838-1888</a>
        </p>
        <p>欢迎工友们举报骗人的老板或工人，我们查实后将全网公布骗子信息，同时加入骗子数据库，终身不得使用鱼泡网。若触犯法律的，鱼泡网将配合公安机关调查取证！</p>
        <p>注：为了能高效的处理投诉，请工友们事先准备好聊天记录截图、录音、对方电话号 、身份证号等证据。</p>
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
.inform-content {
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
  .report-msg {
    padding: 0 30px;
    .report-word {
      margin-top: 20px;
      padding: 20px 30px;
      background: rgba(255, 255, 255,0.7);
      border-radius: 10px;
      box-shadow: 1px 1px 1px #f3f3f3;
      p {
        margin: 10px 0 20px;
        font-size: 30px;
        line-height: 50px;
      }
    }
  }
}
</style>