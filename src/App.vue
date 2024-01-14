<script setup>
import chillHop from './data.js'
import Player from './components/player.vue';
import Library from '../src/components/Library.vue'
import { useSongStore } from '../src/store/songStore.js';
import { storeToRefs } from "pinia";


const store = useSongStore()
const {songs, currentSong} = storeToRefs(store)
songs.value = chillHop()
currentSong.value = songs.value[0]



</script>

<template>
  <div class="container">
    <Library />
    <Player />
  </div>
</template>

<style scoped>
.container{
  min-height: 100vh;
  display: flex; 
}
</style>
