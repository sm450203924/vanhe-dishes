import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cart = JSON.parse(localStorage.getItem('cart') || '[]')

export default new Vuex.Store({
  state: {
    cart: cart
  },
  mutations: {
    addToCart (state, foodInfo) {
      let isExist = false
      state.cart.some(item => {
        if (item.foodID === foodInfo.foodID) {
          item.quantity += parseInt(foodInfo.quantity)
          isExist = true
          return true
        }
      })
      if (!isExist) {
        state.cart.push(foodInfo)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateCartInfo (state, foodInfo) {
      state.cart.some(item => {
        if (item.foodID === foodInfo.foodID) {
          item.quantity = parseInt(foodInfo.quantity)
          return true
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeFromCart (state, id) {
      state.cart.some((item, i) => {
        if (item.foodID === id) {
          state.cart.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateCartSelected (state, info) {
      state.cart.some(item => {
        if (item.foodID === info.foodID) {
          item.isSelected = info.isSelected
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    check(state){
      state.cart.splice(0)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  actions: {

  },
  getters: {
    getAllQuantity (state) {
      let quantity = 0
      state.cart.forEach(item => {
        quantity += item.quantity
      })
      return quantity
    },
    getFoodQuantityAndTotalPrice (state) {
      let obj = {
        quantity: 0, // 勾选的数量
        totalPrice: 0 // 勾选的总价
      }
      state.cart.forEach(item => {
        if (item.isSelected) {
          obj.quantity += item.quantity
          obj.totalPrice += item.price * item.quantity
        }
      })
      return obj
    }
  }
})
