<script setup>
import { useSongStore } from '../store/songStore.js'
import { storeToRefs } from "pinia";
import PlayerImage from './Player/PlayerImage.vue';
import PlayerProgressBar from './Player/PlayerProgressBar.vue';

const songStore = useSongStore()
const {currentSong} = storeToRefs(songStore)



</script>

<template>
	<div class="container">
		<PlayerImage :cover=currentSong.cover :artist=currentSong.artist />
		<PlayerProgressBar :audio="currentSong.audio" :color="currentSong.color" />
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