<template>
  <div class="build-home">
    <div class="header">
      <van-icon name="location-o" />
      <span>四川</span>
      <van-icon name="arrow-down" />
    </div>
    <!-- banner轮播图的展示 -->
    <div class="bannerContainer">
      <van-swipe :autoplay="3000" class="banner">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" class="bannerImg" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 菜单部分 -->
    <div class="grid">
      <div>
        <img src="@/assets/images/worker.jpg" alt />
        <p>建筑招工</p>
      </div>
      <div>
        <img src="@/assets/images/worker.jpg" alt />
        <p>装修招工</p>
      </div>
      <div>
        <img src="@/assets/images/worker.jpg" alt />
        <p>焊工招工</p>
      </div>
      <div>
        <img src="@/assets/images/worker.jpg" alt />
        <p>工厂招工</p>
      </div>
    </div>
    <!-- 咨询部分 -->
    <div class="advert">
      <div class="share">邀请好友</div>
      <div class="information" @click="toNews">热门资讯</div>
    </div>
    <van-notice-bar
      scrollable
      color="#1989fa"
      background="#ecf9ff"
      left-icon="info-o"
    >通知内容四川成都需要补烂做防水师傅两名四川成都需要补烂做防水师傅两名四川成都需要补烂做防水师傅两名四川成都需要补烂做防水师傅两名</van-notice-bar>
    <!-- 招工信息 -->
    <div class="msg-content">
      <div class="recruit">
        <div class="msg-title">
          <p>
            最新招工信息
            <router-link to="/recruitMsg">更多</router-link>
          </p>
        </div>
        <div v-for="(item,index) in recruitList" :key="index" class="recruit-list">
          <router-link :to="{path:'/zhaogongMsg',query:{item:item}}">
            <p class="list-top">{{item.title}}</p>
            <div class="list-middle">
              <div class="middle-left">
                <img :src="item.imgSrc||imgSrc" />
              </div>
              <div class="list-right">
                <div class="userinfo">{{item.user}}</div>
                <div class="list-desc">{{item.projectDesc}}</div>
              </div>
            </div>
            <div class="list-bottom">
              <span class="rate-time">{{item.present}}</span>
            </div>
          </router-link>
        </div>
      </div>
      <div class="recruit">
        <div class="msg-title">
          <p>最新找活信息</p>
        </div>
        <div v-for="(item,index) in lookWorkList" :key="index" class="recruit-list">
          <router-link to="/zhaohuoMsg">
            <div class="list-middle">
              <div class="middle-left">
                <img :src="item.imgSrc||imgSrc" />
              </div>
              <div class="list-right">
                <!-- <div class="userinfo">{{item.user}}{{item.sex}}{{item.age}}</div> -->
                <div class="list-desc">{{item.desc}}</div>
              </div>
            </div>
            <div class="list-bottom">
              <span class="rate-time">{{getPublicTime(item.publicTime)}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 版权信息 -->
    <div class="copy-right">
      <p>
        <router-link to="/aboutUs">关于我们</router-link>&nbsp;|&nbsp;使用教程&nbsp;|&nbsp;
        <router-link to="/inform">举报骗子</router-link>&nbsp;|&nbsp;联系我们
      </p>
      <p>2019-2020&nbsp;&nbsp;&nbsp;版权归20166700刘春艳所有</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import { zhaogonglist } from "@/apis/zhaogong";
import { lookWorklist } from "@/apis/zhaohuo";
import moment from "moment";
export default {
  components: {
    Footer
  },
  data() {
    return {
      images: [
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2531672381,2302946772&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580990440181&di=b5066e3b8e68a68e70eae5922930312e&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014b5857b52b690000012e7ea3e193.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580990490160&d i=f06a52df844e1f10003d2493e15d65e6&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018b4557df50e30000018c1bc3d1dc.jpg"
      ],
      imgSrc: "https://img.yzcdn.cn/vant/apple-2.jpg",
      recruitList: [],
      lookWorkList: [ ]
    };
  },
  created() {
    this.getData();
    this.getWorkList();
  },

  methods: {
    toNews() {
      this.$router.push("/hotNews");
    },
    getData() {
      zhaogonglist().then(data => {
        this.recruitList = data;
        console.log("data", data);
      });
    },
    getWorkList() {
      lookWorklist().then(data => {
        this.lookWorkList = data;
        console.log("数据", data);
      });
    },
    getPublicTime(time) {
      var publicTime = "";
      publicTime = moment(new Date(time)).format("YYYY-MM-DD HH:mm");
      return publicTime;
    }
  }
};
</script>

<style lang="less" scoped>
.build-home {
  padding-bottom: 120px;
  background: #f2f2f2;
  .header {
    padding: 15px 40px;
    font-size: 40px;
    background: #ccc;
  }
  .bannerContainer {
    width: 100%;
    .banner {
      .bannerImg {
        width: 100%;
        height: 300px;
      }
    }
  }
  // 菜单部分
  .grid {
    display: flex;
    background: #fff;
    div {
      flex: 1;
      img {
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 10px auto;
      }
      p {
        text-align: center;
        font-size: 26px;
        line-height: 50px;
      }
    }
  }
  // 广告部分
  .advert {
    margin-top: 6px;
    display: flex;
    & > div {
      background: #fff;
      margin-top: 10px;
      padding: 30px 0;
      flex: 1;
      text-align: center;
      font-size: 28px;
      margin-bottom: 10px;
    }
    .share {
      border-right: 1px solid #ccc;
    }
  }
  // 信息展示部分
  .msg-content {
    .recruit {
      .msg-title {
        background: #fff;
        padding: 20px 30px;
        margin: 6px 0;
        p {
          border-left: 5px solid rgb(2, 118, 250);
          text-indent: 20px;
          font-size: 34px;
          line-height: 40px;
        }
      }
      .recruit-list {
        background: #fff;
        margin-top: 10px;
        padding: 0 30px;
        .list-top {
          width: 300px;
          display: block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 28px;
          line-height: 80px;
        }
        .list-middle {
          border-top: 1px dotted #ccc;
          display: flex;
          border-bottom: 1px dotted #ccc;
          .middle-left {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            overflow: hidden;
            margin: 15px;
            img {
              width: 150px;
              height: 150px;
            }
          }
          .list-right {
            padding: 15px 0;
            flex: 1;
            .userinfo {
              font-size: 26px;
              line-height: 60px;
            }
            .list-desc {
              font-size: 24px;
              line-height: 40px;
              color: #7e7e7e;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
          }
        }
        .list-bottom {
          overflow: hidden;
          height: 60px;
          span {
            font-size: 24px;
            float: right;
            line-height: 60px;
          }
        }
      }
    }
  }
  // 版权信息
  .copy-right {
    padding: 20px 0;
    text-align: center;
    p {
      line-height: 40px;
      font-size: 22px;
    }
  }
}
</style>