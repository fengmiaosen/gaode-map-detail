<template>
    <div id="container" class='right-box'></div>
</template>

<script>
//    import {addMarker} from '../util/Marker';

    export default{
        props: ['list', 'getMap'],
        data(){
            return{
                container: 'container',
                map: null
            }
        },
        mounted() {
            this.initMap();
//            this.renderMkr(this.map, this.list);
        },
        updated(){
//            this.renderMkr(this.map, this.list);
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
                this.getMap(mapObj);
            },
            renderMkr() {
//                if(this.list && this.list.length > 0) {
//                    addMarker(this.map, this.list);
//                }
            }
        }
    }
</script>
