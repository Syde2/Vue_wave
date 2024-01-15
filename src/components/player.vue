<script setup>
import {ref} from 'vue'
import { useSongStore } from '../store/songStore.js'
import { storeToRefs } from "pinia";
import PlayerImage from './Player/PlayerImage.vue';
import PlayerProgressBar from './Player/PlayerProgressBar.vue';
import PlayerControl from './Player/PlayerControl.vue';

const songStore = useSongStore()
const {currentSong } = storeToRefs(songStore)
const audioRef =ref()

const handleTimeUpdate =(e)=>{
	currentSong.value.timeStamp = Math.floor( e.timeStamp /1000)
}


</script>

<template>
	<div class="container">
		<PlayerImage :cover=currentSong.cover :artist=currentSong.artist />
		<PlayerControl :audioRef="audioRef" />
		<PlayerProgressBar  />
		<audio :src="currentSong.audio" ref='audioRef' @timeupdate="handleTimeUpdate"> </audio>
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