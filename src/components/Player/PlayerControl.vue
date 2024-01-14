<script setup>
import { useSongStore } from '../../store/songStore.js'
import { storeToRefs } from "pinia"

const songStore = useSongStore()
const {currentSong}= storeToRefs(songStore)
const props = defineProps({
	audioRef:Object
}
)

const handlePlay =()=>{
	songStore.playCurrentSong()
	props.audioRef.play()
}

</script>


<template>
	<div class="control-container">
		<span class="material-icons-round medium">fast_rewind</span>

		<span v-if="currentSong.isPlaying"  @click="songStore.pauseCurrentSong" class="material-icons-round ">pause</span>
		<span v-else  @click="handlePlay"  class="material-icons-round">play_arrow</span>

		<span class="material-icons-round medium">fast_forward</span>
	</div>
</template>


<style scoped>

.control-container{
	width: 300px;
	height: 3rem;
	border: 1px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	
}
.material-icons-round{
	display: block;
	font-size:5rem;
	color: rgb(103, 103, 103);
	cursor: pointer;
}
.medium{
	font-size:3rem;

}

</style>