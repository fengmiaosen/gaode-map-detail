<template>
    <div class="my-mkr">
        <img src="http://webapi.amap.com/theme/v1.3/markers/n/mark_r.png" alt="{{index}}" class="mkr-img"><span
            class="mkr-txt">{{index}}</span>
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                index: 1
            }
        },
        components:{
        }
    }
</script>
