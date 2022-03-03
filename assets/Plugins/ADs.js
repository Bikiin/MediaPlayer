
const ADs = {
    run(){
        const banner = document.getElementById("banner")
        const delet = document.getElementById("delete")

        const bannerRun = ()=>{
            const numberBanner = Math.floor((Math.random() * (7 - 1) + 1))
            const seconds = Math.floor((Math.random() * (7000 - 3000) + 3000))
            setTimeout(()=>{
                banner.src = `/assets/Plugins/banners/banner_${numberBanner}.png`
                banner.style.setProperty('display', 'block')
                delet.style.setProperty('display', 'block')
            }, seconds)
        }
        
        if (!banner.style.display){
           bannerRun()
        }

        delet.addEventListener('click', ()=>{
            banner.style.setProperty('display', 'none')
            delet.style.setProperty('display', 'none')
            bannerRun()
        })
    }
}

export default ADs