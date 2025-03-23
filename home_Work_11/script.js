const gallery  = document.querySelector('.gallery')
const images = document.querySelectorAll('.gallery img')
function setBackground(src){
    document.body.style.backgroundImage = `url(${src})`
    localStorage.setItem('backgroundImage', src)
}
images.forEach(img => {
    img.addEventListener('click', () => {
        images.forEach(img => img.classList.remove('selected'))
        img.classList.add('selected')
        setBackground(img.src)
    })

})
window.addEventListener('load', () => {
    const savedImages = localStorage.getItem('backgroundImage')
    if(savedImages){
        setBackground(savedImages)
        images.forEach(img => {
            if(img.src === savedImages){
                img.classList.add('selected')
            }
        })
    }
})