<template>
  <div class="personal-content">
    <div class="header">
      <div class="title">会员中心</div>
    </div>
    <!-- 个人中心主题列表 -->
    <div class="person-main">
      <div class="menu-list">
        <div class="usermsg">
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
        <div class="count"></div>
      </div>
      <div class="menu-list">
        <div class="menu-item">
          <div class="menu-icon">
            <van-icon name="friends-o" size="20" />
          </div>
          <div class="menu-text">我的招工</div>
          <div class="menu-right">
            <van-icon name="arrow" size="20" />
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-icon">
            <van-icon name="friends-o" />
          </div>
          <div class="menu-text">我的找活名片</div>
          <div class="menu-right">
            <van-icon name="arrow" size="20" />
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-icon">
            <van-icon name="friends-o" />
          </div>
          <div class="menu-text">我的信息</div>
          <div class="menu-right">
            <van-icon name="arrow" size="20" />
          </div>
        </div>
      </div>
      <div class="menu-list">
        <div class="menu-item">
          <div class="menu-icon">
            <van-icon name="friends-o" />
          </div>
          <div class="menu-text">我的信息</div>
          <div class="menu-right">
            <van-icon name="arrow" size="20" />
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-icon">
            <van-icon name="friends-o" />
          </div>
          <div class="menu-text">我的信息</div>
          <div class="menu-right">
            <van-icon name="arrow" size="20" />
          </div>
        </div>
      </div>
      <div class="menu-list">
        <div class="menu-item">
          <div class="menu-icon">
            <van-icon name="friends-o" />
          </div>
          <div class="menu-text">我的信息</div>
          <div class="menu-right">
            <van-icon name="arrow" size="20" />
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-icon">
            <van-icon name="friends-o" />
          </div>
          <div class="menu-text">我的信息</div>
          <div class="menu-right">
            <van-icon name="arrow" size="20" />
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
  }
};
</script>

<style lang="less" scoped >
.personal-content {
  background: #fefefe;
  padding-bottom: 120px;
  .header {
    height: 220px;
    background: linear-gradient(to bottom, #52ebe3 0%, #022566 100%);
    border-radius: 0 0 100px 100px;
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
    .count {
      height: 100px;
      border-top: 1px solid #f1f1f1;
      background: #fff;
    }
    .menu-list {
      margin-top: 14px;
      padding: 30px 0 20px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 2px 2px 5px 5px #ccc;
      .menu-item {
        display: flex;
        margin: 0 20px;
        border-bottom: 1px solid #f1f1f1;
        .menu-icon {
          width: 50px;
          i {
            line-height: 60px;
          }
        }
        .menu-text {
          flex: 1;
          font-size: 30px;
          line-height: 60px;
        }
        .menu-right {
          width: 50px;
          i {
            line-height: 60px;
          }
        }
      }
    }
  }
}
</style>