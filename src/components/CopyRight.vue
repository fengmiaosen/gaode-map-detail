<template>
    <span class="email-tag">{{email}}</span>
</template>
<style scoped>
    .email-tag {
        background: #fff;
        position: absolute;
        right: 0;
        bottom: 10px;
        z-index: 99999;
    }
</style>
<script>
    export default{
        data(){
            return{
                email: 'email: miaosen.fms@alibaba-inc.com'
            }
        },
        components:{}
    }
</script>
