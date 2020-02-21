<template>
  <div class="zhaogong-msg">
    <van-nav-bar title="信息详情" left-text="返回" @click-left="onClickLeft" class="header" />
    <div class="notice-weixin">
      <p>
        <span>加群：</span>加工友微信号:
        <a>zhangzhou2461</a>
        <a>复制</a> 拉你进工人微信群。客服电话:
        <a>400-838-1888</a>
        <a>呼叫</a>
      </p>
    </div>
    <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">通知内容通知内容通知内容通知内容通知内容</van-notice-bar>
    <div class="article-content">
      <div class="project-title">
        <h2>天津 邮政快递招工</h2>
        <p>发布时间：2020-01-27 16:20</p>
      </div>
      <van-steps direction="vertical" :active="0">
        <van-step>
          <h3>联系人：先生</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <h3>联系电话：1233454116</h3>
          <p>2016-07-11 10:00</p>
        </van-step>
      </van-steps>
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
      <div class="project-desc">
        <p>项目地址：四川广安</p>
        <p>项目工种：【小工/力工/普工/兼职】</p>
        <p>项目描述</p>
        <p>
          [福][福][福][福]
          大港自行车厂！接收大龄工！长白班
          主要工作：自行车流水线组装，贴花，包装，推车子！
          工厂免费提供食宿（早中晚三餐）免费提供住宿
          男工16—55岁，女工16—50岁，免费吃住三餐，住宿厂内，早八点到晚八点工资130元，加班13.5元，每天综合工资140－160－每月25号发放工资！
          年前在职人员年后初八之前正常回来上班工作到3月10号报销200元车费钱！
          年后初六初八入职人员工作3月10报销100元车费！
          报名电话小张。
        </p>
      </div>
      <div class="warm-prompt">
        <h6>
          <span>温馨提示 :</span>此信息由鱼泡网的用户提供，但联系时仍需要注意识别信息真假，
          <a
            href="javascript:void(0);"
            data-href="/anti-fraud/"
            class="gotofpzn"
          >防骗指南</a>。
          <br />关注“鱼泡网”微信公众号接收新工作提醒
          <a
            href="javascript:void(0);"
            data-href="/notice/9.html"
            class="gotofpzn"
          >如何关注</a>
        </h6>
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
  created(){
    console.log("数据",this.$route.query.item)
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
.zhaogong-msg {
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
  .notice-weixin {
    background: #fff;
    padding: 10px 30px;
    font-size: 24px;
    line-height: 40px;
    span {
      color: #f00;
    }
    a {
      color: cadetblue;
    }
  }
  .article-content {
    margin-top: 20px;
    padding: 10px 0;
    .project-title {
      padding: 20px 30px;
      background: #fff;
      h2 {
        font-size: 32px;
        line-height: 50px;
      }
      p {
        font-size: 24px;
        line-height: 40px;
      }
    }
    .van-steps {
      margin-top: 10px;
      padding: 10px 30px;
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
  .project-desc {
    margin-top: 10px;
    padding: 10px 30px;
    background: #fff;
    font-size: 24px;
    line-height: 36px;
  }
  .warm-prompt {
    margin-top: 10px;
    padding: 10px 30px;
    font-size: 26px;
    line-height: 40px;
    background: #fff;
    span {
      color: #f00;
    }
  }
}
</style>