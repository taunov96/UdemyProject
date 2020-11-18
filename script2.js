"use strict"; /*Этой строкой мы говорим, что работаем в современном режиме, где не работают неточности из старых стандартов (для контроля */

let number = 4.6;

console.log(-4/0); //infinity - получаем при делении на ноль
console.log("string" * 9); //Получаем Nan -  переводится как не число

const persone = "Alex";

const bool = true;
// Объекты
const obj = {
    name: "john",
    age: 25,
    isMarried: false
}
// Вызов объекта
console.log(obj.age);

//Массив - разновидность объект
// Массив используется для хранения данных идущих строго по порядку

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, [] ];
console.log(arr[2]);

alert('Hello');

// Присвоение в массив 
const answers = [];

answers[0] = prompt('Как ваше имя?', ''); //Вторые кавычки как placeholder и для поддержки IE
answers[1] = +prompt('Сколько вам лет?', '');
console.log(answers[1]);