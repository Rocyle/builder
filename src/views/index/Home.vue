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
    <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <!-- 咨询部分 -->
    <div class="advert">
      <div class="share">邀请好友</div>
      <div class="information">热门资讯</div>
    </div>
    <van-notice-bar scrollable color="#1989fa" background="#ecf9ff" left-icon="info-o">通知内容四川成都需要补烂做防水师傅两名四川成都需要补烂做防水师傅两名四川成都需要补烂做防水师傅两名四川成都需要补烂做防水师傅两名</van-notice-bar>
    <!-- 招工信息 -->
    <div class="msg-content">
      <div class="recruit">
        <div class="msg-title">
          <p>最新招工信息</p>
        </div>
        <div v-for="(item,index) in recruitList" :key="index" class="recruit-list">
          <p class="list-top">{{item.title}}</p>
          <div class="list-middle">
            <div class="middle-left">
              <img :src="item.imgSrc" />
            </div>
            <div class="list-right">
              <div class="userinfo">{{item.username}}</div>
              <div class="list-desc">{{item.desc}}</div>
            </div>
          </div>
          <div class="list-bottom">
            <span class="rate-time">{{item.rateTime}}</span>
          </div>
        </div>
      </div>
      <div class="recruit">
        <div class="msg-title">
          <p>最新找活信息</p>
        </div>
        <div v-for="(item,index) in recruitList" :key="index" class="recruit-list">
          <p class="list-top">{{item.title}}</p>
          <div class="list-middle">
            <div class="middle-left">
              <img :src="item.imgSrc" />
            </div>
            <div class="list-right">
              <div class="userinfo">{{item.username}}</div>
              <div class="list-desc">{{item.desc}}</div>
            </div>
          </div>
          <div class="list-bottom">
            <span class="rate-time">{{item.rateTime}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 版权信息 -->
    <div class="copy-right">
      <p>关于我们&nbsp;|&nbsp;使用教程&nbsp;|&nbsp;举报骗子&nbsp;|&nbsp;联系我们</p>
      <p>2019-2020&nbsp;&nbsp;&nbsp;版权归20166700刘春艳所有</p>
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
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      recruitList: [
        {
          title: "四川成都需要补烂做防水师傅两名",
          imgSrc: "https://img.yzcdn.cn/vant/apple-2.jpg",
          username: "枇杷树",
          desc: "家装补烂和做丙纶大概1-2天活，300一天，做完现钱",
          rateTime: "2019-10-12"
        },
        {
          title: "四川成都需要补烂做防水师傅两名",
          imgSrc: "https://img.yzcdn.cn/vant/apple-2.jpg",
          username: "枇杷树",
          desc: "家装补烂和做丙纶大概1-2天活，300一天，做完现钱",
          rateTime: "2019-10-12"
        }
      ]
    };
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
  // 广告部分
  .advert {
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
          font-size: 28px;
          line-height: 80px;
          border-bottom: 1px dotted #ccc;
        }
        .list-middle {
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
    padding-top: 20px;
    text-align: center;
    p {
      line-height: 40px;
      font-size: 18px;
    }
  }
}
</style>