const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('menu')
const menuContainer = document.getElementById('menuContainer')
const closeBtn = document.getElementById('closeBtn')
menuBtn.addEventListener('click', () => {
    menuBtn.style.display = 'none'
    menu.style.display = 'block'
    closeBtn.style.display = 'block'
})
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none'
    closeBtn.style.display = 'none'
    menuBtn.style.display = 'block'
    // menuBtn.style.display = menuBtn.style.display === "block" ? "none" : "block"
})