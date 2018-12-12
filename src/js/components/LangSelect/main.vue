<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <svg-icon class-name="international-icon" icon-class="language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
        <el-dropdown-item :disabled="language==='ja'" command="ja">日本語</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import CST from '@/lib/const/main';

  export default {
      data(){
          return{
              language:localStorage.getItem(CST.LANG) ||'zh'
          }
      },
    methods: {
        handleSetLanguage(lg) {
            this.language = lg;
            this.$i18n.locale = lg
            localStorage.setItem(CST.LANG,lg);
            this.$message({
              message: 'Switch Language Success',
              type: 'success'
            })
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

