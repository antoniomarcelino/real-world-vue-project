import Vue from 'vue'
import Vuex from 'vuex'
import * as brand from './modules/brand'
import * as product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    brand,
    product
  },
  state: {}
})
