// ДОМАШКА ***
// Задание 5***

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



// *** ТО ЧТО РЕЩАЛИ НА УРОКЕ ***

// Задание 1***
// let input = document.querySelector('input')
// let ul = document.querySelectorAll('ul')
// input.addEventListener('keydown',() => {
//     // if (event.key === 'Enter'){
//         ul.forEach(element => {
//             element.innerHTML += `<li>${input.value}</li>`        
//         })
//         input.value = ''
//     // }
// })


// Задание 2***
// let input = document.querySelector('input')
// input.addEventListener('keyup', () =>{
//     console.log(input.value)
// })


// Задание 3***
// const form = document.querySelector('form')
// const input = document.querySelector('input')
// const ul = document.querySelectorAll('ul')
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//         ul.forEach(element => {
//             element.innerHTML += `<li> 'beforeend', ${input.value} </li>`
//         });
//     input.value = '' 
// })


// Задание 4***
// const number1Input = document.querySelector('.number1')
// const number2Input = document.querySelector('.number2')
// const submit = document.querySelector('.submit')
// const div = document.querySelector('div')
// const form = document.querySelector('form')
// const select = document.querySelector('select')
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const number1 = +number1Input.value
//     const number2 = +number2Input.value
//     if(typeof number1 == 'number' && typeof number2 == 'number'){   
//         let result      
//         if(select.value === '+'){
//             result = number1 + number2
//         }
//         else if(select.value == '-'){
//             result = number1 - number2
//         }
//         else if(select.value == '*'){
//             result = number1 * number2
//         }
//         else if(select.value == '/'){
//             if(number2 == 0){
//                 console.log("на ноль делить нельзя")
//             }
//             else{
//                result =  number1 / number2 
//             } 
//         }
//         console.log(result)
//         div.innerHTML += result
//     }   
// })


// eval***
// const number1Input = document.querySelector('.number1')
// const number2Input = document.querySelector('.number2')
// const submit = document.querySelector('.submit')
// const div = document.querySelector('div')
// const form = document.querySelector('form')
// const select = document.querySelector('select')
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const number1 = +number1Input.value
//     const number2 = +number2Input.value
//     let result = eval(`${number1}${select.value}${number2}`)
//     div.innerHTML += result
//     number1Input.value = ""
//     number2Input.value = ""
// })



