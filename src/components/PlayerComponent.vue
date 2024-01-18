<script setup>
import { ref } from 'vue'
import { useSongStore } from '../store/songStore.js'
import { storeToRefs } from "pinia";
import PlayerImage from './Player/PlayerImage.vue';
import PlayerProgressBar from './Player/PlayerProgressBar.vue';
import PlayerControl from './Player/PlayerControl.vue';

const { currentSong } = storeToRefs(useSongStore())
const audioRef = ref()


function timeListener(e) {
	currentSong.value.currentTime = Math.floor(e.target.currentTime)
}
function endSongListener(e) {
	currentSong.value.isPlaying = false
}

</script>

<template>
	<div class="player-container">
		<PlayerImage />
		<PlayerProgressBar />
		<PlayerControl />
		<audio :src="currentSong.audio" :ref="(el) => { currentSong.audioRef = el }"
			@canplay="(e) => { currentSong.duration = Math.floor(e.target.duration) }" @timeupdate="e => timeListener(e)"
			@ended="e => endSongListener(e)"></audio>
	</div>
</template>

<style scoped>
.player-container {
	height: 99vh;
	overflow: hidden;
	margin-left: 22vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

}
</style>