<template>
    <div class="app_main">
        <div class="el-scrollbar" :class="{'left_bar_container':opened,'left_bar_container_min':!opened}">
            <left-bar></left-bar>
        </div>
        <div :class="{'main_container':opened,'main_container_max':!opened}">
            <div class="nav_bar_container">
                <nav-bar></nav-bar>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import  LeftBar from './LeftBar/main'
    import NavBar from './NavBar/main'

    export default {
        name: "Main",
        data(){
          return{
              opened:true
          }
        },
        created() {
            Bus.$on('toggleLeftBarMsg', content => {
                this.opened = content;
            });
        },
        components:{
            'left-bar':LeftBar,
            'nav-bar':NavBar
        }
    }
</script>

<style scoped>
    .app_main{
        margin: 0 auto;
        padding:0;
        position: relative;
        height: 100%;
        width: 100%;
    }
    .left_bar_container{
        transition: width .28s;
        width: 180px!important;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
        overflow: hidden;
    }
    .left_bar_container_min{
        transition: width .28s;
        width: 5px!important;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
        overflow: hidden;
    }
    .main_container{
        min-height: 100%;
        -webkit-transition: margin-left .28s;
        transition: margin-left .28s;
        margin-left: 180px;
        position: relative;
    }
    .main_container_max{
        min-height: 100%;
        -webkit-transition: margin-left .28s;
        transition: margin-left .28s;
        margin-left: 5px;
        position: relative;
    }
    .nav_bar_container{
        height: 51px;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #d8dce5;
        -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    }
</style>