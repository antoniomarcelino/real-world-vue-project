<template>
  <div>
    <go-back></go-back>
    <h1>Cadastrar Marca</h1>
    <form @submit="createBrand">
      <div class="field">
        <label>Nome da Marca</label>
        <input
          v-model="brand.nome"
          type="text"
          placeholder="Ex.: Nike, Samsung, etc."
        />
      </div>
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
      brand: this.newBrand()
    }
  },
  computed: {
    ...mapState(['brands', 'totalBrands'])
  },
  methods: {
    createBrand() {
      this.$store
        .dispatch('brand/createBrand', this.brand)
        .then(() => {
          this.$router.push({ name: 'brand-list' })
          this.brand = this.newBrand()
        })
        .catch(error => console.log(error.response))
    },
    newBrand() {
      //const id = Math.floor(Math.random() * 10000000)
      let id = this.totalBrands + 1
      return {
        id: id,
        nome: ''
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
