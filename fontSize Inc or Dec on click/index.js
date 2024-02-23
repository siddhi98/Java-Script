// <!-- 4.] on click change font size like if you click on +font then font size would be inc and if you click on -font then font size would be Dec   -->

// <!-- 2.2] add div and it's show color code for text and background -->

var btn = document.querySelector('button');
var newDiv = document.querySelector('body div');
var fontColor = document.getElementById('text');

// Add Div 

var new_div = document.createElement('div');
document.getElementById('button_div').appendChild(new_div);
new_div.classList.add('text-color')
var new_body_div = document.createElement('div');
document.getElementById('button_div').appendChild(new_body_div);
new_body_div.classList.add('body-text-color')

// fetch color or css 

    var currentColor = window.getComputedStyle(fontColor).color;

    var currentbgColor = window.getComputedStyle(newDiv).backgroundColor;



// Convert RGB to Hex:

function rgbToHex(rgb) {
    var rgbArray = rgb.match(/\d+/g);
    var hex = '#' + ('0' + parseInt(rgbArray[0], 10).toString(16)).slice(-2) +
                   ('0' + parseInt(rgbArray[1], 10).toString(16)).slice(-2) +
                   ('0' + parseInt(rgbArray[2], 10).toString(16)).slice(-2);
    return hex;
}

var hexColor = rgbToHex(currentColor);
new_div.innerHTML = "text color code is " + hexColor;

var hexbgColor = rgbToHex(currentbgColor);
new_body_div.innerHTML = "Body Background color code is " + hexbgColor;




function chnageColor(){
    newDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    fontColor.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
   
// text color code
    var currentColor = window.getComputedStyle(fontColor).color;
    var hexColor = rgbToHex(currentColor);
    console.log("text color code is " + hexColor);
    new_div.innerHTML = "text color code is " + hexColor;

//  body background color code

var currentbgColor = window.getComputedStyle(newDiv).backgroundColor;
var hexbgColor = rgbToHex(currentbgColor);
console.log("Body Background color code is " + hexbgColor);
new_body_div.innerHTML = "Body Background color code is " + hexbgColor;
   

};


btn.addEventListener('click' , function(){
    chnageColor();
});

