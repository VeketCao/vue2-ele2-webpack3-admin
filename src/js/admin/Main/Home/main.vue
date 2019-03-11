<template>
   <div class="home">
        <div class="ad_word">
            <p class="animate">欢迎来到admin</p>
        </div>
   </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped lang="scss">
    .home{
        width: 100%;
        height: 100%;
    }
    .ad_word{
        z-index: 1;
        font-family: system, "Helvetica Neue", Helvetica, Arial;
        font-size: 13px;
        box-sizing: border-box;
        width: 100%;
        line-height: 1.5;
        display: block;
        background-color: #f8f8f8;
        padding: 12px 11px;
        text-align: left;
    }
    /***文字轮播效果***/
    .animate {
        padding-left: 20px;
        font-size: 12px;
        color: #000;
        display: inline-block;
        white-space: nowrap;
        animation: 10s wordsLoop linear infinite normal;
    }

    @keyframes wordsLoop {
        0% {
            transform: translateX(200px);
            -webkit-transform: translateX(200px);
        }
        100% {
            transform: translateX(-100%);
            -webkit-transform: translateX(-100%);
        }
    }

    @-webkit-keyframes wordsLoop {
        0% {
            transform: translateX(200px);
            -webkit-transform: translateX(200px);
        }
        100% {
            transform: translateX(-100%);
            -webkit-transform: translateX(-100%);
        }
    }
    /***end文字轮播效果***/
</style>