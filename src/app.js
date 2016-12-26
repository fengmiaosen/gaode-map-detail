/**
 * Created by fengmiaosen on 2016/12/12.
 */
import Vue from 'vue';
import App from './App.vue';


let vm = new Vue({
    el: '#app',
    render: h => h(App)
});


// 务必在加载 Vue 之后，立即同步设置以下内容
Vue.config.devtools = true;
