<template>
    <div class="nav_bar">
        <hamburger :toggle-click="toggleLeftBar" :is-active="this.opened" class="hamburger-container"/>
    </div>
</template>

<script>
    import Hamburger from '@/components/Hamburger/main'

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
        },
        components:{
            hamburger:Hamburger
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
</style>