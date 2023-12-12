import { ref } from 'vue'

const carrinho = ref({
    itens: []
  })
  
  
  function removerItemCarrinho(item) {
    const index = carrinho.value.itens.findIndex((i) => i.id === item.id)
    carrinho.value.itens.splice(index, 1)
  }
  
  function adicionarAoCarrinhoMovie(movie) {
    const index = carrinho.value.itens.findIndex((item) => item.id === movie.id)
    if (index === -1) {
      carrinho.value.itens.push({
        ...movie,
        quantidade: 1
      })
    }
  }
  function adicionarAoCarrinhoAnime(anime) {
    const index = carrinho.value.itens.findIndex((item) => item.id === anime.id)
    if (index === -1) {
      carrinho.value.itens.push({
        ...anime,
        quantidade: 1
      })
    }
  }

  function limparCarrinho() {
    carrinho.value.itens = [];
  }
  export { carrinho, adicionarAoCarrinhoMovie, adicionarAoCarrinhoAnime, removerItemCarrinho, limparCarrinho }