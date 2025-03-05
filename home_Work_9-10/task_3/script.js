// Задание 3
const sideBar = document.getElementById('sideBar')
const main = document.querySelector('#main')
const menuBtn = document.getElementById('menuBtn')
const closeBtn= document.getElementById('closeBtn')

menuBtn.addEventListener("click", () =>{
    sideBar.style.width = '250px'
    main.style.marginLeft = '250px'
    menuBtn.style.display = 'none'
})
closeBtn.addEventListener("click", () => {
    sideBar.style.width = '0'
    main.style.marginLeft = '0'
    menuBtn.style.display = 'block'
})


