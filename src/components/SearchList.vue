<template>
    <div class="result-box">
        <div id="r_title" class="label label-primary">推荐列表详情:</div>
        <div id="recom_result">
            <ul class="list-group res-ul"  v-for="(item,index) in list" >

                <template v-if="item && item.body && item.body.pois && item.body.pois[0]">
                    <li class="list-group-item">
                        <span>序号:</span>{{index+1}}
                    </li>
                    <li class="list-group-item">
                        <span>名称:</span>{{item.body.pois[0].name}}
                    </li>
                    <li class="list-group-item">
                        <span>ID:</span>{{item.body.pois[0].id}}
                    </li>
                    <li class="list-group-item">
                        <span>经纬度:</span>{{item.body.pois[0].location}}
                    </li>
                    <li class="list-group-item">
                        <span>new_type_code:</span>{{item.body.pois[0].type}}
                    </li>
                </template>
                <template v-else>
                    <li class="list-group-item">
                        <span>序号:</span>{{index+1}}
                    </li>
                    <li class="list-group-item">
                        <span>名称:</span>{{item.body.toString()}}
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
    import {EventMgr, SEARCH_EVENT} from 'util/EventMgr';

    export default{
        data() {
            return {
                list: []
            };
        },
        mounted(){
            EventMgr.$on(SEARCH_EVENT, (list) => {
//                console.log('list:', list);
                this.list = list;
            });
        },
        computed: {
        },
        components:{}
    }
</script>
