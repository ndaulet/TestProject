```// ДОМАШКА ```
// Задание 6 ****
// let arr = [{name:"Mishka"},
//     {name: "DVD Disk"},
//     {name: "Homka"},
//     {name: "Marsik"}
//     ]
// function nameIt(arr){
//     let newArr = arr.map((el)=>{
//         return el.name
//     })
//     console.log(newArr)
// }
// nameIt(arr)


// Задание 7 ****
// const objectWithNumbers = {
//     a: 10,
//     b: 20,
//     c: 'string',
//     d: 12,
// }
// function sumObjectValues(objectWithNumbers){
//   let sum = 0
//     for (const key in objectWithNumbers) {
//       if(typeof objectWithNumbers[key] === 'number'){
//         sum += objectWithNumbers[key]
//       }
//     }
//     console.log(sum)
// }
// sumObjectValues(objectWithNumbers)


// Задание 13 ****
// let jenya = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// let julya = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]

// let jenya2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// let julya2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

// function verifyCats(jenya, julya){
//   let = newjenya = jenya.slice(1,9)
//   let arr = newjenya.concat(julya)
//   console.log(arr)
//   arr.forEach((element, index ) => {
//     if(element > 2){
//       console.log(`Кошка № ${index+1} взрослая, ей ${element} лет`)
//     }
//     else if(element <= 2){
//       console.log(`Кошка № ${index+1} еще котенок, ей ${element} лет`)
//     }
//   });
// }
// verifyCats(jenya, julya)
// verifyCats(jenya2, julya2)



```// ТО ЧТО РЕШАЛИ НА УРОКЕ ****```

// ***** Задание 3
// guessTheNumber(9)
// function guessTheNumber (a){
//     if(arguments.length != 1){
//         return
//     }
//     else if(a>0 && a < 10){
//         let b = getRandomInteger(1, 2)
//         if(b === a){
//             console.log("Вы выиграли")
//         }else{
//             console.log("вы не угадали ваше число - " + a + " а выпало число - " + b)
//         }
//     }   
// }
// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }


// Задание ОТ УЧИТЕЛЯ
// const numbers = [2, 5, -43, -7, 31, -9, 7]
// const numbersClone = numbers.map((value) => {
//     if(value <0){
//         return null
//     }else{
//         return value
//     }
// })
// console.log(numbersClone)


// Задание 4****
// const arr = [2, 5, -43, -7, 31, -9, 7]
// copyArr(arr)
// function copyArr(arr){
//     const numbersClone = arr.map((value) => {
//     return value
// })
// console.log(numbersClone)
// }


// Задание 5***
// let arr = ['Nana', 'Don', 'Merik']
// returnHello(arr)
// function returnHello(arr){
//     const name = arr.map((value) => {
//         return 'Hello, ' + value
//     })
//     console.log(name)
// }


// Задание 8***
// ucFirst("frontend")
// function ucFirst(name){
//     console.log(name[0].toUpperCase() + name.slice(1))
// }
// let str = 'XXX'
// checkSpam(str)


// Задание 9***
// function checkSpam(str){
//     if(str.includes('XXX') || str.includes('badWord')){
//         return true
//     }
// }


// Задание 10***
// let str = "привет, Женя"
// function contrary(str){
//     let string = str.split('')
//     let string1 = string.reverse()
//     let string2 = string1.join('')
//     console.log(string2)
// }
// contrary(str)


// Задание 11***
// let stations = [
//     'MAN675847583748sjt567654;Manchester Piccadilly',
//     'GNF576746573fhdg4737dh4;Greenfield',
//     'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//     'SYB4f65hf75f736463;Stalybridge',
//     'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
// ]
// for(let i = 0; i< stations.length; i++){
//     let code = stations[i].slice(0,3)  + ':' + stations[i].split(';')[1]
//     console.log(code)
// }


// ****Задание 12
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// function unique(strings){
//     for(let i = 0; i < strings.length; i++){
//         let array = []
//         if(strings[i] != array[i]){
//             array += strings[i]
//             i++
//         }            
//         else if(strings[i] == array[i]){
//             i++
//         }
//        console.log(array)
//     }
// }
// unique(strings)


// Задание 14 ***
// let arr = [5, 4, 3, 8, 0];
// filterFor(arr, 5)
// function  filterFor(arr, a){
//     let array = arr.filter((el) => el >= a)
//     console.log(array)
// }


// Задание 15 ***
// let arr = ['yes', 'hello', 'no', 'easycode', 'what']
// function filterFor(arr){
//     let array = arr.filter((el) => el.length >= 3)
//     console.log(array)
// }
// filterFor(arr)


// Задание 16 ***
// let arr =  [ [14, 45], [1], ['a', 'c', 'd'] ]
// console.log(arr.sort())


// Задание 17 ****
// let  catAges = [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
// function getAverageHumanAge(catAges){
//     let age = 0
//     let arrClone = catAges.map((value) => {
//         if(value<= 2){
//             age = value * 10
//         }
//         if(value > 2){
//             age = value * 7
//         }
//         return age
//     })
//     let arr = arrClone.filter((el) => el > 18)  

//     const sumAges = arr.reduce((accumulator, currentValue)=>{
//         return (accumulator + currentValue) 
//     },0)
//     const average = sumAges / arr.length
//     console.log(average)
// }