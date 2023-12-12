<script setup>
import MButton from './MButton.vue'
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
    <div v-for="movie in movies" :key="movie.id" class="own-carrousel own-theme card">
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
      <m-button style="margin-bottom: 30px;" class="secundario" @click="emit('adicionarAoCarrinho', props.livro)">
      Adicionar ao carrinho
      </m-button>
      
      
    </div>
  </div>
</div>
<div id="parallax-wrapper">
  <section>
    <div class="title">
      <hgroup>
      <h1>GUAXINIM</h1>
      <h2>sei lá uma bio</h2> 
      </hgroup>
    </div>
  </section>
  
  <section>
    <div class="p-one parallax-inner">
      <h2>PIPIPI POPOPO</h2>
    </div>
  </section>
  <section>
    <div class="content-text">
      <span class="first-letter red"></span>
      
      <div class="line-break"></div>
    </div>
  </section>
</div>


 
      <img style="margin: 100px;   box-shadow: 0 0 400px 3px rgb(215, 0, 243);" src="https://i0.wp.com/media.tenor.com/vTtc1ztmsU8AAAAC/passion-raccoon.gif?fit=960%2C960&ssl=1" alt="">



</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Arimo|Oswald"); 

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Arimo', sans-serif;
}
section:first-child{
  position: relative;
  height:100px;
}
section .title{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top:-35.5px;
  margin-left: -91.4px;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 10px;
}
.title h1,h2{
  font-family:'Oswald', sans-serif; 
  font-size:28px; 
  font-weight:400; 
  text-transform: uppercase;
}
.title h2{
  font-size:20px;
  font-weight:100;
  letter-spacing: 5px;
  margin-left: 13px;
}
.p-one{
 background-image:  linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://img.freepik.com/free-vector/mountains-cleft-view-from-bottom-night-scenery-landscape-with-high-rocks-full-moon-with-stars-glowing-peaks_107791-5585.jpg?w=1480&t=st=1702406650~exp=1702407250~hmac=ec8db35e8c62525e72304efd3283d4c7f3c5276f935e5ad5486cdd7b816c48c4); 
}
.parallax-inner{
  position:relative;
  min-height: 500px;
  background-position: top center;
  background-attachment: fixed;
  background-size: cover;
}
.parallax-inner > h2{
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 10px;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -20.5px;
  width: 100%;
  text-align: center;
}
.content-text p{
  padding: 25px 50px 25px 50px;
  font-weight: 400px;
  text-align: justify;
  line-height: 24px;
}
.first-letter{
  float: left;
  font-weight: 400;
  font-size: 84px;
  line-height: 64px;
  padding-top: 2px;
  padding-right: 8px;
  padding-left: 4px;
}
.line-break{
  border-bottom: 1px solid #bf2d33;
  width: 200px;
  margin: 0 auto;
}
.red{
  color: #5e5a58;
}
.darkgreen{
  color:#0d2100;
}
.green{
  color:#6b6837;
}
.skyblue{
  color: #5c9cbf;
}
footer{
  width: 100%;
  padding: 0 1.5rem;
}
footer > p{
  text-transform: capitalize;
  width:460px;
  margin:0 auto;
  font-size: 27px;
}
#parallax-wrapper{
  width: 100%;
}

/* media queries */
@media screen and (max-width:500px){
  .parallax-inner{
    min-height: 350px;
    background-size: cover;
  }
  footer{
    padding: 10px;
  }
  footer > p{
    width: 100%;
    font-size: 24px;
  }
}
.carrousel-movie{
 
  margin: 10px;
  padding: 10px;
  border-radius: 9px;
  box-shadow: 10vh;
  flex-wrap: nowrap; /* carrossel de animes q n funciona */
  
}

.batata{
  display: flex;
  flex-wrap: wrap-reverse;
}
.movie-title{
  color: #fff;
}


.movie-card{
  width: 320px;
  max-height: 550px;
  min-height: 530px;
}

.own-carrousel{
  margin: 20px;
}
.own-carrousel1{
  
  margin: 20px;
  width: 350px;
}

@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

:root {
  --card-height: 65vh;
  --card-width: calc(var(--card-height) / 1.5);
}


body {
  min-height: 100vh;
  background: #212534;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
}


.card {
  box-shadow: 0 0 20px 2px rgb(243, 49, 0);
  background: #191c29;
  border-radius: 6px;
  font-size: 1.5em;
  color: rgb(88 199 250 / 0%);
  cursor: pointer;
  font-family: cursive;
  z-index: 100;
  border-radius: 20px;
}
.card:hover:before, .card:hover:after {
  animation: none;
  opacity: 0;
}

a {
  color: #212534;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 2rem;
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
