<template>
    <div class="input-box">
        <label class="label label-info">{{title}}</label>
        <textarea class="input-text-area" placeholder="ids" v-model="ids" @change="setIds"></textarea>
        <button class="btn btn-primary" id="poi_search" @click="searchPoi">查看详情</button>
    </div>
</template>
<style lang="scss" scoped>
    .input-box {
        padding-top: 10px;
        padding-left: 10px;
        box-sizing: border-box;

        label {
            text-align: left;
        }

        .btn {
            margin: 10px auto;
            display: block;
            width: 100%;
        }
    }

    .input-text-area {
        width: 100%;
        height: 100px;
        max-width: 100%;
        display: block;
        padding: 10px;
        margin: 10px 0 ;
    }
</style>
<script>
    import {EventMgr, SEARCH_EVENT} from 'util/EventMgr';
    import {fetchData} from 'util/request';

    export default{
        data(){
            return {
                title: 'poi推荐列表',
                ids: 'B0FFFVXWVH;B01740OJCN;B0FFG9VQD2'
            }
        },
        methods: {
            setIds(){
                this.ids = this.ids.startsWith(';') ? this.ids.slice(this.ids.indexOf(';') + 1) : this.ids;

                this.ids = this.ids.endsWith(';') ? this.ids.slice(0, this.ids.lastIndexOf(';')) : this.ids;

//                console.log('new ids:', this.ids);
            },
            searchPoi(){
                fetchData(this.ids, list => {
                    EventMgr.$emit(SEARCH_EVENT, list);
                });
            }
        }
    }
</script>
