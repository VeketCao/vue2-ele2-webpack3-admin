<template>
    <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
            <img slot="icon" >
            tab1
        </mt-tab-item>
        <mt-tab-item id="tab2">
            <img slot="icon" >
            tab2
        </mt-tab-item>
        <mt-tab-item id="tab3">
            <img slot="icon" >
            tab3
        </mt-tab-item>
        <mt-tab-item id="tab4">
            <img slot="icon" >
            tab4
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        props: {},
        methods: {

        },
        filters: {},
        computed: {},
        created () {},
        mounted () {}
    }
</script>

<style scoped>

</style>