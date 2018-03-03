<template>
  <div class="num-box">
    <button type="button" class="num-btn num-btn-minus" @click="plus">-</button> 
    <input type="number" class="num-input-numbox" v-model="num" @change="numChange">
    <button type="button" class="num-btn num-btn-plus" @click="minus">+</button>
    
  </div>
</template>

<script>
export default {
    props:['max','value'],
    data(){
        return {
            num:this.value
        }
    },
    methods:{
        plus(){
            if(this.num <= 1){
                return;
            }
            this.num--;
            this.$emit('input',this.num);
        },
        minus(){
            if(this.num >= this.max){
                return;
            }
            this.num++;
            this.$emit('input',this.num);
        },
        numChange(){
            if(this.num > this.max){
                this.num = this.max;
            }
            if(this.num < 1){
                this.num = 1;
            }
            this.$emit('input',+this.num);
        }
    }
}
</script>

<style scoped lang="scss">
.num-box {
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 120px;
  height: 25px;
  padding: 0 40px 0 40px;
  vertical-align: top;
  vertical-align: middle;
  border: solid 1px #bbb;
  border-radius: 3px;
  background-color: #efeff4;

  [disabled] {
    color: #c0c0c0;
  }

  .num-btn {
    font-size: 18px;
    font-weight: normal;
    line-height: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 40px;
    height: 100%;
    padding: 0;
    color: #555;
    border: none;
    border-radius: 0;
    background-color: #f9f9f9;
  }

  .num-btn-minus {
    left: 0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .num-btn-plus {
    right: 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .num-input-numbox {
    display: inline-block;
    overflow: hidden;
    width: 100% !important;
    height: 100%;
    margin: 0;
    padding: 0 3px !important;
    text-align: center;
    text-overflow: ellipsis;
    word-break: normal;
    border: none !important;
    border-right: solid 1px #ccc !important;
    border-left: solid 1px #ccc !important;
    border-radius: 0 !important;
  }
}
</style>
