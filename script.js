// JAVASCRIPT FOR CALCULATOR

document.addEventListener("keydown", logKey);

function logKey(e) {
    console.log(e);

    const test = e.key.match(/[0-9]/g);

    if (test)
    {
        addNumToDisplay(`${e.key}`);
    }
}

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

function addNumToDisplay(number) {
    let displayNum = document.getElementById('currentNum').textContent;

    if (displayNum === '0') {
        document.getElementById('currentNum').textContent = '';
        displayNum = '';
    }

    if (displayNum.replaceAll(',', '').length === 16) {
        return;
    }

    if (displayNum.replaceAll(',', '').length === 15) {
        let finalNum = number + ',';
        document.getElementById('currentNum').textContent = finalNum + displayNum;
        return;
    }

    let totalNum = document.getElementById('currentNum').textContent.replaceAll(',', '').split('');

    if ((totalNum.length % 3 === 0) && totalNum.length !== 0) {
        document.getElementById('currentNum').textContent += ',';
    }

    document.getElementById('currentNum').textContent += number;
}