let firstNum = 0;
let secondNum = 0;
let correctAnswer;
let userInput;
let points = 0;

function resetButton() {
    updateNumbers();
}

function submitButton() {
    userInput = document.getElementById("input").value;
    if (userInput === "") {
        return;
    }
    if (correctAnswer === userInput) {
        points++;
    } else {
        points--;
    }
    document.getElementById("point").innerHTML = "Poeng: " + points;
    updateNumbers();
    document.getElementById("input").value = "";
}

function updateNumbers() {
    firstNum = randomNumber(10, 99);
    secondNum = randomNumber(10, 99);
    document.getElementById("firstNumber").innerHTML = firstNum;
    document.getElementById("secondNumber").innerHTML = secondNum;
    if (firstNum < secondNum) {
        correctAnswer = "<";
    } else if (firstNum > secondNum) {
        correctAnswer = ">";
    } else {
        correctAnswer = "=";
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

updateNumbers();
