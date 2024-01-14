<script setup>
import { useSongStore } from '../store/songStore.js'
import { storeToRefs } from "pinia";

const songStore = useSongStore();
const {songs} = storeToRefs(songStore);

</script>

<template>
	<div class="container">
		<div v-for="song in songs" :key="song.id" class="song-wrapper" @click="songStore.makeThisAsCurrentSong(song.id)" >
			<img :src="song.cover" alt="cover" width="100px"  height="100px">
			<div class="label-wrapper">
				<div>
					<h4> {{ song.name }} </h4>
					<h6> {{ song.artist }} </h6>	
				</div>
	
			</div>		
		</div>
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
	box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.song-wrapper{
	display: flex;
	cursor: pointer;
	padding: 1rem 3rem;
}
.song-wrapper:hover {
	background-color: rgb(235, 234, 234);
}
.label-wrapper{
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: end;
	width: 100%;
	color: rgb(58, 57, 57);
}
h4{
	font-weight: 700;
	padding-left: 1em;
	color: grey;
}

h6{
	font-weight: 400;
	font-size: 15px;
	padding-left: 1em;
}

</style>