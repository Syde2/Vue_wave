import { defineStore } from "pinia"
export const useSongStore = defineStore('songStore', {
	state: () => ({ 
		songs: [], 
		currentSong: '',
	}),
	getters: {
		 durationInMinutes(state) {
			const minutes = Math.floor( state.currentSong.duration / 60);
			const secondsLeft = state.currentSong.duration % 60;
			return `${minutes.toString().padStart(2, '0') }:${secondsLeft.toString().padStart(2, '0')} `
		},
		progressionInMinutes(state) {
			const minutes = Math.floor( state.currentSong.currentTime / 60);
			const secondsLeft = state.currentSong.currentTime % 60;
			return `${minutes.toString().padStart(2, '0') }:${secondsLeft.toString().padStart(2, '0')} `
		}
		
		
	},
	actions: {
	  makeThisAsCurrentSong(songId) {
		this.currentSong = this.songs.filter( song=> song.id === songId)[0]
	  },

	  stopTheOtherSongs(){
		this.songs.filter( song => song.id != this.currentSong.id).
			forEach( otherSong=> otherSong.isPlaying = false)
	  },

	  playCurrentSong() {
		this.stopTheOtherSongs()
		this.currentSong.isPlaying = true
	  },

	  pauseCurrentSong(){
		this.currentSong.isPlaying = false

	  }

	},
  })