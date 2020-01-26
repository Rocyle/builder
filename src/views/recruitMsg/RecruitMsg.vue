<template>
  <div class="recruit-message">
    <div class="header-nav">
      <div class="header">
        <van-cell-group>
          <van-field v-model="searchWork" placeholder="找活、找工作" left-icon="search" />
        </van-cell-group>
        <span>搜索</span>
      </div>
      <!-- 下拉菜单 -->
      <van-dropdown-menu active-color="#ee0a24">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
    </div>
    <!-- 工友联系的群 -->
    <div class="contact-msg">
      <div class="contact-top">
        <span>加群:</span>加工友微信号:
        <span>14928254889</span> 拉你进工人微信群
      </div>
      <div class="contact-bottom">通知内容四川成都需要补烂做防水师傅两名四川成都需要补烂做防水师傅</div>
    </div>
    <!-- 招工信息的展示 -->
    <div class="msg-content">
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
      searchWork: "",
      value1: "四川",
      value2: "a",
      value3: "recomment",
      option1: [
        { text: "四川", value: "四川" },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "全部分类", value: "a" },
        { text: "通用工种", value: "b" },
        { text: "机械操作工/司机", value: "c" },
        { text: "机械操作工/司机", value: "d" },
        { text: "机械操作工/司机", value: "e" },
        { text: "机械操作工/司机", value: "f" }
      ],
      option3: [
        { text: "默认排序", value: "recomment" },
        { text: "最新", value: "b" },
        { text: "推荐", value: "c" }
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
        },
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
@deep: ~">>>";
.recruit-message {
  padding-top: 180px;
  padding-bottom: 140px;
  .header-nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    .header {
      background: rgb(6, 29, 240);
      padding: 10px 30px;
      display: flex;
      .van-cell-group {
        flex: 1;
        @{deep} .van-cell {
          height: 30px;
          font-size: 16px;
          padding: 5px 16px;
        }
        @{deep}.van-icon {
          font-size: 20px;
        }
      }
      span {
        display: inline-block;
        width: 80px;
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    }
    @{deep}.van-dropdown-menu__item {
      height: 50px;
    }
  }
  .contact-msg {
    background: #fff;
    padding: 10px 30px;
    margin-top: 10px;
    border-radius: 8px;
    .contact-top {
      line-height: 60px;
      font-size: 22px;
      border-bottom: 1px dotted rgb(255, 153, 0);
    }
    .contact-bottom {
      line-height: 60px;
      font-size: 20px;
    }
  }
  .msg-content {
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
</style>