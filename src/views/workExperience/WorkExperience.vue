<template>
  <div class="work-experience">
    <van-nav-bar title="新增项目工作经验" left-text="返回" @click-left="onClickLeft" class="header" />
    <div class="experience-list">
      <div class="list-details">
        <div class="title">项目名称</div>
        <input placeholder="请输入项目名称" />
      </div>
      <div class="list-details">
        <div class="title">开工时间</div>
        <span>请选择开工时间</span>
      </div>
      <div class="list-details">
        <div class="title">开工时间</div>
        <span>请选择开工时间</span>
      </div>
      <div class="list-details">
        <div class="title">开工时间</div>
        <span>请选择开工时间</span>
      </div>
      <div class="details-desc">
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="项目详情"
          type="textarea"
          maxlength="500"
          placeholder="请输入留言"
          show-word-limit
          class="leave-msg"
        />
        <p>添加相关图片</p>
        <van-uploader v-model="fileList" multiple />
      </div>
    </div>
    <div class="bottom-btn">
      <van-button type="info">保存，继续添加</van-button>
      <van-button type="info">确认保存</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" }
        // Uploader 根据文件后缀来判断是否为图片文件
      ]
    };
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
.work-experience {
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
  .experience-list {
    padding: 0 30px;
    margin-top: 10px;
    .list-details {
      display: flex;
      background: #fff;
      line-height: 90px;
      margin-top: 10px;
      & > .title {
        width: 160px;
        text-align: center;
        font-size: 26px;
        font-weight: bold;
      }
      input,
      span {
        display: inline-block;
        flex: 1;
        border: 0;
        font-size: 26px;
        color: #808080;
      }
    }
    .details-desc {
      padding: 0 30px;
      margin-top: 10px;
      background: #fff;
      .leave-msg {
        width: 100%;
        display: block;
      }
      .van-uploader {
        margin-top: 10px;
      }
      p {
        font-size: 26px;
        line-height: 40px;
      }
    }
  }
  .bottom-btn {
    display: flex;
    justify-content: space-between;
    padding:20px ;
    position: fixed;
    bottom: 5px;
    background: #fff;
    width: 100%;
    button {
      width: 250px;
      line-height: 60px;
      // font-size: 20px;
    }
  }
}
</style>