<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in list" :key="index">
            <img :src="item.img" :alt="item.url">
        </mt-swipe-item>
    </mt-swipe>

    <!-- 菜单 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/list">
                <span class="mui-icon mui-menu-1"></span>
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <span class="mui-icon mui-menu-2"></span>
                <div class="mui-media-body">图片分享</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <span class="mui-icon mui-menu-3"></span>
                <div class="mui-media-body">商品购买</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-menu-4"></span>
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-menu-5"></span>
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-menu-6"></span>
                <div class="mui-media-body">联系我们</div></a></li>
      
    </ul>
  </div>
</template>

<script>
export default {
    data () {
        return {
            list:[]
        }
    },
    created(){
        this.getLunbo();
    },
    methods: {
        getLunbo(){
            this.$http
            .get('http://vue.studyit.io/api/getlunbo')
            .then(res => {
                console.log(res);
                if(res.data.status === 0){
                    this.list = res.data.message;
                }
            })
        }
    }
}
</script>

<style lang="scss">
    .mint-swipe{
        height: 180px;
        img{
            width: 100%;
        }
    }
    .mui-icon{
        width: 60px;
        height: 60px;
        background-size: contain;
    }
    .mui-menu-1{
        background-image: url('../../assets/images/menu1.png');
    }
    .mui-menu-2{
        background-image: url('../../assets/images/menu2.png');
    }
    .mui-menu-3{
        background-image: url('../../assets/images/menu3.png');
    }
    .mui-menu-4{
        background-image: url('../../assets/images/menu4.png');
    }
    .mui-menu-5{
        background-image: url('../../assets/images/menu5.png');
    }
    .mui-menu-6{
        background-image: url('../../assets/images/menu6.png');
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
        .mui-table-view-cell{
            border: none;
        }
    }
</style>
