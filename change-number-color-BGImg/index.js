// 1]. change number font size, font color, bg img project


var newNum = document.getElementById('number');
var currentNum = newNum.innerText;


var set = setInterval( function(){
    currentNum = currentNum > 0 ? currentNum - 1 : 0;
    newNum.innerHTML = currentNum;

    newBG = currentNum % 2 === 0 ? "url('hills-mountain.jpg')" : "url('bird-green-tree.jpg')";
    newColor = currentNum % 2 === 0 ? "#f97369" : "#ffffff";

    document.getElementById('img').style.backgroundImage = newBG;
    newSize = document.getElementById('number').style.fontSize = currentNum  * 30 + "px";
    document.getElementById('number').style.color = newColor;

    if ( currentNum <= 0 ){
        clearInterval(set);
        document.getElementById('number').style.fontSize = 25+ "px";
        document.getElementById('number').style.color = "#ffffff";
    };
}, 1000);
