import BrandService from '@/services/BrandService.js'

export const namespaced = true

export const state = {
  totalBrands: 0,
  brands: [],
  brand: {}
}

export const mutations = {
  ADD_BRAND(state, brand) {
    state.brands.push(brand)
  },
  SET_BRANDS(state, brands) {
    state.brands = brands
  },
  SET_BRAND(state, brand) {
    state.brand = brand
  },
  SET_TOTAL_BRANDS(state, totalBrands) {
    state.totalBrands = totalBrands
  },
  EDIT_BRAND(state, brand) {
    var index = state.brands.find(b => b.id === brand.id)
    if (index !== -1) {
      state.brands[index] = brand
    }
    state.brands = [...state.brands]
  },
  DELETE_BRAND(state, id) {
    state.brands.splice(id, 1)
  }
}

export const actions = {
  deleteBrand({ commit }, id) {
    BrandService.deleteBrand(id).then(() => commit('DELETE_BRAND', id))
  },
  editBrand({ commit }, brand) {
    BrandService.editBrand(brand).then(() => commit('EDIT_BRAND', brand))
  },
  createBrand({ commit }, brand) {
    BrandService.postBrand(brand).then(() => commit('ADD_BRAND', brand))
  },
  fetchBrands({ commit }, { perPage, page }) {
    BrandService.getBrands(perPage, page)
      .then(response => {
        commit('SET_BRANDS', response.data)
        commit('SET_TOTAL_BRANDS', response.headers['x-total-count'])
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  fetchBrand({ commit, getters }, id) {
    var brand = getters.getBrandById(id)
    if (brand) {
      commit('SET_BRAND', brand)
    } else {
      BrandService.getBrand(id)
        .then(response => {
          commit('SET_BRAND', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  }
}

export const getters = {
  getBrandById: state => id => {
    return state.brands.find(brand => brand.id === id)
  }
}
