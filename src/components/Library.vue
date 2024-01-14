<script setup>
import { useSongStore } from '../store/songStore.js'
import { storeToRefs } from "pinia";

const songStore = useSongStore();
const {songs} = storeToRefs(songStore);

</script>

<template>
	<div class="container">
		<ul v-for="song in songs" :key="song.id">
			<li>{{ song.artist }}</li>
			<li>{{ song.name }}</li>
			<button @click="songStore.makeThisAsCurrentSong(song.id)"> Select </button>
			<button @click="songStore.playCurrentSong "> Play </button>
		
		</ul>
	</div>

</template>


<style scoped>
.container{
	display: flex;
	flex-direction: column;
	position: fixed;
	max-height: 90vh;
	overflow: scroll;
	min-width: 23vw;
	padding: 3rem;
	box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
</style>