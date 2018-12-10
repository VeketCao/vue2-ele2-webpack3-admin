<template>
    <div class="app_main">
        <div class="left_bar_container el-scrollbar">
            <left-bar></left-bar>
        </div>
        <div class="main_container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import  LeftBar from './LeftBar/main'
    export default {
        name: "Main",
        components:{
            'left-bar':LeftBar,
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
    .main_container{
        min-height: 100%;
        -webkit-transition: margin-left .28s;
        transition: margin-left .28s;
        margin-left: 180px;
        position: relative;
    }
</style>