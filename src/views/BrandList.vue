<template>
  <div>
    <router-link class="cadastrarButton" :to="{ name: 'brand-create' }"
      >Cadastrar Novo</router-link
    >
    <div v-if="brand.totalBrands > 0" class="brands">
      <BrandCard v-for="brand in brand.brands" :key="brand.id" :brand="brand" />
    </div>
    <div v-else>
      <h4>
        Nenhuma marca cadastrada.
      </h4>
    </div>

    <span
      >Total: {{ brand.totalBrands }}
      {{
        brand.totalBrands > 1
          ? (totalBrandsText = 'marcas')
          : (totalBrandsText = 'marca')
      }}</span
    >
    <div class="buttons">
      <div v-if="page != 1">
        <router-link
          class="button"
          :to="{ name: 'brand-list', query: { page: page - 1 } }"
          rel="prev"
        >
          Anterior
        </router-link>
      </div>
      <div v-if="brand.totalBrands > this.page * 4">
        <router-link
          class="button"
          :to="{ name: 'brand-list', query: { page: page + 1 } }"
          rel="next"
        >
          Próximo
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BrandCard from '@/components/BrandCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    BrandCard
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['brand', 'totalBrands'])
  },
  created() {
    this.$store.dispatch('brand/fetchBrands', { perPage: 4, page: this.page })
  },
  data() {
    return {
      totalBrandsText: ''
    }
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

.brands {
  margin-top: 20px;
}

.cadastrarButton:hover {
  font-weight: bold;
  color: #00203fff;
}
</style>
