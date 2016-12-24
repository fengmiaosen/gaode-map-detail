<template>
    <div class='left-box'>
        <search-box :onSubmit = "getIds"></search-box>
        <search-list :ids ="ids"></search-list>
    </div>
</template>
<script>
    import SearchBox from './SearchBox.vue'
    import SearchList from './SearchList.vue';

    export default{
        data(){
            return{
                ids: ''
            }
        },
        components:{
            SearchBox,
            SearchList
        },
        methods: {
            getIds(ids){
                this.ids = ids;
                console.log('ids:', this.ids);
            }
        }
    }
</script>
