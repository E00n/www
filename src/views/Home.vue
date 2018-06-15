<template>
  <div class="home">
    <div class="titlediv">
      <p class="banner-title">—— Stock Options ——</p>
      <p class="banner-info">盈宏期权, 创造财富</p>
      <p class="banner-bak">for every investment<br>you should have the courage and confidence to put</p>
    </div>
    <img src="../assets/banner1.jpg" class="banner">
    <div class="content-div">
      <h4 style="color: #a97b52;">YOUWONN INVESTMENT</h4>
      <hr class="hr-title">
      <h4 class="h4">对于每一笔投资，你都应当有信心和勇气投入</h4>
      <div class="left choose-type">
        <div>
          <a href="about/">
            <img class="grey" src="">
            <img class="white" style="display: none;" src="">
            <h4 style="color: #0c0c0c">Company Profile</h4>
            <h4 style="color: #0c0c0c">关于我们</h4>
          </a>
        </div>
      </div>
      <div class="left choose-type">
        <div>
          <a href="about?index=3">
            <img class="grey" src="">
            <img class="white" style="display: none;" src="">
            <h4 style="color: #0c0c0c">Corporate Cultrue</h4>
            <h4 style="color: #0c0c0c">集团介绍</h4>
          </a>
        </div>
      </div>
      <div class="left choose-type">
        <div>
          <a href="about?index=2">
            <img class="grey" src="">
            <img class="white" style="display: none;" src="">
            <h4 style="color: #0c0c0c">Investment</h4>
            <h4 style="color: #0c0c0c">投资保障</h4>
          </a>
        </div>
      </div>
      <h4 style="color: #a97b52;" class="text-align weight-bolder size-14">PROFIT AND LOSS</h4>
      <hr class="hr-title">
      <h4 class="text-align size-8 color-hs">盈亏计算器</h4>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  //fuck
  name: "home",
  components: {}
};
</script>

<style lang="stylus">
.home
  .titlediv
    height 475px
    padding auto 0
    p
      position relative
      text-shadow 0 0 0.2em #F87, 0 0 0.2em #F871
    .banner-title
      top 100px
      color #ffffff
      font-size 5em
      font-weight 600
    .banner-info
      top 130px
      color #E7B322
      font-size 3.5em
      font-weight 600
    .banner-bak
      top 180px
      color #ffffff
      font-size 1.5em
  .banner
    display block
    width 100%
    min-width 1280px
  .content-div
    width 1280px
    margin 0 auto
    padding-bottom 20px
    .hr-title
      margin 0px 595px
      margin-top 15px
      margin-bottom 15px
      border none
      border-top 3px solid #a97b52
    .choose-type
      width 33.3%
      height 250px
      text-align center
      margin-top 15px
      cursor pointer
      div
        width 240px
        height 178px
        margin 0 auto
        margin-top 33px
</style>
