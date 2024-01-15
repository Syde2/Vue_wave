import { defineStore } from "pinia"
export const useSongStore = defineStore('songStore', {
	state: () => ({ 
		songs: [], 
		currentSong: '',	
	}),
	getters: {
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