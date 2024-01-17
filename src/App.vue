<script setup>
import chillHop from './data.js'
import Player from './components/player.vue';
import Library from '../src/components/library.vue' ;
import { useSongStore } from '../src/store/songStore.js'
import { storeToRefs } from "pinia";

const { songs, currentSong } = storeToRefs( useSongStore())
songs.value = chillHop()
currentSong.value = songs.value[0]

</script>

<template>
  <Library />
  <Player />
</template>

