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
  deleteBrand(id) {
    return apiClient.delete('/marcas/' + id)
  },
  editBrand(brand) {
    return apiClient.put('/marcas/' + brand.id, brand)
  },
  postBrand(brand) {
    return apiClient.post('/marcas', brand)
  },
  getBrands(perPage, page) {
    return apiClient.get('/marcas?_limit=' + perPage + '&_page=' + page)
  },
  getBrand(id) {
    return apiClient.get('/marcas/' + id)
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
  deleteBrand(id) {
    return apiClient.delete('/Marca/delete/' + id)
  },
  editBrand(brand) {
    return apiClient.put('/Marca/update/' + brand.id, brand)
  },
  postBrand(brand) {
    return apiClient.post('/Marca/store/', brand)
  },
  getBrands(perPage, page) {
    return apiClient.get('/Marca?_limit=' + perPage + '&_page=' + page)
  },
  getBrand(id) {
    return apiClient.get('/Marca/' + id)
  }
}
*/
