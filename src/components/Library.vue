<script setup>
import { useSongStore } from '../store/songStore.js'
import { storeToRefs } from "pinia";

const songStore = useSongStore();
const { songs } = storeToRefs(songStore);
</script>

<template>
	<div class="library-container">
		<div v-for="song in songs" :key="song.id" class="song-container" @click="songStore.makeThisAsCurrentSong(song.id)">
			<img :src="song.cover" alt="cover" width="100px" height="100px">
			<div class="song-label-container">
				<p class="songname" > {{ song.name }} </p>
				<p class="artist"> {{ song.artist }} </p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.library-container {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	position: fixed;
	height: 99vh;
	width: 22vw;
	overflow: scroll;
	box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.song-container {
	display: flex;
	justify-content: space-evenly;
	cursor: pointer;
	padding: 0 1rem;
}

.song-container:hover {
	background-color: rgb(235, 234, 234);
}

.song-label-container {
	width: 100%;
	padding-left: 0.6rem;
	padding-bottom: 1rem;

}
.song-label-container > .songname{
	font-size: 1.2rem;
	color: rgb(98, 97, 97);
	font-style: italic;
}
.song-label-container >.artist{
	font-weight: 600;
	font-size: 0.9rem;
	color: rgb(56, 54, 54);
}

</style>