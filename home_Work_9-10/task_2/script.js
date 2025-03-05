const button = document.getElementById('button')
const closeBtn = document.getElementById('closeBtn')
const window1 = document.getElementById('window')
const modal = document.getElementById('modal')

button.addEventListener('click', () => {
    window1.classList.remove('hidden')
    modal.classList.remove('hidden')
})

closeBtn.addEventListener('click', () => {
    window1.classList.add('hidden')
    modal.classList.add('hidden')
})

window1.addEventListener('click', () => {
    window1.classList.add('hidden')
    modal.classList.add('hidden')
})