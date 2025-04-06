import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Import mock product data
import productData from './products.js'

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    loading: false,
    checkoutInfo: null
  },
  getters: {
    allProducts: state => state.products,
    featuredProducts: state => state.products.filter(product => product.featured),
    relatedProducts: state => productId => state.products.filter(product => product.id !== productId).slice(0, 4),
    productById: state => id => state.products.find(product => product.id === id),
    cartItems: state => state.cart,
    cartTotal: state => {
      return state.cart.reduce((total, item) => {
        return total + (item.salePrice || item.price) * item.quantity
      }, 0)
    },
    cartItemCount: state => state.cart.reduce((count, item) => count + item.quantity, 0),
    isLoading: state => state.loading
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    ADD_TO_CART(state, { product, quantity }) {
      const existingItem = state.cart.find(item => item.id === product.id)

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.cart.push({
          ...product,
          quantity
        })
      }

      // Save cart to localStorage
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    UPDATE_CART_ITEM_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    CLEAR_CART(state) {
      state.cart = []
      localStorage.removeItem('cart')
    },
    SET_LOADING(state, value) {
      state.loading = value
    },
    LOAD_CART_FROM_STORAGE(state) {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        state.cart = JSON.parse(savedCart)
      }
    },
    SAVE_CHECKOUT_INFO(state, info) {
      state.checkoutInfo = info
      localStorage.setItem('checkoutInfo', JSON.stringify(info))
    }
  },
  actions: {
    loadProducts({ commit }) {
      commit('SET_LOADING', true)

      // Simulate API call with setTimeout and return a Promise
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('SET_PRODUCTS', productData)
          commit('SET_LOADING', false)
          resolve()
        }, 500)
      })
    },
    addToCart({ commit }, { product, quantity = 1 }) {
      commit('ADD_TO_CART', { product, quantity })
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
    },
    updateCartItemQuantity({ commit }, { productId, quantity }) {
      commit('UPDATE_CART_ITEM_QUANTITY', { productId, quantity })
    },
    clearCart({ commit }) {
      commit('CLEAR_CART')
    },
    initializeStore({ commit }) {
      commit('LOAD_CART_FROM_STORAGE')
    },
    saveCheckoutInfo({ commit }, info) {
      commit('SAVE_CHECKOUT_INFO', info)
    }
  }
})
