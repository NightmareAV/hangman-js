const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
ctx.lineWidth = 4;

const drawMan = function (attempts) {
    ctx.beginPath();
    switch (attempts) {
        case 4:
            //Голова
            ctx.strokeRect(100, 50, 20, 20);
            break;
        case 3:
            //Шея
            ctx.moveTo(110, 70);
            ctx.lineTo(110, 90);
            break;
        case 2:
            //Руки
            ctx.moveTo(110, 90);
            ctx.lineTo(90, 80);
            ctx.moveTo(110, 90);
            ctx.lineTo(130, 80);
            break;
        case 1:
            //Торс
            ctx.moveTo(110, 90);
            ctx.lineTo(110, 120);
            break;
        case 0:
            //Ноги
            ctx.moveTo(110, 120);
            ctx.lineTo(95, 145);
            ctx.moveTo(110, 120);
            ctx.lineTo(125, 145);
            break;
    }
};

const words = [
    "программа",
    "макака",
    "телевизор",
    "ноутбук"
];

let word = words[Math.floor(Math.random() * words.length)];

let attempts = 5;

let answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;

ctx.font = "30px Courier";
ctx.fillText(answerArray.join(" "), 10, 200);
document.getElementById("count").innerHTML = "Попыток осталось: " + attempts;

setInterval(function() {
    if (remainingLetters === 0) {
        alert("Поздравляем! Вы выиграли, слово было: " + word);
        ctx.clearRect(0, 0, width, height);
        word = words[Math.floor(Math.random() * words.length)];
        attempts = 5;
        answerArray = [];
        for (let i = 0; i < word.length; i++) {
            answerArray[i] = "_";        
        }
        remainingLetters = word.length;
        document.location.reload(true);
    } else  if (attempts <= 0) {
        alert("Вы проиграли, сейчас начнется новая игра!");
        ctx.clearRect(0, 0, width, height);
        word = words[Math.floor(Math.random() * words.length)];
        attempts = 5;
        answerArray = [];
        for (let i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }
        remainingLetters = word.length;
        document.location.reload(true);
    }
}, 100)

function inputLetter(value) {
    document.getElementById("count").innerHTML = "Попыток осталось: " + attempts;

    ctx.fillText(answerArray.join(" "), 10, 200);
    const guess = value;
    console.log(guess);

    if (guess.length !== 1)
        alert("Введите одну букву!")
    else {
        let flag = false;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                if (answerArray[i] === "_") {
                    flag = true;
                    remainingLetters--;
                    answerArray[i] = guess;
                    ctx.fillText(answerArray.join(" "), 10, 200);
                } else
                    flag = false;
            }
        }
        if (!flag) {
            ctx.fillText(guess, 200, 30 * attempts);
            ctx.fillRect(195, 30 * attempts - 8, 30, 3);
            attempts--;
            drawMan(attempts);
            ctx.stroke();
            document.getElementById("count").innerHTML = "Попыток осталось: " + attempts;
        }
        document.getElementById("inputLetter").value = "";
    }
}