<template>
  <div>
    <el-row type="flex" justify="space-between">
      <el-col :span="5"></el-col>
      <el-col :span="14">
        <div class="logo left">
          <img src="../assets/logo.png">
          <span>vue</span>
        </div>
        <div class="right">
          <el-menu 
          :default-active="activeIndex" 
          router 
          class="el-menu-demo" 
          mode="horizontal"
          text-color="#000"
          @select="handleSelect"
          background-color="#F5F5F5"
          active-text-color="#999"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/product">产品介绍</el-menu-item>
            <el-menu-item index="/about">关于我们</el-menu-item>
            <el-menu-item index="/news">前沿资讯</el-menu-item>
            <el-menu-item index="/notice">网站公告</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="5"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/"
    };
  },
  components: {},
  methods: {
    handleSelect(key, keyPath) {
      keyPath;
    }
  },
  watch: {
    $route(to) {
      this.activeIndex = to.path;
    }
  }
};
</script>

<style lang="stylus">
.logo
  height 60px
  display -webkit-inline-box
  img
    margin-top 15px
    height 35px
    width 35px
  span
    display block
    height 35px
    font-size 1.8em
    line-height 60px
    margin-left 10px
.el-menu-item
  font-size 1.2em
  font-weight 600
.el-menu--horizontal > .el-menu-item.is-active
  order-bottom 3px solid #a97b52
.el-menu--horizontal
  border-right none
  border-bottom solid 0 #e6e6e6
</style>
