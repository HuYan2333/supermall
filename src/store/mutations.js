import {ADD_COUNTER,ADD_TO_CART} from './mutation-types'
export default {
  //让mutation进行跟踪
  [ADD_COUNTER](state,payload){
    payload.count++
  },
  [ADD_TO_CART](state,payload){
    payload.checked = true//购物车商品是否选中
    state.cartList.push(payload)
  }
}
