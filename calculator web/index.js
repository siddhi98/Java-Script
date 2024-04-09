// //  <!-- 8.] calculator  -->
// var add_btn = document.querySelector('.add-item');
// var remove_btn = document.querySelector('.remove-item');
// var list_ul = document.querySelector('.list-items');
// var list_li = document.querySelector('.list-item');
// var length_li = list_ul.children;
// var header_sec = document.querySelector('.header-sec');
// var header = document.getElementsByClassName('header');


// add_btn.addEventListener('click', function(){
  
// });



// remove_btn.addEventListener('click', function(){
   
// });


let currentDisplay = '0';
let operator = '';

function appendToDisplay(value) {
  if (currentDisplay === '0' && value !== '.') {
    currentDisplay = value;
  } else {
    currentDisplay += value;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (currentDisplay !== '0' && !operator) {
    currentDisplay += op;
    operator = op;
  }
  updateDisplay();
}

function clearDisplay() {
  currentDisplay = '0';
  operator = '';
  updateDisplay();
}

function calculate() {
  if (operator && currentDisplay !== '0') {
    currentDisplay = eval(currentDisplay).toString();
    operator = '';
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = currentDisplay;
}
