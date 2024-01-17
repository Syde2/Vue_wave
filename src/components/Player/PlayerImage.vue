<script setup>
import { useSongStore } from '../../store/songStore.js'
import { storeToRefs } from "pinia"

const songStore = useSongStore()
const {currentSong}= storeToRefs(songStore)





</script>


<template>
		<img :src=currentSong.cover   width="300px" height="300px" 
		:class="{ rotateSong: currentSong.isPlaying }"  />
    <h2>{{ currentSong.name }}</h2>
    <span>
      <pre>{{ currentSong.artist }}</pre>
    </span>
</template>

<style scoped>

img{
	border-radius: 50%;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotateSong {
  animation: rotate 20s linear forwards infinite;
}


</style>