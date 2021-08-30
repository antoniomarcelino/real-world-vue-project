<template>
  <div>
    <router-link class="cadastrarButton" :to="{ name: 'product-create' }"
      >Cadastrar Novo</router-link
    >
    <div v-if="product.totalProducts > 0" class="products">
      <ProductCard
        v-for="product in product.products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-else>
      <h4>
        Nenhum produto cadastrado.
      </h4>
    </div>

    <span
      >Total: {{ product.totalProducts }}
      {{
        product.totalProducts > 1
          ? (totalProductsText = 'produtos')
          : (totalProductsText = 'produto')
      }}
    </span>
    <div class="buttons">
      <div v-if="page != 1">
        <router-link
          class="button"
          :to="{ name: 'product-list', query: { page: page - 1 } }"
          rel="prev"
        >
          Anterior
        </router-link>
      </div>
      <div v-if="product.totalProducts > this.page * 4">
        <router-link
          class="button"
          :to="{ name: 'product-list', query: { page: page + 1 } }"
          rel="next"
        >
          Próximo
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      totalProductsText: ''
    }
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['product', 'totalProducts'])
  },
  created() {
    this.$store.dispatch('product/fetchProducts', {
      perPage: 4,
      page: this.page
    })
  }
}
</script>

<style scoped>
span {
  margin-bottom: 20px;
}

.button {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
  padding: 15px;
  border: 0.8px black;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s linear;
}

.button:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 2rem;
}

.products {
  margin-top: 20px;
}

.cadastrarButton:hover {
  font-weight: bold;
  color: #00203fff;
}
</style>
