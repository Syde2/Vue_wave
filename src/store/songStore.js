import { defineStore } from "pinia"
export const useSongStore = defineStore('songStore', {
	state: () => ({ 
		songs: [], 
		currentSong: ''
		
	}),
	getters: {
	  doubleCount: (state) => state.count * 2,
	},
	actions: {
	  makeThisAsCurrentSong(songId) {
		this.currentSong = this.songs.filter( song=> song.id === songId)[0]
	  },
	  playCurrentSong() {
		this.currentSong.isPlaying = !this.currentSong.isPlaying
	  },
	},
  })