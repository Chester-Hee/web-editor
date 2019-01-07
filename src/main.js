import Vue from 'vue';
import web_editor from './web_editor.vue';

var vm = new Vue({
    el: '#custom_container',
    data:{
        dialog_title: '测试'
    },
    components:{
        web_editor: web_editor
    }
});