<template>
    <div class="result-box">
        <div id="r_title" class="label label-primary">推荐列表详情:</div>
        <div id="recom_result" class="result-list">
            <div class="result-item" v-for="(item,index) in list" >
                <div class="left-part">
                    <ul class="list-group res-ul"  >
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
                <div class="right-part">
                    <img v-if="item && item.body && item.body.pois &&  item.body.pois[0].photos && item.body.pois[0].photos[0]" :src="item.body.pois[0].photos[0].url" class="img-box" @click="switchLink" />
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .result-box {
        padding: 10px;
        overflow: auto;
        box-sizing: border-box;
    }

    .result-item {
        display: flex;
        box-sizing: border-box;
        padding-top: 10px;
        border-bottom: 1px solid #f2f2f4;
    }

    .left-part {
        box-sizing: border-box;
        flex: 1;
    }

    .right-part {
        box-sizing: border-box;
    }
    
    .img-box {
        box-sizing: border-box;
        display: block;
        width: 100px;
        height: 100px;
        cursor: pointer;
    }

    .res-ul {
        margin: 0;
        padding: 0;
        width: 100%;
        border: none;

        li {
            list-style: none;
            padding: 5px;
            border-top: 1px solid #f2f2f4;

            span {
                margin-right: 5px;
                font-weight: bold;
                color: #0354f9;
            }

            &:first-child {
                color: red;
            }

            &:nth-child(2n) {
                background: #f2f2f4;
            }
        }
    }
</style>
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
                console.log('list:', list);
                this.list = list;
            });
        },
        computed: {

        },
        methods: {
            switchLink(event){
//                console.log(event.target.src);
                window.location.href = event.target.src;
            }
        },
        components:{}
    }
</script>
