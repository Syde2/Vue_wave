<script setup>
import {computed, ref, watch} from 'vue'
import { useSongStore } from '../../store/songStore.js'
import { storeToRefs } from "pinia"

const songStore = useSongStore()
const {currentSong, audio }= storeToRefs(songStore)
const colorA = computed( ()=> currentSong.value.color[0])
const colorB = computed( ()=> currentSong.value.color[1])


</script>


<template>
current :  {{ }}
<div class="progress-bar">

</div>

</template>


<style scoped>

.progress-bar{
	/* background-image: "linear-gradient(to right, v-bind(currentSong.color[0]), v-bind(currentSong.color[1]) )"; */
	background: linear-gradient(to right, #333, #eee);
	background: linear-gradient(to right, v-bind(colorA), v-bind(colorB));
	width: 300px;
	height: 10px;
	border-radius: 10px;
	border: 1px solid black;

}

</style>

