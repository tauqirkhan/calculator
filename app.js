let firstNum = '';
let operator = '';
let secondNum = '';
let result = 0;


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b == 0){
        return 'Error';
    }
    return a / b;
}

function operate(num1, num2, operator){
    switch(operator) {
        case '+':
            return add(num1, num2);
        break;
        case '-':
            return subtract(num1, num2);
        break;
        case '*':
            return multiply(num1, num2);
        break;
        case '/':
            return Math.round(divide(num1, num2) * 100)/100;
        break;
        default:
            return 'ERROR';
    }
}

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.displayinfo');


let numValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        //number button
        if(button.classList.contains('number')){
            numValue = numValue.concat(button.innerText);
            if(operator == ''){
                firstNum = numValue;
                display.innerText = firstNum;
            }else{
                secondNum = numValue;
                display.innerText = secondNum;
            }
        }
        //operator button

        if(button.classList.contains('operator')){
            operator = button.innerText;
            numValue = '';
        }
        //equal button
        if(button.classList.contains('equal')){
            if(!(operator == '')){
                if(firstNum == ''){
                    firstNum = 0;
                }
                if(secondNum == ''){
                    secondNum = 0;
                }
                result = operate(+firstNum, +secondNum, operator);
                display.innerText = result;
                firstNum = result;
                numValue = '';
                secondNum = '';
            }
        }
        //clear button
        if(button.classList.contains('clear')){
            result = 0;
            numValue = ''
            firstNum = '';
            secondNum = '';
            operator = '';
            display.innerText = '0';
        }
    });
});