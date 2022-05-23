// JAVASCRIPT FOR CALCULATOR

/* Listen for keyboard commands & register them  */
document.addEventListener("keydown", logKey);
function logKey(e) {
    console.log(e.key)

    if (e.key >= 0 && e.key <= 9) {
        addNumToDisplay(`${e.key}`);
    }
    else {
        switch(e.key) {
            case '.':
                addNumToDisplay('.');
                break;
            case 'Backspace':
                backspace();
                break;
            case 'Enter':
                operate('=');
                break;
            case 'Escape':
                clearAll();
                break;
            case 'Delete':
                clearEntry();
                break;
            case 'q':
                operate('²√x');
                break;
            case 'r':
                operate('1/x');
                break;
            case '/':
                operate('/');
                break;
            case '+':
                operate('+');
                break;
            case '-':
                operate('-');
                break;
            case '*':
                operate('*');
                break;
            case 'F9':
                reverseSign();
                break;
            default:
                return;
        }
    }
}

function add(currentNum, firstNum) {
    document.getElementById('firstNum').textContent = ((firstNum) ? (firstNum + currentNum) : currentNum);
    document.getElementById('operator').textContent = '+';
    document.getElementById('currentNum').textContent = '0';
}

function subtract(currentNum, firstNum) {
    let firstNumState = typeof document.getElementById('firstNum').textContent;

    document.getElementById('firstNum').textContent = ((typeof firstNumState === 'string') ? currentNum : (firstNum - currentNum));

    document.getElementById('operator').textContent = '-';
    document.getElementById('currentNum').textContent = '0';
}

function multiply(firstNum, secondNum) {
    
}

function divide(firstNum, secondNum) {
    
}

function clearAll() {
    document.getElementById('firstNum').textContent = '';
    document.getElementById('operator').textContent = '';
    document.getElementById('secondNum').textContent = '';
    document.getElementById('endFormula').textContent = '';
    document.getElementById('currentNum').textContent = '0';
}

function clearEntry() {
    if (document.getElementById('endFormula').textContent === '=') {
        document.getElementById('firstNum').textContent = '';
        document.getElementById('operator').textContent = '';
        document.getElementById('secondNum').textContent = '';
        document.getElementById('endFormula').textContent = '';
    }

    document.getElementById('currentNum').textContent = '0';
}

function mod(num) {
    const firstNum = document.getElementById('firstNum').textContent.split('').filter(/[0-9]/g);

    if (firstNum == 0) {
        document.getElementById('firstNum').textContent = '0';
        document.getElementById('currentNum').textContent = '0';
    }
    else {
        const firstNum = document.getElementById('firstNum').textContent.split('');
    }
}

function pow(num) {
    document.getElementById('firstNum').textContent = `sqr(${num})`;
    document.getElementById('currentNum').textContent = Math.pow(num, 2);
}

function equals(currentNum, firstNum) {
    const operation = document.getElementById('operator').textContent;

    document.getElementById('secondNum').textContent = currentNum;
    document.getElementById('endFormula').textContent = '=';
}

function operate(operator) {
    const currentNum = Number(document.getElementById('currentNum').textContent);
    let firstNum = Number(document.getElementById('firstNum').textContent);

    console.log(typeof firstNum)

    if (operator === '+') { add(currentNum, firstNum) };
    if (operator === '-') { subtract(currentNum, firstNum) };
    if (operator === '*') { multiply(currentNum, firstNum) };
    if (operator === '/') { divide(currentNum, firstNum) };
    if (operator === '%') { mod(currentNum, firstNum) };
    if (operator === 'x²') { pow(currentNum, firstNum) };
    if (operator === '=') { equals(currentNum, firstNum) };
    if (operator === '²√x') { sqrt() };
    if (operator === '1/x') { inverse() };
}

function addNumToDisplay(number) {
    const currentNum = document.getElementById('currentNum').textContent;

    if (currentNum.toString().length > 16) {
        return;
    }

    if (currentNum == 0 && number > 0) {
        document.getElementById('currentNum').textContent = '';
    }

    if (number == 0 && currentNum == 0) {
        return;
    }

    document.getElementById('currentNum').textContent += number;
}

function backspace() {
    const currentNum = document.getElementById('currentNum').textContent;

    if (currentNum === 0) {
        return;
    }
    else if (currentNum.length === 1) {
        document.getElementById('currentNum').textContent = 0;
    }
    else {
        document.getElementById('currentNum').textContent = currentNum.slice(0, -1);
    }
}