<script setup>
import {ref, watch} from 'vue'
import { useSongStore } from '../store/songStore.js'
import { storeToRefs } from "pinia";
import PlayerImage from './Player/PlayerImage.vue';
import PlayerProgressBar from './Player/PlayerProgressBar.vue';
import PlayerControl from './Player/PlayerControl.vue';

const songStore = useSongStore()
const {currentSong } = storeToRefs(songStore)
const audioRef =ref()

function timeListener(e){
	currentSong.value.currentTime = Math.floor( e.target.currentTime) 
}

function endSongListener(e){
	currentSong.value.isPlaying = false
}



</script>

<template>
	<div class="container">
		<PlayerImage />
		<PlayerProgressBar  />
		<PlayerControl  />
		<audio 
		:src="currentSong.audio" 
		:ref="(el) => { currentSong.audioRef = el }"  
		@canplay="(e)=>{currentSong.duration = Math.floor(e.target.duration)}"
		@timeupdate =" e =>timeListener(e)"
		@ended=" e=>endSongListener(e)"

		></audio>
	</div>
</template>

<style scoped>

.container{
	align-self: flex-end;
	display: flex;
	flex-direction: column;
	margin-left: 23vw;
	width: 100vw;
	justify-content: space-around;
	align-items: center;
}

</style>