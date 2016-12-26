<template>
    <div class="main-box">
        <search-panel ></search-panel>
        <map-panel></map-panel>
        <copy-right></copy-right>
    </div>
</template>
<style>

</style>
<script>
    import SearchPanel from './components/SearchPanel';
    import MapPanel from './components/MapPanel';
    import CopyRight from './components/CopyRight';

    import './css/bootstrap.min.css';
    import './css/index.scss';

    export default{
        data(){
            return {};
        },
        components:{
            SearchPanel,
            MapPanel,
            CopyRight
        }
    }
</script>
