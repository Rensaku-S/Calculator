function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const firstNum = 3;
const operator = '+';
const lastNum = 5;

function operate(a, Op, b) {
    let result = 0;

    if (Op === '+') {
        result = add(a, b);
    } else if (Op === '-') {
        result = subtract(a, b);
    } else if (Op === '*') {
        result = multiply(a, b);
    } else {
        result = divide(a, b);
    }
    return result;
}


const display = document.querySelector('.display');
const numDigit = document.querySelectorAll('.num')
const operatorDigit = document.querySelectorAll('.operator')
const plusMinusdigit = document.querySelector('#plus-minus')
const clearDigit = document.querySelector('#clear')
const dotDigit = document.querySelector('#dot')
const egalDigit = document.querySelector('#egal')

function putDigitDisplay() {
    numDigit.forEach(num => {
        num.addEventListener('click', () => {
            display.textContent += num.textContent;
        })
    });
}

function clearDisplay() {
    clearDigit.addEventListener('click', () => {
        display.textContent = '';
    })
}

function signDigit() {
    plusMinusdigit.addEventListener('click', () => {
        if (display.textContent>0) {
            display.textContent = '-' + display.textContent
        } else {
            display.textContent = display.textContent.slice(1)
        }
    })
}

let displayContent = display.textContent


// Appel des fonctions
putDigitDisplay()
clearDisplay()
signDigit()