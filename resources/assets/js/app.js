

require('./bootstrap');

window.Vue = require('vue');


Vue.component('message', require('./components/message.vue'));

const app = new Vue({
    el: '#app',
    data: {
        message: '',
        chat:{
            message:[]
        }
    },
    methods: {
        send(){
            if(this.message != 0){
           this.chat.message.push(this.message);
           this.message =''
            }
        }
    }
});
