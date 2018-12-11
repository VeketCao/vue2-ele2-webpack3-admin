<template>
    <div class="left_bar">
        <ul class="menu_bar">
            <li class="li_item"><router-link to="/m/home" ><span>首页</span></router-link></li>
            <li class="li_item"><router-link to="/m/form" ><span>表单</span></router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "LeftBar",
    }
</script>

<style scoped lang="scss">
    .left_bar{
        width: 100%;
        height: 100%;
        background-color: rgb(48, 65, 86);
        .menu_bar{
            border: none;
            width: 100%;
            height: 100%;
            .router-link-active {
                background: rgba(106,121,172,0.5);
            }
            .li_item{
                cursor:pointer;
                transition:all .3s;
                &>a{
                    padding:15px 60px;
                    display: inline-block;
                    width: 180px;
                }
                &>a span{
                    color: #fff;
                    font-size: 16px;
                }
                &:hover {
                    background: rgba(106,121,172,0.5);
                }
            }
        }
    }
</style>