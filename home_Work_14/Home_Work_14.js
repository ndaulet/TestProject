// *** Задание 1
// for(let i = 1; i < 6; i++){
//     setTimeout(() =>{
//         console.log(`Сообщение номер ${i}`)
//     }, i * 2000)
// }   

// *** Заданеи 2
// const interval = setInterval(() =>{  
//     let now = new Date()
//     let options = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     second: 'numeric',
//     }
//     console.log(now.getHours()+" часов " + now.getMinutes() + " минут " + now.getSeconds() + " секунд")
// }, 2000)

// *** Задание 3
// let div = document.getElementById('div')
// const httpRequest = new XMLHttpRequest()
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
// httpRequest.send()
// httpRequest.onload = () => {
//     const tittle = JSON.parse(httpRequest.response) 
//     div.innerText = tittle.title
// }

// *** Задание 4
// const ul = document.createElement('ul')
// const httpRequest = new XMLHttpRequest()
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos')
// httpRequest.send()
// httpRequest.onload = () => {
//     const data = JSON.parse(httpRequest.response)
//     for(let i = 0; i < 21; i++){
//         const li = document.createElement('li')
//         li.innerText = data[i].title
//         ul.appendChild(li)
//     }  
// }
// document.body.appendChild(ul)