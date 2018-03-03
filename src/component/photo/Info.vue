<template>
  <div class="photo-info">
    <header>
      <h2 class="title">{{ info.title }}</h2>
      <p class="mui-ellipsis">
        <span>{{$route.params.vvid}}发表时间：{{ info.add_time | date('YYYY-MM-DD HH:mm:ss') }}</span>
        <span>点击次数：{{ info.click }}次</span>
      </p>
    </header>
    <div class="thumb-img">
      <img :src="item.src" @click="$preview.open(index, imgInfo)" height="100" v-for="(item,index) in imgInfo" :key="index" class="preview-img">
    </div>
    <div class="content" v-html="info.content"></div>
    <Comment :CommentId="$route.params.id"></Comment>
  </div>
</template>

<script>
import Comment from '../common/Comment.vue';
import VuePreview from 'vue-preview';
import Vue from 'vue';
Vue.use(VuePreview);

export default {
    data () {
        return {
            info:{},
            imgInfo:[]
        }
    },
    created(){
        this.getImgInfo();
        this.getThumImg();
    },
    methods:{
        getImgInfo(){
            this.$http
            .get(`http://vue.studyit.io/api/getimageInfo/${this.$route.params.id}`)
            .then(res => {
                console.log(res)
                if(res.data.status === 0){
                    this.info = res.data.message[0];
                }
                
            })
        },
        getThumImg(){
            this.$http
            .get(`http://vue.studyit.io/api/getthumimages/${this.$route.params.id}`)
            .then(res => {
                console.log(res)
                if(res.data.status === 0){
                    this.imgInfo = res.data.message;
                    this.imgInfo = this.imgInfo.map(element => ({
                        src:element.src,
                        w: 600,
                        h: 400
                    }));
                }
            })
        }
    },
    components:{Comment}
}
</script>

<style lang="scss">
.photo-info {
  padding-left: 3px;
  padding-right: 3px;

  .thumb-img {
    border-top: 1px solid #ccc;

    img {
      margin: 9px;
      box-shadow: 0 0 15px #ccc;
    }
  }

  .title {
    font-size: 18px;
    color: #26a2ff;
    text-align: center;
  }

  .mui-ellipsis {
    display: flex;
    justify-content: space-between;
    padding: 0 3px;
  }

  .content {
    font-size: 14px;
    line-height: 28px;
    padding-top: 20px;
  }
}
</style>
