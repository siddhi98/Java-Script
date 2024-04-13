// // //  <!-- 8.] calculator  -->

// let currentDisplay = '0';
// let operator = '';

// function appendToDisplay(value) {
//     console.log(value);
//   if (currentDisplay === '0' && value !== '.') {
//     currentDisplay = value;
//   } else {
//     currentDisplay += value;
//   }
//   updateDisplay();
// }

// function appendOperator(op) {
//     console.log(op);

//   if (currentDisplay !== '0' && !operator) {
//     currentDisplay += op;
//     operator = op;
//   }
//   updateDisplay();
// }

// function clearDisplay() {
//   currentDisplay = '0';
//   operator = '';
//   updateDisplay();
// }

// function calculate() {
//   if (operator && currentDisplay !== '0') {
//     currentDisplay = eval(currentDisplay).toString();
//     operator = '';
//   }
//   updateDisplay();
// }

// function updateDisplay() {
//   document.querySelector('#display').innerText = currentDisplay;
// }



var curren_display = "0";
var operator = "";
var display = document.querySelector('.display');

function appendToDisplay(value) {
  console.log(value);
  if (curren_display === 0 && value != "."){
    curren_display == value;
  }
  else{
    curren_display += value;
  }

  updateDisplay();

};


function appendOperator(op){
  if( curren_display !== 0 ){
    curren_display += op;
    operator = op;
  }


  updateDisplay();

};









document.addEventListener('keydown', function(event) {
  var keyName = event.key;
  if (!isNaN(keyName)){
    console.log("key is num:" + keyName );
    if (curren_display === 0 && keyName != "."){
      curren_display == keyName;
    }
    else{
      curren_display += keyName;
    }
  
    updateDisplay();
  }
 else if(keyName == '+' || keyName == '-' || keyName == '*' || keyName == '/'){
    curren_display += keyName;
    console.log("error " + keyName);
    updateDisplay();

  }
  else{
    updateDisplay();

  }

});





function calculate(){
  if( operator && curren_display !== '0' ){
    curren_display = eval(curren_display).toString();
    operator = "";
  }
  updateDisplay();
};

function clearDisplay(){
  curren_display = 0;
  operator = "";
  updateDisplay();
};


function updateDisplay (){

  display.innerHTML = curren_display;
};