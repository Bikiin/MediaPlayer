const AutoPause = {
  threshold: 0.25,
  run(player){
    this.player = player
    const observer = new IntersectionObserver(this.handleIntersection.bind(this), {threshold: this.threshold});
    observer.observe(this.player.media)
    
    document.addEventListener("visibilitychange", this.visibilitychange.bind(this))
  },
  handleIntersection(entries){
    const entry = entries[0];
    if (entry.intersectionRatio > this.threshold) {
        this.player.play()
    }
    else{
      this.player.pause()
    }
  },
  visibilitychange(){
    const visibility = document.visibilityState === "visible"
    visibility 
    ? this.player.play()
    : this.player.pause()
  }
}
  
  export default AutoPause;