<template>
  <div>
    <go-back></go-back>
    <h1>Editar Marca</h1>
    <form @submit="editBrand">
      <div class="field">
        <label>Nome da Marca</label>
        <input v-model="brand.nome" type="text" />
      </div>
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
      brand: state => state.brand.brand
    })
  },
  created() {
    this.fetchBrand(this.id)
  },
  methods: {
    editBrand() {
      this.$store
        .dispatch('brand/editBrand', this.brand)
        .then(() => {
          this.$router.push({ name: 'brand-list' })
        })
        .catch(error => console.log(error.response))
    },
    ...mapActions('brand', ['fetchBrand'])
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
