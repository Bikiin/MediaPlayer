import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./Plugins/AutoPlays.js"
import AutoPause from "./Plugins/AutoPause.js"
import ADs from "./Plugins/ADs.js"
const video = document.querySelector('video')
const playButton = document.getElementById('play')
const muteButton = document.getElementById('mute')
    
const player = new MediaPlayer({el: video, plugin:[AutoPlay, AutoPause, ADs]})

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.muted()
