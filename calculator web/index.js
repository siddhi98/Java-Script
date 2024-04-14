//  <!-- 8.] calculator  -->
var curren_display = "0";
var operator = "";
var display = document.querySelector('.display');

// code for calculator using key
document.addEventListener('keydown', function(event) {
  var keyName = event.key;
  if (!isNaN(keyName)){
    if (keyName == '0' && keyName != "."){
      curren_display == keyName;
    }
    else{
      curren_display += keyName;
    }
    updateDisplay();
  }
 else if(keyName == '+' || keyName == '-' || keyName == '*' || keyName == '/'){
    curren_display += keyName;
    updateDisplay();
  }
  else if(keyName == 'Enter'){
    calculate();
  }
  else if(keyName == 'c'){
    clearDisplay();
  }
  else{
    updateDisplay();
  }

});

// onclick numbers button
function appendToDisplay(value) {
  if (value == '0' && value != "."){
    curren_display == value;
  }
  else{
    curren_display += value;
  }

  updateDisplay();
};

// onclick operator button like +,-,*,/
function appendOperator(op){
  if( curren_display !== '0' ){
    curren_display += op;
    operator = op;
  }

  updateDisplay();
};

// onclick = button or Enter key 
function calculate(){
  if( curren_display != '0' ){
    curren_display = eval(curren_display).toString();
    operator = "";
  }
  updateDisplay();
};

// onclick C button or C key 
function clearDisplay(){
  curren_display = '0';
  operator = "";
  updateDisplay();
};

// display final result 
function updateDisplay (){
  display.innerHTML = curren_display;
};