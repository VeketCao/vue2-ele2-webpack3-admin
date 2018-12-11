<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <svg-icon class-name="international-icon" icon-class="language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="lang==='zh-cn'" command="zh-cn">中文</el-dropdown-item>
      <el-dropdown-item :disabled="lang==='en'" command="en">English</el-dropdown-item>
        <el-dropdown-item :disabled="lang==='ja'" command="ja">日本語</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
    data(){
      return{
          lang:'zh-cn'
      }
    },
    methods: {
        handleSetLanguage(lg) {
            this.lang = lg;
            Vue.config.lang = lg;
            /*this.$message({
              message: 'Switch Language Success',
              type: 'success'
            })*/
        }
    }
}
</script>

<style scoped>
.international-icon {
  font-size: 20px;
  cursor: pointer;
  vertical-align: -5px!important;
}
</style>

