<template>
<div>
    <div class="news-details">
      <div class="news-header">
        <h3 class="news-title">{{info.title}}</h3>
        <p class="news-des">
            <span>发表时间：{{info.add_time | date('YYYY-MM-DD HH:mm:ss')}}</span>
            <span>点击次数：{{info.click}}次</span>
        </p>
      </div>
      <div v-html="info.content" class="news-content"></div>
      <Comment :CommentId="$route.params.id"></Comment>
      
  </div>
</div>
  
</template>

<script>
import Comment from '../common/Comment.vue';
export default {
    data () {
        return {
            info:{},
        }
    },
    created(){
        this.getNews();
    },
    methods:{
        getNews(){
            this.$http
            .get(`http://vue.studyit.io/api/getnew/${this.$route.params.id}`)
            .then(res => {
                console.log(res)
                if(res.data.status === 0){
                    this.info = res.data.message[0]
                }
            })
        }
    },
    components:{Comment}
}
</script>

<style lang="scss">
    .news-details{
        padding: 0 5px;
        .news-header,.news-content{
            border-bottom: 1px solid #ccc;
        }
        .news-title{
            font-size: 18px;
        }
        .news-des {
            display: flex;
            justify-content: space-between;
            color: #26a2ff;
        }
        
    }
    
</style>
