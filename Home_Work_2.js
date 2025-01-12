// ***Задание 8
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function  getRandomRGB(){
        let num1 = getRandomInteger(1, 250)
        let num2 = getRandomInteger(0, 2)
        let num3 = getRandomInteger(2, 1)
        console.log("rgb("+num1+","+num2 +"," +num3+")")
}
getRandomRGB()
// ***Задание 9
let n = 5
let a = 0.5
for(let i = 1; i <= n; i+=a){
    if(i%1==0){
        console.log(i +" integer")
    }else if(i%1 != 0){
        console.log(i+" demical")
    }
}
// ***Задание 10
calcPrice(2)
function calcPrice(day){
    if(day >= 7){
        console.log(day*40-50+"$")
    }else if(day>=3){
        console.log(day*40-20+"$")
    }else{
        console.log(day*40+"$")
    }
}