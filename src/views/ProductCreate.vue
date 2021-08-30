<template>
  <div>
    <go-back></go-back>
    <h1>Cadastrar Produto</h1>
    <form @submit="createProduct">
      <div class="field">
        <label>Nome do Produto</label>
        <input
          v-model="product.nome"
          type="text"
          placeholder="Ex.: Relógio, Bolsa, Óculos"
        />
      </div>

      <div class="field">
        <label>Quantidade no Estoque</label>
        <input v-model="product.estoque" type="text" placeholder="Ex.: 100" />
      </div>

      <label>Selecione a Marca</label>
      <select v-model="product['marca-id']">
        <option
          v-for="(brand, index) in brands"
          :key="index"
          v-bind:value="brand.id"
          >{{ brand.nome }}</option
        >
      </select>

      <input type="submit" class="button" value="Enviar" />
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GoBack from '../components/GoBack.vue'

export default {
  data() {
    return {
      product: this.newProduct()
    }
  },
  computed: {
    ...mapState({
      products: state => state.product.products,
      totalProducts: state => state.product.totalProducts,
      brands: state => state.product.brands
    })
  },
  created() {
    this.$store
      .dispatch('product/fetchAllBrands')
      .then(response => console.log('response data: ' + response.data))
      .catch(error => console.log(error.response))
  },
  methods: {
    createProduct() {
      this.$store
        .dispatch('product/createProduct', this.product)
        .then(() => {
          this.$router.push({ name: 'product-list' })
          this.product = this.newProduct()
        })
        .catch(error => console.log(error.response))
    },
    newProduct() {
      let id = this.totalProducts + 1
      return {
        id: id,
        nome: '',
        estoque: '',
        ['marca-id']: 0
      }
    }
  },
  components: {
    GoBack
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}

.button {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
  padding-left: 25px;
  border: 0.8px black;
  cursor: pointer;
}
</style>
