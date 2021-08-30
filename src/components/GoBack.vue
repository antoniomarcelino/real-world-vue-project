<template>
  <span class="go-back">
    <input type="submit" class="button" @click="goBack" value="Voltar" />
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
  margin-bottom: 2rem;
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
