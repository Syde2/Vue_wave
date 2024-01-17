<script setup>
import { useSongStore } from '../../store/songStore.js'
import { storeToRefs } from "pinia"

const songStore = useSongStore()
const {currentSong}= storeToRefs(songStore)


const handlePlay =()=>{
	songStore.playCurrentSong()
	currentSong.value.audioRef.play()
	currentSong.value.isPaused = false
}
const handlePause = ()=>{
	songStore.pauseCurrentSong()
	currentSong.value.audioRef.pause()
	currentSong.value.isPaused = true

}

const handleForward=()=>{
currentSong.value.audioRef.currentTime = currentSong.value.currentTime + 30
}

const handleRewind = ()=>{
	currentSong.value.audioRef.currentTime = currentSong.value.currentTime - 30

}

</script>


<template>
	<div class="control-container">
		<span @click=handleRewind class="material-icons-round medium">fast_rewind</span>

		<span v-if="currentSong.isPlaying"  @click="handlePause" class="material-icons-round ">pause</span>
		<span v-else  @click="handlePlay"  class="material-icons-round">play_arrow</span>

		<span @click="handleForward" class="material-icons-round medium">fast_forward</span>
	</div>
</template>


<style scoped>
.control-container{
	width: 300px;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	
}
.material-icons-round{
	display: block;
	font-size:5rem;
	color: rgb(103, 103, 103);
	cursor: pointer;
}.medium{
	font-size:3rem;

}
</style>