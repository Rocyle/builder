<template>
  <div class="send-recruit-content">
    <div class="header">
      <div class="title">发布招工信息</div>
    </div>
    <div class="send-recruit-form">
      <h4>请完善以下的信息</h4>
      <div class="recruit-form">
        <van-field v-model="text" label="标题" placeholder="请输入标题" />
        <van-field v-model="text" label="所需工种" placeholder="请输入所需工种" />
        <van-field v-model="text" label="地区" placeholder="请输入标题" />
        <van-field v-model="text" label="详细地址" placeholder="请输入详细地址" />
        <van-field v-model="text" label="联系人" placeholder="请输入标题" />
        <van-field v-model="tel" type="tel" label="手机号" />
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="详情"
          type="textarea"
          maxlength="500"
          placeholder="请输入详情（如招工要求、工作内容、工资待遇、结款方式/周期等），有助于您更快、更准确的招到好工人~"
          show-word-limit
        />
      </div>
      <div class="upload-img">
        <h4>
          上传图片
          <span>(可以不上传)</span>
        </h4>
        <p>可上传工地现场照片、工程图纸、承包合同等</p>
        <van-uploader v-model="fileList" multiple />
      </div>
    </div>
    <van-button type="info" class="confirm-btn">确认</van-button>
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
      value: "",
      message: "",
      length: "",
      text: "",
      tel: "",
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" }
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: "https://cloud-image", isImage: true }
      ]
    };
  }
};
</script>

<style lang="less"  scoped >
@deep: ~">>>";
.send-recruit-content {
  background: #fefefe;
  padding-bottom: 140px;
  .header {
    height: 200px;
    background: linear-gradient(to bottom, #52ebe3 0%, #022566 100%);
    .title {
      height: 100px;
      color: #ffffff;
      text-align: center;
      font-size: 38px;
      line-height: 100px;
    }
  }
  .send-recruit-form {
    margin-top: -70px;
    margin-bottom: 40px;
    padding: 0 30px;
    & > h4 {
      padding: 40px 0;
      color: #333;
      text-align: center;
      font-size: 38px;
      font-weight: normal;
      background: #fff;
      border-radius: 6px;
      box-shadow: 2px 2px 5px 5px #ccc;
    }
    .recruit-form {
      padding: 20px 0;
      border-radius: 6px;
      margin-top: 14px;
      box-shadow: 2px 2px 5px 5px #ccc;
      @{deep}.van-field__label {
        font-size: 16px;
        font-weight: bold;
      }
    }
    .upload-img {
      border-radius: 6px;
      margin-top: 14px;
      box-shadow: 2px 2px 5px 5px #ccc;
      padding: 20px 0;
      h4 {
        font-size: 30px;
        text-align: center;
        font-weight: normal;
        line-height: 80px;
        border-bottom: 1px dotted #ccc; 
        span {
          color: #f00;
        }
      }
      p{
        font-size: 24px;
        line-height: 60px;
        text-align: center;
      }
      .van-uploader {
        padding-top: 5px;
      }
    }
  }
  .confirm-btn {
    display: block;
    margin-top: 40px;
    width: 500px;
    //   height: 60px;
    line-height: 80px;
    text-align: center;
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    margin: 0 auto;
  }
}
</style>