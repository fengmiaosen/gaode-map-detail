<template>
    <div class='left-box'>
        <search-box ></search-box>
        <search-list ></search-list>
    </div>
</template>
<script>
    import SearchBox from './SearchBox.vue'
    import SearchList from './SearchList.vue';

    export default{
        data(){
            return {}
        },
        components:{
            SearchBox,
            SearchList
        },
        methods: {

        }
    }
</script>
