<template>
    <div class="nav_bar">
        <hamburger :toggle-click="toggleLeftBar" :is-active="this.opened" class="hamburger-container"/>

        <div class="right-menu">

            <lang-select class="international right-menu-item"/>

            <el-dropdown class="avatar-container right-menu-item" trigger="click">
                <div class="avatar-wrapper">
                    <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="user-avatar">
                    <i class="el-icon-caret-bottom"/>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <!--<router-link to="/">
                        <el-dropdown-item>首页</el-dropdown-item>
                    </router-link>-->
                    <a target="_blank" href="https://github.com/VeketCao/vue2-ele2-webpack3-admin">
                        <el-dropdown-item>VeketCao</el-dropdown-item>
                    </a>
                    <el-dropdown-item divided>
                        <span style="display:block;" @click="logout">退出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    import Hamburger from '@/components/Hamburger/main'
    import LangSelect from '@/components/LangSelect/main'

    export default {
        name: "NavBar",
        data(){
            return{
                opened:true
            }
        },
        methods:{
            toggleLeftBar() {//改变左侧栏宽度
                this.opened = !this.opened;
                Bus.$emit('toggleLeftBarMsg', this.opened);
            },
            logout() {
                this.$router.push('/login');
            }
        },
        components:{
            hamburger:Hamburger,
            'lang-select':LangSelect
        }
    }
</script>

<style scoped lang="scss">
    .nav_bar{
        width: 100%;
        height: 100%;
    }
    .hamburger-container{
        line-height: 58px;
        height: 50px;
        float: left;
        padding: 1px 15px;
    }
    .right-menu {
        float: right;
        height: 100%;
        &:focus{
            outline: none;
        }
        .right-menu-item {
            display: inline-block;
            margin: 0 8px;
        }
        .international{
            vertical-align: 13px;
        }
        .avatar-container {
            height: 50px;
            margin-right: 30px;
            .avatar-wrapper {
                margin-top: 5px;
                position: relative;
                .user-avatar {
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    cursor: pointer;
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
</style>