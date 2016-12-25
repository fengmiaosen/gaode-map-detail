<template>
    <div class="input-box">
        <label class="label label-info">{{title}}</label>
        <textarea id="poi_text" class="textarea" placeholder="ids" v-model="ids" @change="setIds"></textarea>
        <button class="btn btn-primary" id="poi_search" @click="searchPoi">查看详情</button>
    </div>
</template>

<script>
    import {EventMgr, SEARCH_EVENT} from '../util/EventMgr';
    import {fetchData} from '../util/request';

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
//                    console.log('box:', list);
                    EventMgr.$emit(SEARCH_EVENT, list);
                });
            }
        }
    }
</script>
