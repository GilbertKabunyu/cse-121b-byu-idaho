/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2
}
function addNumbers() {
    // getting value from Html form and convert them
    const add1 = Number(document.getElementById("add1").value);
    const add2 = Number(document.getElementById("add2").value);
    //  sum
    let sum = document.getElementById("sum");
    sum.value = add(add1, add2);
}
//adding a listner
const buttonAddNumbers = document.getElementById('addNumbers')
buttonAddNumbers.addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */
function Subtract (number1, number2){
    return number1 - number2
}
function subtractNumbers() {
    // getting value from Html form and convert them
    const Subtract1 = Number(document.getElementById("subtract1").value);
    const Subtract2 = Number(document.getElementById("subtract2").value);
    //  sum
    let difference = document.getElementById("difference");
    difference.value = Subtract(Subtract1, Subtract2);
}
//adding a listner
const buttonSubtractNumbers = document.getElementById('subtractNumbers')
buttonSubtractNumbers.addEventListener('click', subtractNumbers)

/* Arrow Function - Multiply Numbers */
multiply = (number1, number2) => number1 * number2

const multiplyNumbers = () => {
    const product = document.getElementById("product");
    const factor1 = Number(document.getElementById("factor1").value);
    const factor2 = Number(document.getElementById("factor2").value);
    product.value = multiply(factor1, factor2)
};
const buttonMultiplyNumbers = document.getElementById("multiplyNumbers")
buttonMultiplyNumbers.addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
function divide(x, y) {
    return x / y;
}

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient;
};

document.getElementById("divideNumbers"),addEventListener("click", divideNumbers);
/* Decision Structure */
 function getTotal() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    if (document.getElementById("member").checked){
        subtotal = subtotal - subtotal * 0.2 // 20% discount
    }
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
 }

 document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const anArray = document.getElementById("array")
const array = []
for (let index = 1; index < 14; index++) {
    array.push(index)
}
anArray.innerHTML = array

/* Output Odds Only Array */
const Odds = document.getElementById("odds")
const odds = array.filter(number => number % 2 == 0)
Odds.innerHTML = odds

/* Output Evens Only Array */
const Evens = document.getElementById("evens")
const evens = array.filter(number => number % 2 == 0)
Evens.innerHTML = evens

/* Output Sum of Org. Array */
const SumOfArray = document.getElementById("sumOfArray")
const sum = array.reduce((accumlator, currentValue) => accumlator + currentValue)
SumOfArray.innerHTML = sum

/* Output Multiplied by 2 Array */
const Multiplied = document.getElementById("multiplied")
const multiplied = array.map(number => number * 2)
Multiplied.innerHTML = multiplied

/* Output Sum of Multiplied by 2 Array */
const SumOfMultiplied = document.getElementById("sumOfMuliplied")
const sumOfMuliplied = multiplied.reduce((accumlator, currentValue) => accumlator + currentValue)
SumOfMultiplied.innerHTML = sumOfMuliplied