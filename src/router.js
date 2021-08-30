import Vue from 'vue'
import Router from 'vue-router'
import BrandCreate from './views/BrandCreate.vue'
import BrandList from './views/BrandList.vue'
import BrandShow from './views/BrandShow.vue'
import BrandEdit from './views/BrandEdit.vue'
import ProductCreate from './views/ProductCreate.vue'
import ProductList from './views/ProductList.vue'
import ProductShow from './views/ProductShow.vue'
import ProductEdit from './views/ProductEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Marcas/index',
      name: 'brand-list',
      component: BrandList
    },
    {
      path: '/Marca/:id',
      name: 'brand-show',
      component: BrandShow,
      props: true
    },
    {
      path: '/Marca/store',
      name: 'brand-create',
      component: BrandCreate
    },
    {
      path: '/Marca/:id/update',
      name: 'brand-edit',
      component: BrandEdit,
      props: true
    },
    {
      path: '/Produtos/index',
      name: 'product-list',
      component: ProductList
    },
    {
      path: '/Produto/:id',
      name: 'product-show',
      component: ProductShow,
      props: true
    },
    {
      path: '/Produto/store',
      name: 'product-create',
      component: ProductCreate
    },
    {
      path: '/Produto/:id/update',
      name: 'product-edit',
      component: ProductEdit,
      props: true
    }
  ]
})
