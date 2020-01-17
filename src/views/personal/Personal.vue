<template>
  <div class="personal-content">
    <div class="header">
      <div class="title">会员中心</div>
    </div>
    <!-- 个人中心主题列表 -->
    <div class="person-main">
      <div class="usermsg menu-list">
        <van-image
          round
          width="80px"
          height="80px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          class="head-pic"
        />

        <div class="user-text">
          <p>
            先生
            <span>修改资料</span>
          </p>
          <p>编号：22309</p>
        </div>
      </div>
      <div class="menu-list">
        <div class="menu-item">
          <div class="menu-icon">
            <van-icon name="friends-o" />
          </div>
          <div class="menu-text">
            我的招工
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-icon">
            <van-icon name="friends-o" />
          </div>
          <div class="menu-text">
            我的招工
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
      <div class="menu-list"></div>
      <div class="menu-list"></div>
      <div class="menu-list"></div>
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
  }
};
</script>

<style lang="less" scoped >
.personal-content {
  background: #fefefe;
  padding-bottom: 120px;
  .header {
    height: 260px;
    background: linear-gradient(to bottom, #52ebe3 0%, #022566 100%);
    border-radius: 0 0 200px 200px;
    .title {
      height: 100px;
      color: #ffffff;
      text-align: center;
      font-size: 38px;
      line-height: 100px;
    }
  }
  .person-main {
    padding: 0 30px;
    margin-top: -130px;
    .usermsg {
      display: flex;
      .head-pic {
        margin: 0 20px;
      }
      .user-text {
        flex: 1;
      }
    }
    .menu-list {
      margin-top: 14px;
      padding: 30px 0 20px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 2px 2px 5px 5px #ccc;
      .menu-item {
        display: flex;
        .menu-icon {
          width: 50px;
        }
        .menu-text {
          flex: 1;
        }
      }
    }
  }
}
</style>