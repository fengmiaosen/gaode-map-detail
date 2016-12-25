<template>
    <div class='left-box'>
        <search-box :onSubmit = "getIds"></search-box>
        <search-list :poiList ="list"></search-list>
    </div>
</template>
<script>
    import SearchBox from './SearchBox.vue'
    import SearchList from './SearchList.vue';

    export default{
        data(){
            return{
                ids: '',
                list: []
            }
        },
        components:{
            SearchBox,
            SearchList
        },
        methods: {
            getIds(ids, list){
                this.ids = ids;
                this.list = list;
                console.log('panel list:', this.list);
            }
        }
    }
</script>
