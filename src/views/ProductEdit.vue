<template>
  <div>
    <go-back></go-back>
    <h1>Editar Produto</h1>
    <form @submit="editProduct">
      <div class="field">
        <label>Nome do Produto</label>
        <input v-model="product.nome" type="text" />
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

      <input type="submit" class="button" value="Concluir" />
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import GoBack from '../components/GoBack.vue'

export default {
  props: ['id'],
  computed: {
    ...mapState({
      product: state => state.product.product,
      brands: state => state.product.brands
    })
  },
  created() {
    this.fetchProduct(this.id)
    this.$store
      .dispatch('product/fetchAllBrands')
      .then(response => console.log('response data: ' + response.data))
      .catch(error => console.log(error.response))
  },
  methods: {
    editProduct() {
      this.$store
        .dispatch('product/editProduct', this.product)
        .then(() => {
          this.$router.push({ name: 'product-list' })
        })
        .catch(error => console.log(error.response))
    },
    ...mapActions('product', ['fetchProduct'])
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
