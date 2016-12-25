<template>
    <div class="main-box">
        <search-panel :search = "searchData"></search-panel>
        <map-panel :getMap = "getMap" :list="poiData"></map-panel>
        <copy-right></copy-right>
    </div>
</template>

<script>
    import SearchPanel from './components/SearchPanel';
    import MapPanel from './components/MapPanel';
    import CopyRight from './components/CopyRight';

    import {addMarker} from './util/Marker';

    import './css/bootstrap.min.css';
    import './css/index.css';

    export default{
        data(){
            return{
                mapObj: null,
                poiData: null
            }
        },
        methods: {
            searchData(list) {
                this.poiData = list;
                addMarker(this.mapObj, list);
            },
            getMap(map){
                this.mapObj = map;
            }
        },
        components:{
            SearchPanel,
            MapPanel,
            CopyRight
        }
    }
</script>
