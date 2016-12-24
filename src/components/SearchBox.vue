<template>
    <div class="input-box">
        <label class="label label-info">{{title}}</label>
        <textarea id="poi_text" class="textarea" placeholder="ids" v-model="ids"></textarea>
        <button class="btn btn-primary" id="poi_search" @click="searchPoi">查看详情</button>
    </div>
</template>

<script>
    export default{
        props: ['onSubmit'],
        data(){
            return {
                title: 'poi推荐列表',
                ids: 'B0FFFVXWVH;B01740OJCN;B0FFG9VQD2'
            }
        },
        components: {},
        methods: {
            searchPoi(){
                this.onSubmit(this.ids);
            }
        }
    }
</script>
