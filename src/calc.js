import './style.css';
console.log('calc.js');

const firstNumerUI = document.getElementById('firstNumber');
const secondNumerUI = document.getElementById('secondNumber');
const resultUI = document.getElementById('result');
let btnClickUI = document.getElementById('calculBtn');
console.log(`Check UI stuffffff : 
    ${firstNumerUI}
    ${secondNumerUI}
    ${resultUI}
    ${btnClickUI}`);

function addition(num1, num2) {
    return num1 + num2;
}

function calculate() {
    console.log('calculate');

    let firstNumber = parseFloat(document.getElementById('firstNumber').value);
    let secondNumber = parseFloat(document.getElementById('secondNumber').value);

    let result = addition(firstNumber, secondNumber);

    document.getElementById('result').innerText = result;
}
btnClickUI.addEventListener('click', calculate)