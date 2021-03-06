import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  deleteProduct(id) {
    return apiClient.delete('/produtos/' + id)
  },
  editProduct(product) {
    return apiClient.put('/produtos/' + product.id, product)
  },
  postProduct(product) {
    return apiClient.post('/produtos', product)
  },
  getProducts(perPage, page) {
    return apiClient.get('/produtos?_limit=' + perPage + '&_page=' + page)
  },
  getProduct(id) {
    return apiClient.get('/produtos/' + id)
  },
  getAllBrands() {
    return apiClient.get('/marcas')
  }
}

/*
#### ALTERNATIVAMENTE USAR ####

...

const apiClient = axios.create({
  baseURL: `https://softmaxapi.com:6363/api`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  deleteProduct(id) {
    return apiClient.delete('/Produto/delete/' + id)
  },
  editProduct(product) {
    return apiClient.put('/Produto/update/' + product.id, product)
  },
  postProduct(product) {
    return apiClient.post('/Produto/store/', product)
  },
  getProducts(perPage, page) {
    return apiClient.get('/Produto?_limit=' + perPage + '&_page=' + page)
  },
  getProduct(id) {
    return apiClient.get('/Produto/' + id)
  },
  getAllBrands() {
    return apiClient.get('/Marca/')
  }
}
*/
