import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const count = JSON.parse(localStorage.getItem('cart')) || [];
const store = new Vuex.Store({
    state:{
        count,
    },
    mutations:{
        add(state,payload){
            const back = state.count.find(e => {
                return e.id == payload.id
            })
            if(back){
                back.count = back.count + payload.count;
            }else{
                state.count.push(payload)
            }
            localStorage.setItem('cart',JSON.stringify(state.count));
        }
    },
    getters:{
        update(state){
            let sum = 0;
            state.count.forEach(element => {
                sum += element.count;
                console.log(element)
            });
            // console.log(sum)
            return sum;
        }
    }
    
})

export default store;