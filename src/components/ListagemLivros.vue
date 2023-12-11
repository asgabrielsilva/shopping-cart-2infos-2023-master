<script setup>
import { livros } from '@/_data/livros.js'
import { adicionarAoCarrinho } from '@/_data/carrinho.js'
import MeuCarrinho from '@/components/MeuCarrinho.vue'
import CardLivro from '@/components/CardLivro.vue'

</script>

<template>
  
  
  <MeuCarrinho />
  <div class="listagem-livros">
    <card-livro
      v-for="livro in livros"
      v-bind:key="livro.id"
      v-bind:livro="livro"
      @adicionarAoCarrinho="adicionarAoCarrinho"
    />
  </div>
</template>

<style scoped>
.listagem-livros {
  display: flex;
  flex-wrap: wrap;
}
</style>
