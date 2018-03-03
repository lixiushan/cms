
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../component/home/Home.vue';
import Vip from '../component/vip/Vip.vue';
import Cart from '../component/cart/Cart.vue';
import Search from '../component/search/Search.vue';
import List from '../component/news/List.vue';
import Info from '../component/news/Info.vue';
import PhotoList from '../component/photo/List.vue';
import PhotoInfo from '../component/photo/Info.vue';
import GoodsList from '../component/goods/List.vue';
import GoodsInfo from '../component/goods/Info.vue';
import GoodsDes from '../component/goods/Des.vue';
import GoodsComment from '../component/goods/Comment.vue';

const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/vip',component:Vip},
        {path:'/cart',component:Cart},
        {path:'/search',component:Search},
        {path:'/home/list',component:List},
        {path:'/home/info/:id',component:Info},
        {path:'/home/photolist',component:PhotoList},
        {path:'/home/photoinfo/:id',component:PhotoInfo},
        {path:'/home/goodslist',component:GoodsList},
        {path:'/home/goodsinfo/:id',component:GoodsInfo},
        {path:'/home/goodsdes/:id',component:GoodsDes},
        {path:'/home/goodscomment/:id',component:GoodsComment},
    ],
    linkActiveClass:'mui-active'
})

export default router;