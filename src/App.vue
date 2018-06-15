<template>
  <div id="app">
    <el-header height>
      <w-header></w-header>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>
      <w-footer></w-footer>
    </el-footer>
  </div>
</template>

<script>
import WFooter from "@/components/footer.vue";
import WHeader from "@/components/header.vue";
export default {
  data() {
    return {};
  },
  components: {
    WFooter,
    WHeader
  }
};
</script>


<style lang="stylus">
*
  text-shadow none
  box-shadow none !important
  padding 0
  margin 0
html
  font-family 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif
  color #000000
  font-size 12px
body
  margin 0
  background-image url('assets/bak.jpg')
  background-position center top
  background-size auto
  background-repeat repeat
  background-attachment fixed
  background-attachment fixed !important
  background-position top center !important
  position relative
img
  border 0
#nprogress
  .bar
    background-color #999
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
.right
  float right
.left
  float left
.el-header, .el-footer
  padding 0
.el-header
  background #F5F5F5
  padding-top 12px
  padding-bottom 12px
.el-main
  padding 0
  overflow visible
  background-position center top
  background-size cover
.el-main:after
  content ''
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background-color rgba(255, 255, 255, 0.8)
  z-index -1
  background-image: url('assets/bak.jpg');
  background-position: center top;
  background-size: cover;
  background-attachment: fixed;
  -webkit-filter: blur(20px);
  -moz-filter: blur(20px);
  -ms-filter: blur(20px);
  -o-filter: blur(20px);
  filter: blur(20px);
</style>
