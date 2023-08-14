var screen =document.getElementById('screen')
var eq =document.getElementById('eq')
var cancel =document.getElementById('cancel')

var plus =document.getElementById('plus')
var minus =document.getElementById('minus')
var divd =document.getElementById('divd')
var mult =document.getElementById('mult')
var num1 =document.getElementById('num1')
var num2 =document.getElementById('num2')
var num3 =document.getElementById('num3')
var num4 =document.getElementById('num4')
var num5 =document.getElementById('num5')
var num6 =document.getElementById('num6')
var num7 =document.getElementById('num7')
var num8 =document.getElementById('num8')
var num9 =document.getElementById('num9')
var num0 =document.getElementById('num0')
plus.addEventListener('click',()=>{appendToDisplay(plus.value)})
minus.addEventListener('click',()=>{appendToDisplay(minus.value)})  
divd.addEventListener('click',()=>{appendToDisplay(divd.value)})
mult.addEventListener('click',()=>{appendToDisplay(mult.value)})
num1.addEventListener('click',()=>{appendToDisplay(num1.value)})
num2.addEventListener('click',()=>{appendToDisplay(num2.value)})
num3.addEventListener('click',()=>{appendToDisplay(num3.value)})
num4.addEventListener('click',()=>{appendToDisplay(num4.value)})
num5.addEventListener('click',()=>{appendToDisplay(num5.value)})
num6.addEventListener('click',()=>{appendToDisplay(num6.value)})
num7.addEventListener('click',()=>{appendToDisplay(num7.value)})
num8.addEventListener('click',()=>{appendToDisplay(num8.value)})
num9.addEventListener('click',()=>{appendToDisplay(num9.value)})
num0.addEventListener('click',()=>{appendToDisplay(num0.value)})

eq.addEventListener('click',calculate)
cancel.addEventListener('click',clearDisplay)

let displayValue = '';
function appendToDisplay(value) {
  displayValue += value;
  screen.innerText = displayValue;
}

function calculate() {
    displayValue = eval(displayValue);
    screen.innerText = displayValue;
}

function clearDisplay() {
  displayValue = '';
  screen.innerText = displayValue;
}

