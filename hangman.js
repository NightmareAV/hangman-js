const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
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

const drawWords = function (word) {
    ctx.font = "12px Aria";
    for (let i = 0; i < word.length; i++) {
        ctx.fillText(answerArray, 10, 150);
    }

}

const words = [
    "программа",
    "макака",
    "телевизор",
    "ноутбук"
]

const word = words[Math.floor(Math.random() * words.length)];

let attempts = 5;

let answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;

const showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
}

const input = function () {
    return prompt("Угадайте одну букву или нажмите отмена для выхода, кол-во попыток:" + attempts); //.toLowerCase();
}

while (remainingLetters > 0 && attempts > 0) {
    showPlayerProgress(answerArray);
    const guess = input();
    if (guess === null)
        break;
    else if (guess.length !== 1)
        alert("Введите одну букву!")
    else {
        let flag = false;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                if (answerArray[i] === "_") {
                    flag = true;
                    remainingLetters--;
                    answerArray[i] = guess;
                } else
                    flag = false;
            }
        }
        if (!flag) {
            attempts--;
            drawMan(attempts);
            ctx.stroke();
        }
    }
}


ctx.font = "30px Courier";
ctx.fillText(answerArray.join(" "), 10, 200);
showPlayerProgress(answerArray);
if (remainingLetters === 0) {
    alert("Поздравляем! Вы выиграли, слово было: " + word);
} else
    alert("Слово было: " + word);