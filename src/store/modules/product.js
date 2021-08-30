import ProductService from '@/services/ProductService.js'

export const namespaced = true

export const state = {
  totalProducts: 0,
  products: [],
  brands: [],
  product: {}
}

export const mutations = {
  ADD_PRODUCT(state, product) {
    state.products.push(product)
  },
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_PRODUCT(state, product) {
    state.product = product
  },
  SET_TOTAL_PRODUCTS(state, totalProducts) {
    state.totalProducts = totalProducts
  },
  EDIT_PRODUCT(state, product) {
    var index = state.products.find(prod => prod.id === product.id)
    if (index !== -1) {
      state.products[index] = product
    }
    state.products = [...state.products]
  },
  DELETE_PRODUCT(state, id) {
    state.products.splice(id, 1)
  },
  SET_ALL_BRANDS(state, brands) {
    state.brands = brands
  }
}

export const actions = {
  deleteProduct({ commit }, id) {
    ProductService.deleteProduct(id).then(() => commit('DELETE_PRODUCT', id))
  },
  editProduct({ commit }, product) {
    ProductService.editProduct(product).then(() =>
      commit('EDIT_PRODUCT', product)
    )
  },
  createProduct({ commit }, product) {
    ProductService.postProduct(product).then(() =>
      commit('ADD_PRODUCT', product)
    )
  },
  fetchProducts({ commit }, { perPage, page }) {
    ProductService.getProducts(perPage, page)
      .then(response => {
        commit('SET_PRODUCTS', response.data)
        commit('SET_TOTAL_PRODUCTS', response.headers['x-total-count'])
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  fetchProduct({ commit, getters }, id) {
    var product = getters.getProductById(id)
    if (product) {
      commit('SET_PRODUCT', product)
    } else {
      ProductService.getProduct(id)
        .then(response => {
          commit('SET_PRODUCT', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  },
  fetchAllBrands({ commit }) {
    ProductService.getAllBrands()
      .then(response => {
        commit('SET_ALL_BRANDS', response.data)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}

export const getters = {
  getProductById: state => id => {
    return state.products.find(product => product.id === id)
  },
  getBrands: state => id => {
    var index = id
    console.log(index)
    return state.brands
  }
}
