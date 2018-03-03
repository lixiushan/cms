<template>
    <div>
        <div class="mui-slider mui-fullscreen">
            <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
            <!-- <a href="#" class="mui-control-item mui-active">
                全部
            </a> -->
                    <a href="#" class="mui-control-item" :class="{'mui-active':item.id===0}" v-for="item in cateList" :key="item.id" @click="getImages(item.id)">
                        {{item.title}}
                    </a>
                 </div>
            </div>
        </div>

    <!-- 图片列表 -->
        <ul class="category-img-list">
            <li class="img-list-item" v-for="item in imagesList" :key="item.id" @click="goImgDetail(item.id)">
                <img v-lazy="item.img_url" lazy="loaded"> 
                <div>
                    <h2>{{item.title}}</h2>
                    <p>{{item.zhaiyao}}</p>
                </div>
            </li>
            
        </ul>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.js';
import Vue from 'vue';
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

export default {
    data () {
        return {
            cateList:[],
            imagesList:[]
        }
    },
    mounted () {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数
        });
        this.getImgCategory();
        this.getImages(0);
    },
    methods:{
        getImgCategory(){
            this.$http
            .get('http://vue.studyit.io/api/getimgcategory')
            .then(res => {
                console.log(res)
                if(res.data.status === 0){
                    this.cateList = res.data.message;
                    this.cateList.unshift({
                        id:0,
                        title:'全部'
                    })
                }
            })
        },
        getImages(id){
            this.$http
            .get(`http://vue.studyit.io/api/getimages/${id}`)
            .then(res => {
                console.log(res)
                if(res.data.status === 0){
                    this.imagesList = res.data.message;
                }
            })
        },
        goImgDetail(id){
            this.$router.push(`/home/photoinfo/${id}`);
        }
    }
};
</script>

<style lang="scss">
.mui-slider-indicator.mui-segmented-control {
  background-color: #fff;
}

.mui-fullscreen {
  position: fixed;
  top: 40px;
  height: 38px;
}

/* scroll滚动警告的处理方式参考：http://www.jianshu.com/p/baf61adc8667 */
* {
  touch-action: none;
}

.category-img-list {
  list-style: none;
  padding: 5px;
  padding-top: 30px;

  .img-list-item {
    position: relative;
    margin-bottom: 5px;
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    div {
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.2);
      color: #fff;

      h2 {
        font-size: 16px;
      }

      p {
        color: #fff;
        margin-bottom: 0px;
      }
    }

    img {
      display: block;
      width: 100%;
    }
  }
}
</style>

