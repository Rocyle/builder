<template>
  <div class="recruit-content">
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
</template>

<script>
export default {
  data() {
    return {
      recruitList: [
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

<style lang="less"  scoped >
.recruit-content {
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
</style>