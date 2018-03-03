<template>
  <div class="goods-list">
    <ul>
      <li class="goods-item" v-for="item in goodsList" :key="item.id" @click="goGoodsDetail(item.id)">
        <img :src="item.img_url" alt="">
        <h2 class="txt_cut">{{item.title}}</h2>
        <div>
          <span class="price-cur">￥{{item.cell_price}}</span>
          <span class="price-prev">￥{{item.market_price}}</span>
        </div>
        <p>
          <span>热卖中</span>
          <span>剩余{{item.stock_quantity}}件</span>
        </p>
      </li>

    </ul>

    <!-- 加载更多 -->
    <mt-button plain size="large" type="primary" @click="getMore" v-if="isShow">加载更多</mt-button>
    <p v-else class="more">亲，没有更多商品了~</p>
  </div>
</template>

<script>
export default {
  data(){
      return {
          goodsList:[],
          pageIndex:1,
          isShow: true
      }
  },
  created(){
      this.getGoodsList();
  },
  methods:{
      getGoodsList(){
        this.$http
        .get(`http://vue.studyit.io/api/getgoods?pageindex=${this.pageIndex}`)
        .then(res => {
            console.log(res)
            if(res.data.status === 0){
                this.goodsList = [...this.goodsList,...res.data.message];
                if(res.data.message.length < 10){
                    this.isShow = false;
                }
            }
        })
      },
      getMore(){
        this.pageIndex++;
        this.getGoodsList();
      },
      goGoodsDetail(id){
          this.$router.push(`/home/goodsinfo/${id}`)
      }
  }
}
</script>

<style lang="scss">
  .goods-list {
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .goods-item {
      width: 48%;
      margin: 1%;
      padding: 3px;
      border: 1px solid #ccc;
      box-shadow: 0 0 10px #ccc;
    
      h2 {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      

      div {
        font-size: 14px;
        margin-top: 5px;

        .price-cur {
          color: #f00;
          margin-right: 10px;
        }
        .price-prev {
          text-decoration: line-through;
          color: #ccc;
        }
      }

      img {
        width: 100%;
      }

      p {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0 3px;
        color: #ccc;
      }
    }
  }
  .more {
      text-align: center;
  }
</style>
