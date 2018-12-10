<template>
    <div class="left_bar">
        <ul class="menu_bar">
            <li class="li_item">
                <a class="a_item">
                   <span>首页</span>
                </a>
            </li>
            <li class="li_item">
                <a class="a_item">
                    <span>测试</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "LeftBar"
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
            .li_item{
                padding:0px 10px;
                .a_item{
                    padding:20px 50px;
                    line-height: 60px;
                }
                .a_item span{
                    color: #fff;
                    font-size: 16px;
                }
            }
        }
    }
</style>