// Домашка

// *** Задание 1
// console.log(`На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.userAgent} я открыл страничку ${location.href} `)


// Задание 2 ***
// const li = document.querySelectorAll('#list li')
// li.forEach(element => {
//     console.log(element.textContent)    
// });

// li.forEach((element, index) => {
//     element.textContent = index
//     console.log(element.textContent)
// });


// Задание 9 ***
// const users = [
//     {name: 'Mark', age: 12},
//     {name: 'Olga', age: 30},
//     {name:'Tom', age: 25},
//     {name:'Den', age: 43}
// ]
// let userTable = document.querySelector('#table tbody')
// users.forEach(element => {
//     const tr = document.createElement('tr')
//     const nameTable = document.createElement('td')
//     nameTable.textContent = element.name
//     const  ageTable = document.createElement('td')
//     ageTable.textContent = element.age
     
//     tr.appendChild(nameTable)
//     tr.appendChild(ageTable)
//     userTable.appendChild(tr)
    
//     tr.style.color = 'red'
//     nameTable.style.color = 'blue'
//     document.body.style.fontSize = '80px'
// });



// ```
// // ТО ЧТО РЕШАЛИ НА УРОКЕ***
// ```

// Задание 4***
// const hello = document.createElement('p')
// hello.textContent= 'Hello MyFreedom'
// hello.style.fontSize = '36px'
// hello.style.fontWeight = 'bold'
// document.body.appendChild(hello)

// Задание 5***
// let teg= 'p'
// let color = 'red'
// let content = 'Hello MyFreedom'
// function parametr(teg, color, content){
//     let a = document.createElement(teg)
//     a.style.color = color
//     a.textContent = content
//     document.body.appendChild(a)
// }
// parametr(teg, color, content)

// Задание 6****
// const select = document.createElement('select')
// for(let i = 1960; i <= 2020; i++){
//     let option = document.createElement('option')
//     option.innerText = `${i}`
//     select.appendChild(option)
// }
// document.body.appendChild(select)


// Задание 7 ***
// const ul = document.createElement('ul')
// const clients = [
//     {name: "Женя", order: true},
//     {name: "Кристина", order: true},
//     {name: "Павел", order: false},
//     {name: "Виолетта", order: false},
//     {name: "Костя", order: true} 
// ]
// clients.forEach(element => {
//     let li = document.createElement('li')
//     li.innerText = `Клиент ${element.name} ${element.order == true ? ("оплатил") : ("отменил")} заказ`
//     ul.appendChild(li)
// }); 
// document.body.appendChild(ul) 


// Задание 8
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
// let div = document.createElement('div')
// div.style.backgroundColor = 'violet'
// div.style.padding = '20px'
// linksArr.forEach(element => {
//     let a = document.createElement('a')
//     a.href = element
//     a.textContent = element
//     a.setAttribute('target', '_blank')
//     div.append(a)
// });
// document.body.appendChild(div)





// задание 10
// let list = document.querySelector('ul')
// list.classList.add('list')
// let lii = document.querySelectorAll('li')
// for(let i = 0; i < lii.length; i+=2){
//     lii[i].classList.add('item')
// }
// let a = document.querySelectorAll('a')
// for(let i= 0; i < a.length; i++){
//     a[i].classList.add('custom-link')
// }
