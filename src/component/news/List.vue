<template>
  <div>
      <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <router-link class="mui-navigate-right" :to="'/home/info/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h3 class="mui-ellipsis">{{item.title}}</h3>
                        <p class="news-des">
                            <span>发表时间：{{item.add_time | date('YYYY-MM-DD HH:mm:ss')}}</span>
                            <span>点击次数：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            
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
    created () {
        this.getNewsList();
    },
    methods: {
        getNewsList(){
            this.$http
            .get('http://vue.studyit.io/api/getnewslist')
            .then(res => {
                console.log(res)
                if(res.data.status === 0){
                    this.list = res.data.message;
                }
            })
        }
    }
}
</script>

<style lang="scss">
    .mui-table-view-chevron .mui-table-view-cell{
        padding-right: 52px; 
        h3 {
            font-size: 16px;
            font-weight: normal;
        }
        .news-des{
            font-size: 12px;
            color: #26a2ff;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
