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
    console.log('im here: ' + brand.id)
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
