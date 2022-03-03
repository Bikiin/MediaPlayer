class MediaPlayer{
    constructor(video){
        this.media = video.el
        this.plugins = video.plugin || []
        this.on()
    }
    togglePlay(){
        (this.media.paused) ? this.media.play() : this.media.pause()
    }
    muted(){
        (this.media.muted) ? this.media.muted = false : this.media.muted = true
    }
    play(){
        if(this.media.paused) this.media.play()
    }
    pause(){
        if(!this.media.paused) this.media.pause()
    }
    on(){
        this.plugins.forEach(plugin => {
            const player = {
                muted: () => this.muted(),
                play: () => this.play(),
                pause:() => this.pause(),
                togglePlay: () => this.togglePlay(),
                media: this.media
            }
            plugin.run(player)
        });
    } 
}
export default MediaPlayer
