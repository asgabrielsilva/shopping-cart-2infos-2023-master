<script setup>
import ListagemLivros from '@/components/ListagemLivros.vue'

</script>

<template>
  <h1>Minha livraria</h1>
  <div class="container-geral">
    <ListagemLivros />

  </div>
</template>

<style scoped>
.container-geral {
  /* display: flex;
  justify-content: space-between; */
  display: block;
  position: absolute;
  flex-direction: column;
  color: #fff;
}

</style>
