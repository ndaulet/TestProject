
// function meanScore() { 
//     let sum = 0   
//     for(let i = 0; i < arguments.length; i++){
//         sum +=i
//     }
//     let average = sum / arguments.length
//     console.log(average)
// }
// meanScore(1, 2, 3, 4, 5)


// for(let i = 1; i < 6; i++){
//     setTimeout(() =>{
//         console.log(`Сообщение номер ${i}`)
//     }, i * 2000)
// }   


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



// const button = document.querySelector('button')
// button.addEventListener('mouseenter', ()=>{
//     const color = `rgb(${getRandomInteger(1,250)},${getRandomInteger(1,250)},${getRandomInteger(1,250)})`
//     button.style.backgroundColor = color

// })
// button.addEventListener('mouseleave', () =>{
//     const corner = getRandomInteger(-180, 180)
//     button.style.transform = `rotate(${corner}deg)`
// })
// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }


// let div = document.getElementById('div')
// const httpRequest = new XMLHttpRequest()
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
// httpRequest.send()
// httpRequest.onload = () => {
//     const tittle = JSON.parse(httpRequest.response) 
//     div.innerText = tittle.title
// }

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

// const fetchPost = fetch('https://jsonplaceholder.org/users')
// let id = 1
// fetchPost.then(response => {
//     return response.json()
// }).then(data =>{
//     document.body.innerHTML.appendChild(`${data.id}`)
// }).catch(err => {
//     console.log(err)
// }).finally(()=>{

// })

// const httpRequest = new XMLHttpRequest()
// httpRequest.open('GET', 'https://jsonplaseholder.org/posts')
// httpRequest.send()
// httpRequest.onload = requestOnload
// function requestOnload() {
//     const data = JSON.parse(httpRequest.response)
    
// }
// const fetchPost = fetch('https://jsonplaceholder.org/posts')
// fetchPost.then(response => {
//     return response.json() 
// }).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// }).finally(()=>{

// })

// ul = document.getElementById('ul')

// const fetchPost = async () => {
//     try{
//         const response = await fetch('https://jsonplaceholder.org/users')
//         const data = await response.json()
//         for (const element in ul) {
//             element.innerHTML += `<li>${data.firstname}</li>`
//         }
//     }
//     catch(error){
//         console.error(error)
//     }
// }
// fetchPost()


// function Car(model, adress, color){
//     this.model = model
//     this.adress = adress
//     this.color = color
//     this.drive = function() {
//         console.log(`Car ${model} is ${color} and driving in ${adress}` )
//     }  
// }
// const car = new Car('Mitsubishi', 'Kazakhstan', 'black')
// car.drive()

// function  Shop(name, addres){
//     this.name = name
//     this.addres = addres   
// }
// const store = new Shop('Anvar', 'Turan 45')
// const store2 = new Shop('Small', 'Najimidenov 23')
// const shops = [store, store2]
// console.log(shops)

// class Calculator{
//     constructor(){
//         this.num = +prompt('Введите число')
//         this.num2 = +prompt('Введите второе число') 
//     }
//     mul() {
//         return (this.num * this.num2) 
//     }
//     sum() {
//         return (this.num + this.num2) 
//     }
    
// }
// const number = new Calculator()

// console.log(number.sum())
// console.log(number.mul())

