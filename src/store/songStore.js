import { defineStore } from "pinia"
export const useSongStore = defineStore('songStore', {
	state: () => ({ 
		songs: [], 
		currentSong: '',
		audioRef : null,
	}),
	getters: {
		duration : (state)=> Math.floor(state.audioRef.duration),
		currentTime : (state)=> Math.floor(state.audioRef.currentTime)
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