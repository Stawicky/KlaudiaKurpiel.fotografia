const cursor = document.querySelector('.cursor')
const imgs = document.querySelectorAll('.gallery img')
const gallery = document.querySelector('.gallery')
const photoInGallery = ['pht1', 'pht2','pht3','pht4','pht5','pht6','pht7','pht8','pht9','pht10','pht11']
let photonumber =0;
let i


//change photo in reels
const changePhoto = () => {
    i = photonumber
imgs.forEach(img => {
    img.src= `image/gallery/${photoInGallery[i]}.jpg`
    i++
    if (i > photoInGallery.length-1) i =0
})
photonumber++
if (photonumber > photoInGallery.length-1) {
    photonumber = 0
}
}
// move gallery
const moveGallery = () => {
    gallery.style.transform = "translate(-20%, 0)"
    setTimeout(backGallery,1000);
    gallery.style.transition = "1s ease"

}
// back gallery 
const backGallery = () => {
    changePhoto()
    gallery.style.transition = "0s ease"
    gallery.style.transform = "translate(0%, 0)"
}

//cursor 
document.addEventListener('mousemove', e=> {
    cursor.style.top =`${e.pageY}px`
    cursor.style.left =`${e.pageX}px`
})


// set a photo at the start
changePhoto()
window.setInterval(moveGallery, 5000);
