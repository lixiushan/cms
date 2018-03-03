
import Vue from 'vue';
import App from './App.vue';
import { Header,Button,Swipe,SwipeItem } from 'mint-ui';

import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
import './assets/css/index.css';

import axios from 'axios';
import moment from 'moment';
Vue.prototype.$http = axios;

import router from './router/index.js';
import store from './store/index.js';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

Vue.filter('date',function(val,format){
    return moment(val).format(format)
})


new Vue({
    el:'#app',
    store,
    router,
    render: c => c(App)
})