// JAVASCRIPT FOR CALCULATOR

document.addEventListener("keydown", logKey);

function logKey(e) {
    console.log(e.key);

    if (e.keyCode >= 48 && e.keyCode <= 57)
    {
        addNumToDisplay(`${e.key}`);
    }
}

function add(currentNum) {
    const prevNum = document.getElementById('prevNum').textContent;

    document.getElementById('prevNum').textContent = `${currentNum} +`;
    document.getElementById('currentNum').textContent = '0';
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

function clearAll() {
    document.getElementById('prevNum').textContent = '';
    document.getElementById('currentNum').textContent = '0';
}

function clearEntry() {
    document.getElementById('currentNum').textContent = '0';
}

function mod(num) {
    const prevNum = document.getElementById('prevNum').textContent.split('').filter(/[0-9]/g);
    console.log(prevNum)

    if (!prevNum) {
        document.getElementById('prevNum').textContent = '0';
        document.getElementById('currentNum').textContent = '0';
    }
    else {
        const prevNum = document.getElementById('prevNum').textContent.split('');
    }
}

function operate(operator) {
    const prevNum = document.getElementById('currentNum').textContent;

    if (operator === '+') { add(prevNum) };
    if (operator === '-') { subtract(prevNum) };
    if (operator === '*') { multiply(prevNum) };
    if (operator === '/') { divide(prevNum) };
    if (operator === 'C') { clearAll() };
    if (operator === 'CE') { clearEntry() };
    if (operator === '%') { mod(prevNum) };
}

function addNumToDisplay(number) {
    const currentNum = document.getElementById('currentNum').textContent;

    if (currentNum.toString().length > 16) {
        return;
    }
    else {
        if (number == 0 && !currentNum) {
            return;
        }
        else {
            document.getElementById('currentNum').textContent += number;
        }
    }
}