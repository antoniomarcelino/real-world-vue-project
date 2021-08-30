<template>
  <div>
    <div class="brand-header">
      <go-back></go-back>

      <h1 class="title">{{ brandID }}</h1>
      <h2 class="title">{{ brand.nome }}</h2>
      <p>Descrição marca?</p>
      <div class="buttons">
        <router-link :to="{ name: 'brand-edit' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="green"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
            />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        </router-link>

        <a href="#" @click.prevent="confirmDeleteBrand" class="btn btn-danger">
          <span class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="red"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </span>
        </a>
      </div>
      <div v-if="confirmDelete">
        <h4>Deseja realmente deletar?</h4>

        <input
          type="submit"
          class="buttonDelete"
          @click.prevent="deleteBrand"
          value="Excluir"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import GoBack from '../components/GoBack.vue'

export default {
  props: ['id'],
  data() {
    return {
      confirmDelete: false,
      idBrandDelete: 0
    }
  },
  computed: {
    brandID() {
      return this.brand.id + 1
    },
    ...mapState({
      brand: state => state.brand.brand
    })
  },
  created() {
    this.fetchBrand(this.id)
  },
  methods: {
    confirmDeleteBrand() {
      this.confirmDelete = true
      this.idBrandDelete = this.brand.id
    },
    deleteBrand() {
      this.$store
        .dispatch('brand/deleteBrand', this.idBrandDelete)
        .then(this.$router.push({ name: 'brand-list' }))
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
.brand-show-card {
  padding: 20px;
}
.brand-header > .title {
  margin: 0;
}
.title {
  margin-bottom: 1px;
}

.icon {
  margin-left: 20px;
}

.buttonDelete {
  background: linear-gradient(-90deg, #cc1d1d, #ecb92b);
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
  padding-left: 25px;
  border: 0.8px black;
  cursor: pointer;
}

.button-text:hover {
  font-weight: bold;
  color: #00203fff;
}
</style>
