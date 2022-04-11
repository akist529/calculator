// JAVASCRIPT FOR CALCULATOR

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
    if (document.getElementById('display').textContent === '0') {
        document.getElementById('display').textContent = '';
    }
    
    if (document.getElementById('display').textContent.length === 21) {
        return;
    }

    let totalNum = document.getElementById('display').textContent.split('');

    console.log(totalNum);

    if (totalNum.length % 3 === 0) {
        let numArray = document.getElementById('display').textContent.split('');

        numArray.splice(1, 0, ',');

        document.getElementById('display').textContent = numArray.toString();
    }

    document.getElementById('display').textContent += number;
}