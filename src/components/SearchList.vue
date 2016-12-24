<template>
    <div class="result-box">
        <div id="r_title" class="label label-primary">推荐列表详情:</div>
        <div id="recom_result">
            <ul class="list-group res-ul"  v-for="(item,index) in list" v-if="item">

                <template v-if="item">
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
                        <span>名称:</span>{{item.body.pois[0].name}}
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>

    export default{
        props: ['ids'],
        data(){
            return{
                list: []
            }
        },
        computed: {
            getPoi(){

            }
        },
        components:{
        }
    }
</script>
