<script setup>
import { carrinho, removerItemCarrinho, limparCarrinho } from '@/_data/carrinho.js'
import MButton from './MButton.vue'
import CarrinhoVazio from './CarrinhoVazio.vue';

</script>

<template>
  <div class="carrinho">
    <h2>Meu carrinho</h2>
    <div class="wrap-carrinho">
      <carrinho-vazio v-if="carrinho.itens.length === 0" />
      <div v-else>
        <div class="item-carrinho" v-for="(item, index) in carrinho.itens" :key="index">
          <div class="info-livro">
            <div class="imagem-livro">
              <img :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`" :alt="item.title" class="icon-capa-livro" />
            </div>
            <div class="detalhes-livro">
              <div>
                <p>{{ item.title }}</p>
              </div>
              <div>
                <button @click="removerItemCarrinho(item)">&#128465;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <m-button class="" text="Limpar carrinho" @click="limparCarrinho()"/>
      <p class="carrinho-total">Total: {{ carrinho.total }}</p>
    </div>
  </div>
</template>

<style scoped>

.carrinho-total {
  border-radius: 8px;
  background: #fff;
  padding: 4px;

}
.wrap-carrinho .carrinho-total {
  position: fixed;
  bottom: 3%;
  right: 3%;
  font-size: 1.5rem;
  font-weight: bold;
  color: blueviolet;
}

.item-carrinho .info-livro {
  display: flex;
  margin-bottom: 10px;
}
.detalhes-livro {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.detalhes-livro p {
  margin: 0;
}
.detalhes-livro div {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.detalhes-livro input[type='number'] {
  width: 50px;
  text-align: center;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  margin-left: 10px;
}

.detalhes-livro button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: black;
  padding: 0;
  margin: 0;
}

.info-livro-preco {
  margin-left: auto;
}
.icon-capa-livro {
  width: 30px;
  margin-right: 10px;
}
</style>
