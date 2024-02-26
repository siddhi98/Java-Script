// <!-- 4.] on click change font size like if you click on +font then font size would be inc and if you click on -font then font size would be Dec   -->

// <!-- 2.2] add div and it's show color code for text and background -->

var btn = document.querySelector('button');
var newDiv = document.querySelector('body div');
var fontColor = document.getElementById('text');


// fetch text font size 

    var currentColor = window.getComputedStyle(fontColor).color;

    var currentbgColor = window.getComputedStyle(newDiv).backgroundColor;


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

