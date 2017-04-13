<template>
    <div class="result-box">
        <div class="label label-primary">推荐列表详情:</div>
        <div class="result-list">
            <search-item v-for="(item,index) in list" :item="item" :index="index"></search-item>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .result-box {
        padding: 10px;
        overflow: auto;
        box-sizing: border-box;
    }
    .result-list {
        overflow: auto;
    }
</style>
<script>
    import {EventMgr, SEARCH_EVENT} from 'util/EventMgr';
    import SearchItem from './SearchItem.vue';

    export default{
        data() {
            return {
                list: []
            };
        },
        mounted(){
            EventMgr.$on(SEARCH_EVENT, (list) => {
                console.log('list:', list);
                this.list = list;
            });
        },
        computed: {

        },
        methods: {
        },
        components:{
            SearchItem
        }
    }
</script>
