<template>
  <van-tabbar route class="footer" v-model="active" active-color="#FF3B3E" inactive-color="#C1C1C1">
    <van-tabbar-item replace to="/home" icon="wap-home" class="item">
      <span class="text">首页</span>
    </van-tabbar-item>
    <van-tabbar-item icon="friends" to="/recruitMsg" class="item">
      <span class="text">招工信息</span>
    </van-tabbar-item>
    <van-tabbar-item class="item release" @click="showMask">
      <van-button type="info" class="addBtn">
        <van-icon name="plus" class="plus" />
      </van-button>
      <span class="text">发布信息</span>
      <div class="mask" v-show="showBlock">
        <div class="mask-content">
          <div @click="sendMsg(0)">发布招工信息</div>
          <div @click="sendMsg(1)">发布找活名片</div>
        </div>
      </div>
    </van-tabbar-item>
    <van-tabbar-item icon="comment" to="/workerLook" class="item">
      <span class="text">工人找活</span>
    </van-tabbar-item>
    <van-tabbar-item icon="manager" :to="token?'/personal':'/login'" class="item">
      <span class="text">个人</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      showBlock: false,
      token: ""
    };
  },
  created() {
    localStorage.setItem("token", "1223234f");
    this.token = localStorage.getItem("token");
  },
  methods: {
    showMask() {
      this.showBlock = !this.showBlock;
      console.log("dpwd0", 1111);
    },
    sendMsg(index){
      if(index==0){
        this.$router.push('/sendRecruit');
      }else{
        this.$router.push('/sendLookWork');
      }
    }
  }
};
</script>

<style scoped lang="less">
@deep: ~">>>";
.footer {
  width: 100%;
  height: 100px;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  .item {
    @{deep}.van-icon {
      font-size: 24px;
    }
    .text {
      font-size: 16px;
      font-family: SourceHanSansCN;
      font-weight: 400;
    }
  }
  .release {
    position: relative;
    .addBtn {
      display: block;
      width: 100px;
      height: 100px;
      padding: 0;
      text-align: center;
      background: #ff3b3e;
      border: 0;
      border-radius: 50%;
      position: absolute;
      bottom: 40px;
      left: 20px;
      z-index: 100;
      .plus {
        font-size: 70px;
        line-height: 100px;
      }
    }
    .text {
      display: block;
      width: 100%;
      text-align: center;
      position: absolute;
      left: 0;
      bottom: 10px;
    }
    .mask {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(223, 219, 219, 0.8);
      z-index: 300;
      .mask-content {
        position: absolute;
        bottom: 200px;
        left: 0;
        width: 100%;
        display: flex;
        & > div {
          flex: 1;
          background: #000;
          color: #fff;
          text-align: center;
          line-height: 60px;
        }
      }
    }
  }
}
</style>
