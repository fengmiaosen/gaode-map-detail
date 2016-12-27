<template>
    <div id="container" class='right-box'></div>
</template>

<script>
    import {EventMgr, SEARCH_EVENT} from 'util/EventMgr';
//    import {addMarker} from 'util/Marker';

    export default{
        data(){
            return{
                container: 'container',
                map: null
            }
        },
        mounted() {
            this.initMap();
            this.renderMkr();
        },
        methods: {
            initMap() {
                let pos = new AMap.LngLat(116.397428, 39.90923);

                let mapObj = new AMap.Map(this.container, {
                    resizeEnable: true,
                    center: pos, //创建中心点坐标
                    zoom: 14, //设置地图缩放级别
                    rotation: 0 //设置地图旋转角度
                }); //创建地图实例

                let scale = new AMap.Scale({
                        visible: true
                    }),
                    toolBar = new AMap.ToolBar({
                        visible: true
                    }),
                    overView = new AMap.OverView({
                        visible: true
                    });
                mapObj.addControl(scale);
                mapObj.addControl(toolBar);
                mapObj.addControl(overView);

                this.map = mapObj;
            },
            renderMkr() {
                EventMgr.$on(SEARCH_EVENT, (list) => {
                    let map = this.map;
                    // TODO => webpack2 代码分割，目前编译后在线访问路径不对
                    import('util/Marker.js').then(module => {
                        module.addMarker(map, list);
                    }).catch(err => {
                        console.log("Chunk loading failed.", err);
                    });
                });
            }
        }
    }
</script>
