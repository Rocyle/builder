<template>
  <div class="hot-news">
    <van-nav-bar title="热门资讯" left-text="返回" @click-left="onClickLeft" class="header" />
    <div class="head-select">
      <div class="select-tag active">全部</div>
      <div class="select-tag">企业动态</div>
      <div class="select-tag">行业动态</div>
      <div class="select-tag">企业公告</div>
    </div>
    <div class="news-compalete">
      <div class="news-list"  @click="toDetail">
        <div class="news-img">
          <img src="@/assets/images/worker.jpg" />
        </div>
        <div class="news-desc">
          <h4>鱼泡网联合创始人王云雷出任成都市在沪务工经商人员服务管理综合党委副书记</h4>
          <p>成都市在沪务工人员回乡创业就业政策项目宣传推介会</p>
          <div class="copymsg">
            <span>作者：鱼泡网</span>
            <span>2019-2-13</span>
          </div>
        </div>
      </div>
      <div class="news-list">
        <div class="news-img">
          <img src="@/assets/images/worker.jpg" />
        </div>
        <div class="news-desc">
          <h4>鱼泡网联合创始人王云雷出任成都市在沪务工经商人员服务管理综合党委副书记</h4>
          <p>成都市在沪务工人员回乡创业就业政策项目宣传推介会</p>
          <div class="copymsg">
            <span>作者：鱼泡网</span>
            <span>2019-2-13</span>
          </div>
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
    },
    toDetail(){
      this.$router.push("/newsDetail")
    }
  }
};
</script>

<style lang="less"  scoped>
@deep: ~">>>";
.hot-news {
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
  .head-select {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    & > div {
      padding: 10px 20px;
      background: #f1f1f1;
      font-size: 26px;
      line-height: 40px;
    }
    .active {
      background: rgb(44, 100, 255);
      color: #fff;
    }
  }
  .news-compalete {
    margin-top: 10px;
    .news-list {
      display: flex;
      background: #fff;
      padding: 15px 0;
      margin-top: 10px;
      .news-img {
        width: 160px;
        height: 160px;
        margin: 0 10px;
        img {
          width: 160px;
          height: 160px;
        }
      }
      .news-desc {
        flex: 1;
        position: relative;
        h4 {
          width: 560px;
          font-size: 26px;
          line-height: 44px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        p {
          line-height: 36px;
          font-size: 24px;
          color: #808080;
        }
        .copymsg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          span {
            display: block;
            margin-right:  20px;
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>