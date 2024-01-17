import { defineStore } from "pinia"
export const useSongStore = defineStore('songStore', {
	state: () => ({ 
		songs: [], 
		currentSong: '',
	}),
	getters: {
		 durationInMinutes(state) {
			let minutes = Math.floor( state.currentSong.duration / 60);
			let secondsLeft = state.currentSong.duration % 60;
			if ( isNaN(minutes) ) {minutes = secondsLeft = 0; }

			return `${minutes.toString().padStart(2, '0') }:${secondsLeft.toString().padStart(2, '0')} `
		},
		progressionInMinutes(state) {
			let minutes = Math.floor( state.currentSong.currentTime / 60);
			let secondsLeft = state.currentSong.currentTime % 60;
			if ( isNaN(minutes) ) {minutes = secondsLeft = 0; }
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