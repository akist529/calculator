// JAVASCRIPT FOR CALCULATOR

console.log(add(2, 4));
console.log(subtract (6, 3));
console.log(multiply(5, 5));
console.log(divide(25, 5));

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

function operate(firstNum, secondNum, operator) {
    if (operator === '+') { add(firstNum, secondNum) };
    if (operator === '-') { subtract(firstNum, secondNum) };
    if (operator === '*') { multiply(firstNum, secondNum) };
    if (operator === '/') { divide(firstNum, secondNum) };
}

function updateDisplay(number) {
    if (document.getElementById('display').textContent === '0')
    {
        document.getElementById('display').textContent = '';
    }

    document.getElementById('display').textContent += number;
}