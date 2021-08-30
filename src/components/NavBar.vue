<template>
  <div id="nav" class="nav">
    <span class="title">Sistema</span>
    <nav>
      <router-link class="button" :to="{ name: 'brand-list' }"
        >Marcas</router-link
      >
      |
      <router-link class="button" :to="{ name: 'product-list' }"
        >Produtos</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}

.button:hover {
  font-weight: bold;
  color: #00203fff;
}
</style>
