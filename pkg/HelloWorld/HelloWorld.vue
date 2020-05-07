<template>
    <div class="component">
        <h2 class="title">组件HelloWorld</h2>
        <img src="./default.jpg" width="100">
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        props: ['dataSource','http','attrs'],
        mounted(){
            this.http.get(this.dataSource.url).then(function (items) {
                console.log(items);
            })
        }
    }
</script>

<style lang="scss" scoped>
    .component {
        .title {
            line-height: 2;
            color: red;
        }
    }
</style>