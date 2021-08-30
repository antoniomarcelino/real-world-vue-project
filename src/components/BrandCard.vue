<template>
  <router-link
    class="brand-link"
    :to="{ name: 'brand-show', params: { id: brand.id } }"
  >
    <div class="brand-card -shadow">
      <div class="container">
        <div class="row">
          <h4 class="title">{{ brandID }} - {{ brand.nome }}</h4>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    brand: Object
  },
  computed: {
    brandID() {
      return this.brand.id + 1
    }
  }
}
</script>

<style scoped>
.brand-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.brand-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.brand-card > .title {
  margin: 0;
}
.brand-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
