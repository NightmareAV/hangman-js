// Дразнилки
const body = ["Голова", "Рука", "Нога"];
const adjective = ["длинная", "короткая"];
const animalBody = ["голова", "рука", "нога"];
const animal = ["собаки", "кошки", "крысы"];

// С контогнацией.
console.log("У тебя" + " " + body[Math.floor(Math.random() * 3)] + " " + "еще более" 
+ " " + adjective[Math.floor(Math.random() * 2)] + ", чем" 
+ " " + animalBody[Math.floor(Math.random() * 3)] + " " + "у" 
+ " " + animal[Math.floor(Math.random() * 3)]);
// С методом join и разделитем ввиде пробела.
const arrJoin = ["У тебя", body[Math.floor(Math.random() * 3)], "еще более", adjective[Math.floor(Math.random() * 2)] + ", чем", 
animalBody[Math.floor(Math.random() * 3)], "у", animal[Math.floor(Math.random() * 3)]];

console.log(arrJoin.join(" "));

// Соединение чисел

const numbers = [3, 2, 1];

console.log(numbers.join(" больше, чем "));

// const arr = [1,3,2];
// arr.push(4);
// arr.pop();
// arr.unshift(5);
// arr.shift();
// console.log(arr)
