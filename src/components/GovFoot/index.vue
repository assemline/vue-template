<template>
  <div class="foot-box">
    <div class="foot-content">
      <div class="platform-info">
        <div class="platform-info-desc">
          <div class="platform-info-title">关于平台</div>
          服务平台
        </div>
        <div class="platform-info-link">
          <ul>
            <div class="platform-info-title">在线咨询</div>
            <div class="qq">培训QQ群：12345678</div>
            <div class="qq">QQ群：12345678</div>
            <div class="title">
              <a href>客服热线</a>
              <span class="phone">0371-12345678</span>
            </div>
            <div class="title">
              <a href>技术咨询</a>
              <span class="phone">0371-12345678</span>
            </div>
          </ul>
        </div>
      </div>
      <div class="company-info">
        <div
          class="company-info-desc"
        >Copyright © 2019 中小微企业综合服务平台 All Rights Reserved 豫公网安备:35020302033563号 备案号：豫ICP备07054601号-10 全国服务热线：40010 18888</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.foot-box {
  height: 310px;
  background: #373d41;
  border-top: 10px solid #00bba4;
  .foot-content {
    width: 1200px;
    margin: 0 auto;
    color: #9a9a9a;
    .platform-info {
      height: 210px;
      margin-top: 25px;
      display: flex;
      justify-content: space-between;
      .platform-info-desc {
        width: 450px;
        line-height: 25px;
      }
      .platform-info-title {
          font-size: 18px;
          line-height: 30px;
          margin-bottom: 15px;
        }
      .platform-info-link {
        color: #b7bbc5;
        ul{
          margin:0px;
        }
        ul li a {
          font-size: 16px;
          color: #b7bbc5;
        }
        ul .title a {
          font-size: 16px;
          color: #b7bbc5;
        }
        .title {
          margin-bottom: 7px;
        }
        .phone {
          display: inline-block;
          background: url("../../assets/foot/phone.jpg") no-repeat;
          height: 35px;
          line-height: 35px;
          font-size: 22px;
          font-weight: bold;
          padding-left: 39px;
        }
        .qq {
          background: url("../../assets/foot/qq.jpg") no-repeat;
          height: 35px;
          line-height: 35px;
          text-align: center;
          padding-left: 8px;
          margin-bottom: 5px;
        }
      }
    }
    .company-info {
      clear: both;
      width: 100%;
      text-align: center;
      .company-info-desc {
        border-top: 1px solid #9a9a9a;
        width: 100%;
        padding-top: 15px;
      }
    }
  }
}
</style>
