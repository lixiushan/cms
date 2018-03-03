<template>
    <div class="newscommet">
        <div class="comment-title">
            <h3>发表评论</h3>
        </div>
        <textarea cols="30" rows="5" placeholder="请输入评论内容，最多输入120字" v-model="comment"></textarea>
        <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
        <ul>
            <li v-for="(item,index) in comList" :key="index">
                <p class="user">
                    <span>第{{index+1}}楼</span>
                    <span>用户：{{item.user_name}}</span>
                    <span>发表时间：{{item.add_time | date('YYYY-MM-DD HH:mm:ss')}}</span>
                </p>
                <p class="comment-content">{{item.content}}</p>
            </li>
        </ul>
        <mt-button type="primary" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    props: ['CommentId'],
    data () {
        return {
            comList:[],
            pageIndex:1,
            comment:''
        }
    },
    created(){
        this.getComment();
    },
    methods:{
        getComment(){
            this.$http
            .get(`http://vue.studyit.io/api/getcomments/${this.CommentId}?pageindex=${this.pageIndex}`)
            .then(res => {
                console.log(res)
                if(res.data.status === 0){
                    this.comList = [...this.comList,...res.data.message];
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getComment();
        },
        addComment(){
            if(this.comment.trim() === ''){
                return;
            }
            this.$http
            .post(`http://vue.studyit.io/api/postcomment/${this.CommentId}`,`content=${this.comment}`)
            .then(res => {
                console.log(res);
                if(res.data.status === 0){
                    this.comList.unshift({
                        add_time:new Date(),
                        content:this.comment,
                        user_name:"匿名用户"
                    });
                    // this.comList.pop();
                    this.comment = '';
                }
            })
        }
    }
}
</script>

<style lang="scss">
    .newscommet{
            padding: 10px 5px;
            
            .mint-button{
                margin-bottom: 10px;
            }
            ul{
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .user{
                display: flex;
                justify-content: space-between;
                color: #000;
                padding: 5px 0;
                background-color: #eee;
            }
            .comment-content{
                color: #000;
                font-size: 12px;
                padding-left: 10px;
            }
        }
</style>
