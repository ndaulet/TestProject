// ***Задание 8
let nums = [5, 4, 3, 8, 0]
let limit = 5
let newArr = []
for(let i = 0; i < nums.length; i++){
    if(nums[i]>= limit){
        newArr.push(nums[i])
    }
}
console.log(newArr)

// ***Задание 9
const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]
users.forEach(users => {
    if(users.age>15){
        console.log(users.name)
    }
});

// ***Задание 10

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"]
let newarr = []

for(let i = 0; i < vegetables.length; i++){
    let object = {
        word: vegetables[i],
        length: vegetables[i].length
    }
    newArr.push(object)
}
console.log(newarr)