<template>
  <router-link
    class="product-link"
    :to="{ name: 'product-show', params: { id: product.id } }"
  >
    <div class="product-card -shadow">
      <div class="container">
        <div class="row">
          <h4 class="title">{{ productID }} - {{ product.nome }}</h4>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    product: Object
  },
  computed: {
    productID() {
      return this.product.id + 1
    }
  }
}
</script>

<style scoped>
.product-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.product-card > .title {
  margin: 0;
}
.product-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
