<script setup>
import ListagemLivros from '@/components/ListagemMovie.vue'

</script>

<template>
  <div class="container-geral">
    <ListagemLivros />

  </div>
</template>

<style scoped>
.container-geral {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  /* display: flex;
  justify-content: space-between; */
  flex-direction: column;
  color: #fff;
}

</style>
