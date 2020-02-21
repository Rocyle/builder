<template>
  <div class="zhaohuo-msg">
    <van-nav-bar title="找活名片" left-text="返回" @click-left="onClickLeft" class="header" />
    <div class="prompt">注:老板对找活者满意，可以直接与他联系，以及点赞或转发</div>
    <div class="personal-msg">
      <div class="user">
        <img src="@/assets/images/worker.jpg" alt />
        <div>
          <h2>张三</h2>
          <p>男 43岁 汉族</p>
        </div>
      </div>
      <ul>
        <li>手机：1464982674</li>
        <li>我的家乡：河南海口</li>
        <li>工种：建筑工、木材</li>
        <li>工龄：14年</li>
        <li>熟练度：高级工</li>
        <li>人员构成：班组</li>
        <li>队伍人数：20</li>
        <li>所在区域：四川广安</li>
        <li>
          标签：
          <span>吃苦耐劳</span>
        </li>
      </ul>
      <div class="warning-mark">
        <span>防骗警示：</span>工作前，确认好
        <span>对方身份</span>、
        <span>签好合同</span>，招工、找活中
        <span>不要交任何费用</span>。工作中
        <span>拍照</span>、
        <span>录视频</span>留有证据！若双方发生
        <span>经济纠纷</span>，请
        <span>立即报警</span>或前往
        <span>劳动局投诉</span>，鱼泡网可
        <span>配合调查</span>，但
        <span>概不负责</span>。如遇
        <span>诈骗信息</span>，请
        <i style="display:inline-block;margin-left:0;">立即举报!</i>
      </div>
      <div class="person-recommend">
        <h2>自我介绍</h2>
        <p>天津市，郑州市突击活，抢工期，自带技术员别墅洋房高层建筑木工活承包，钢筋工，小工，打混凝土，白班夜班人员充足，随叫随到</p>
      </div>
      <div class="person-recommend">
        <h2>项目经验</h2>
        <p>天津市，郑州市突击活，抢工期，自带技术员别墅洋房高层建筑木工活承包，钢筋工，小工，打混凝土，白班夜班人员充足，随叫随到</p>
      </div>
      <div class="person-recommend">
        <h2>职业技能</h2>
        <p>天津市，郑州市突击活，抢工期，自带技术员别墅洋房高层建筑木工活承包，钢筋工，小工，打混凝土，白班夜班人员充足，随叫随到</p>
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
.zhaohuo-msg {
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
  .prompt {
    background: #fff;
    color: rgb(250, 92, 0);
    font-size: 26px;
    line-height: 40px;
    text-align: center;
    padding: 20px 30px;
  }
  .personal-msg {
    margin-top: 10px;
    background: #fff;
    padding: 20px;
    .user {
      display: flex;
      justify-content: space-between;
      img {
        width: 90px;
        height: 90px;
        margin: 10px;
        border-radius: 50px;
      }
      div {
        flex: 1;
        h2 {
          font-size: 30px;
          line-height: 60px;
        }
        p {
          font-size: 24px;
          line-height: 40px;
          color: #808080;
        }
      }
    }
    ul {
      & > li {
        font-size: 30px;
        font-weight: bold;
        line-height: 50px;
        padding: 0px 30px;
      }
    }
    .warning-mark {
      margin-top: 10px;
      padding: 10px 30px;
      background: #fff;
      font-size: 24px;
      line-height: 40px;
      span {
        color: #f00;
      }
    }
  }
  .person-recommend{
    padding:  0 30px;
    font-size: 28px;
    line-height: 40px;
  }
}
</style>