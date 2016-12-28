<template>
    <div class="result-item">
        <div class="left-part">
            <ul class="list-group res-ul"  >
                <template v-if="getPoi">
                    <li class="list-group-item">
                        <span>序号:</span>{{index+1}}
                    </li>
                    <li class="list-group-item">
                        <span>名称:</span>{{getPoi.name}}
                    </li>
                    <li class="list-group-item">
                        <span>ID:</span>{{getPoi.id}}
                    </li>
                    <li class="list-group-item">
                        <span>经纬度:</span>{{getPoi.location}}
                    </li>
                    <li class="list-group-item">
                        <span>new_type_code:</span>{{getPoi.type}}
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
            <img class="img-box" v-if="getPoi" :src="getPhoto" @click="switchLink" />
        </div>
    </div>
</template>
<style lang="sass" scoped>
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

            > span {
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
    export default{
        props: ['item', 'index'],
        data() {
            return {
                poi: null
            };
        },
        computed: {
            getPoi(){

                if(this.item && this.item.body && Array.isArray(this.item.body.pois) && this.item.body.pois[0]) {
                    this.poi = this.item.body.pois[0];
                }

                return this.poi;
            },
            getPhoto() {
                return this.poi.photos &&  this.poi.photos[0] ? this.poi.photos[0].url : '';
            }
        },
        methods: {
            switchLink(event){
                window.location.href = event.target.src;
            }
        },
        components:{}
    }
</script>