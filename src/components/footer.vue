<template>
  <div class="footer">
    <el-row>
      <el-col :span="12">
        <div class="right footdiv">
          <p class="footlogo">
            <img src="../assets/logo.png">
            <span>vue</span>
          </p>
          <span>版权所有 2018©VUE</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="left footdiv">
          <p>
            <i class="el-icon-service" style="    font-size: 2.2em;font-weight: 700; color:#999999"></i>
            <span style="font-size:1.3em; display:block; margin-top:8px">服务热线：00000000000</span>
          </p>
          <span>服务时间 (09:00-18:00)</span>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col :span="5"></el-col>
      <el-col :span="14">
        <p>
          风险提示：保证金类交易时存在较大的亏损风险，
          <br/> 这些产品不一定适合每一位投资者，请确保您完全了解所涉及的风险
        </p>
      </el-col>
      <el-col :span="5"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="stylus">
.footer
  border-top #999 1px solid
  background #F5F5F5
  padding-bottom 20px
.footdiv
  height 100px
  width 270px
  padding 0 20px
  padding-top 20px
  .footlogo
    border-right #999 1px solid
    img
      height 35px
      width 35px
    span
      display block
      font-size 1.5em
</style>\
