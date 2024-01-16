<script setup>
import {computed, onMounted, ref, watch} from 'vue'
import { useSongStore } from '../../store/songStore.js'
import { storeToRefs } from "pinia"

const songStore = useSongStore()
const {currentSong }= storeToRefs(songStore)
const colorA = computed( ()=> currentSong.value.color[0])
const colorB = computed( ()=> currentSong.value.color[1])
const duration = computed( ()=> currentSong.value.duration)
const currentTime = computed( ()=> currentSong.value.currentTime)
const percentage = computed(()=> Math.floor(currentTime.value/duration.value * 100))

</script>

<template>
<div class="empty-bar">
	<div class="progress-bar">
		<p v-if="!!percentage">{{ percentage }}% </p>	
	</div>
</div>
</template>

<style scoped>
.empty-bar{
	/* background-image: "linear-gradient(to right, v-bind(currentSong.color[0]), v-bind(currentSong.color[1]) )"; */
	width: 300px;
	height: 10px;
	border-radius: 10px;
	border: 1px solid black;

}
.progress-bar{
	/* background-image: "linear-gradient(to right, v-bind(currentSong.color[0]), v-bind(currentSong.color[1]) )"; */
	background: linear-gradient(to right, #333, #eee);
	background: linear-gradient(to right, v-bind(colorA), v-bind(colorB));
	width: v-bind(percentage * 3 +'px') ;
	height: 10px;
	border-radius: 10px;
	position: absolute;

}
p{
	color: rgb(109, 101, 101);
	font-size: 13px;
	text-align: center;
	margin-bottom: 1rem;
}
</style>

