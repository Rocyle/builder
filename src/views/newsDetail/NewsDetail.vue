<template>
  <div class="news-detail">
    <van-nav-bar title="热门资讯" left-text="返回" @click-left="onClickLeft" class="header" />
    <div class="article-content">
      <h2>鱼泡网联合创始人王云雷出任成都市在沪务工经商人员服务管理综合党委副书记</h2>
      <div class="copymsg">
        <span>作者：鱼泡网</span>
        <span>2019-2-13</span>
      </div>
      <p>
          2019年12月7日，“成都市在沪务工人员回乡创业就业政策项目宣传推介会”在上海虹桥元一希尔顿酒店隆重举行。四川省政府驻上海办事处主任谢贤荣，成都市委副秘书长、督查室主任何军出席会议并致辞。成都市管辖区内相关区（市）县政府领导参加了此次会议。鱼泡网联合创始人王云雷，集团党委书记、战略投资总裁方毅作为在沪务工经商人员代表，受邀出席大会。
      </p>
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
    },
  }
};
</script>

<style lang="less"  scoped>
@deep: ~">>>";
.news-detail {
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
  .article-content {
    background: #fff;
    padding: 30px;
    h2 {
      font-size: 36px;
      line-height: 50px;
    }
    .copymsg {
      margin: 20px 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      span {
        display: block;
        font-size: 28px;
        line-height: 40px;
        color: #888;
      }
    }
    p{
        font-size: 30px;
        text-indent: 2em;
        line-height: 44px;
    }
  }
}
</style>