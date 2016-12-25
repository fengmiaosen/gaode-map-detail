<template>
    <div class='left-box'>
        <search-box :onSubmit = "getData"></search-box>
        <search-list :poiList ="list"></search-list>
    </div>
</template>
<script>
    import SearchBox from './SearchBox.vue'
    import SearchList from './SearchList.vue';

    export default{
        props: ['search'],
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
            getData(list){
                this.list = list;
                this.search(this.list);
//                console.log('panel list:', this.list);
            }
        }
    }
</script>
