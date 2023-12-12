<script setup>
import MButton from './MButton.vue'
import CartPlus from 'vue-material-design-icons/CartPlus.vue'
import ShareVariant from 'vue-material-design-icons/ShareVariant.vue'
import api from '@/plugins/axios'
import { ref, onMounted } from 'vue'

const movies = ref([]);

onMounted(async () => {
   const response = await api.get('discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16&with_keywords=anime&with_original_language=ja')
   movies.value = response.data.results
});
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')

const props = defineProps({
  livro: Object
})
const emit = defineEmits(['adicionarAoCarrinho'])

//function formatarPreco(preco) {
 // return 'R$ ' + preco.toFixed(2).replace('.', ',')}
//
</script>

<template>
  


  
  <div class="carrousel-movie">
    <div v-for="movie in movies" :key="movie.id" class="own-carrousel own-theme">
   <div class="movie-list">
 <div class="movie-card">
  
   <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
   <div class="movie-details">
     <p class="movie-title">{{ movie.title }}</p>
     <p class="movie-release-date">{{ formatDate(movie.release_date) }}</p>
     <p class="movie-genres">{{ movie.genre }}</p>
   </div>
  
 </div>
</div>
    <div class="card-buttons-livros">
      <m-button class="secundario" @click="emit('adicionarAoCarrinho', props.livro)">
        <cart-plus /> Adicionar ao carrinho
      </m-button>
      <m-button class="sucesso"> <share-variant /> </m-button>
    </div>
  </div>
</div>



</template>

<style scoped>

.carrousel-movie{
  margin: 10px;
  padding: 10px;
  border: 3px solid #fff;
  border-radius: 9px;
  background: #4e4e4e;
  box-shadow: 10vh;
  flex-wrap: wrap;
  
}

.own-carrousel{
  margin: 20px;
}
.item img{
  display: flex;
  justify-content: center;
  align-items: center;


}
h3{
  color: #fff;
}
.baseboard a {
    color: var(--color-text-primary);
}
/* fim da estilização do footer */

/* responsivo */
@media screen and (max-width: 700px) {
    header .container {
        display: flex;
        flex-direction: column;
    }

    .button {
        margin-top: 5px;
        width: 300px;
    }
}

@media screen and (min-width: 1000px) {
    .description {
        width: 50%;
    }
}
.box-movie {
    height: 100%;
    width: 100%;
    display: block;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
}

.carrousel-movie {
  display: flex;
    margin: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.carrousel-movie img {
  display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

/* início da estilização do footer */
.baseboard {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 15px;    
    margin-top: 25px;
    margin-bottom: 15px;
}

.main-movie {
    font-size: 16px;
    background: linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.50)100%), url('/src/assets/img/capa-house.jpg');
    height: 400px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.main-movie .description {
    margin-top: 10px;
    margin-bottom: 40px;
}

.main-movie .title-movie {
    margin-top: 15%;
    font-size: 40px;
}

.main-movie .container {
    width: 70%;
}

.button {
    background-color: rgba(0,0,0,0.50);
    border: none;
    color: var(--color-text-primary);
    padding: 15px 30px;
    margin-right: 15px;
    font-size: 12px;
    cursor: pointer;
    transition: 0.3s ease all;
}

.button:hover {
    background-color: var(--color-background-button);
    color: var(--color-text-button);
}

.button i {
    margin-right: 8px;
}

.container {
    margin-left: 20px;
}

.card-livro {
  margin: 5px 10px;
  padding: 10px;
  background-color: beige;
  border-radius: 10px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.wrap-livro {
  display: flex;
  justify-content: center;
  flex-direction:row ;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  width: 180px;
  height: 270px;
}
.capa-livro {
  width: 90%;
  max-height: 100%;
}

.card-livro p {
  margin: 0;
}

.card-livro .titulo-livro {
  font-weight: bold;
}
</style>
