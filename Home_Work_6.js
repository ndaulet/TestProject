//Задача 1
console.log(Math.round(5.4, 5.5, 5.6)) //округляет по обычным правилам 
console.log(Math.floor(5.4, 5.5, 5.6)) //округляет к меньшему
console.log(Math.ceil(5.4, 5.5, 5.6))//округляет к большему


//Задача 2
let now = new Date()
let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}
console.log("Сегодня " + now.toLocaleString('ru-RU', options))
console.log(now.getHours()+" часов " + now.getMinutes() + " минут")

