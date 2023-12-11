<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'

import useGenreStore from '@/stores/genre';
import Loading from 'vue-loading-overlay'

const genreStore = useGenreStore();
const isLoading = ref(false);


const TVs = ref([]);

const listTv = async (genreId) => {
  genreStore.setCurrentGenreId(genreId);
  isLoading.value = true;
    const response = await api.get('discover/tv', {
        params: {
            with_genres: genreId,
            language: 'pt-BR'
        }
    });
    TVs.value = response.data.results
    isLoading.value = false;
};
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')

onMounted(async () => {
  isLoading.value = true;
  await genreStore.getAllGenres('tv');
  isLoading.value = false;
});
</script>

<template>
    <h1>Programas de TV</h1>
    <ul class="genre-list">
      <li
  v-for="genre in genreStore.genres"
  :key="genre.id"
  @click="listTv(genre.id)"
  class="genre-item"
  :class="{ active: genre.id === genreStore.currentGenreId }"
>
   {{ genre.name }} 
</li>
    </ul>
    <loading v-model:active="isLoading" is-full-page />
    <div class="movie-list">
  <div v-for="TV in TVs" :key="TV.id" class="movie-card">

    <img :src="`https://image.tmdb.org/t/p/w500${TV.poster_path}`" :alt="TV.name" />

    <div class="movie-details">
      <p class="movie-title">{{ TV.name }}</p>
      <p class="movie-release-date">{{ formatDate(TV.first_air_date) }}</p>
      <p class="movie-genres">
      <span
       v-for="genre_id in TV.genre_ids" 
      :key="genre_id" 
      @click="listTv(genre_id)"
      :class="{ active: genre_id === genreStore.currentGenreId }"
      >
    {{ genreStore.getGenreName(genre_id) }} 
  </span>
      </p>
      <p class="movie-title">{{ TV.original_name }}</p>
    </div>
    
  </div>
</div>
  </template>
  
  <style scoped>
  .genre-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    padding: 0;
  }
  
  .genre-item {
    background-color: #5d6424;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    align-self: center;
    color: #fff;
    display: flex;
    justify-content: center;
  }
  
  .genre-item:hover {
    cursor: pointer;
    background-color: #7d8a2e;
    box-shadow: 0 0 0.5rem #5d6424;
  }
  .movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.movie-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.movie-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}
.movie-details {
  padding: 0 0.5rem;
}

.movie-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}
.movie-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
}
.movie-genres span {
  background-color: #748708;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.movie-genres span:hover {
  cursor: pointer;
  background-color: #455a08;
  box-shadow: 0 0 0.5rem #748708;
}
.active {
  background-color: #67b086;
  font-weight: bolder;
}

.movie-genres span.active {
  background-color: #abc322;
  color: #000;
  font-weight: bolder;
}
  </style>