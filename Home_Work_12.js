// РЕШАЛИ НА УРОКЕ
// *** Задание 1
// const names = ['Indira', 'Galymzhan', 'Akzhan', 'Nazgul']
// const [name1, name2, ...otherNames] = names
// console.log(name1)
// console.log(name2)
// otherNames.forEach(name => {
//     console.log(name)
// })

// *** Задание 2 
// const names = ['Indira', 'Galymzhan', 'Akzhan', 'Nazgul', 'Mishka']
// function Print(name1,  name2, name3){
//     console.log(name1, name2, name3)
// }
// Print(...names)

// *** Задание 3
// const obj = {name1: 'student', age: 23, active: true}
// const a = {name1 = 1, age = 2, ...fields} = obj
// console.log(a);

// *** Задание 4
// function meanScore(...nums){
//     let result = 0
//     for (const num of nums) {
//         if(typeof num !== 'number'){
//             console.log('Все аргументы в вызове функции должны быть числами!')
//             return
//         }
//         else{
//            result += num 
//         }
//     }
//     result = result / nums.length
//     console.log(result.toFixed(2))
// }
// meanScore(2,5,99,5,3)

// *** Задание 5