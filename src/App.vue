<template>
    <div class="main-box">
        <search-panel ></search-panel>
        <map-panel></map-panel>
        <copy-right></copy-right>
    </div>
</template>
<style rel="stylesheet/scss" lang="sass" scoped>

    .main-box {
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
    }

</style>
<script>
    import SearchPanel from 'components/SearchPanel';
    import MapPanel from 'components/MapPanel';
    import CopyRight from 'components/CopyRight';

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
