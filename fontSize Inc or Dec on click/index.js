// <!-- 4.] on click change font size like if you click on +font then font size would be inc and if you click on -font then font size would be Dec   -->

var btn_Dec = document.querySelector('.font-dec-btn');
var btn_Inc = document.querySelector('.font-inc-btn');
var textSize = document.getElementById('text');


// fetch text font size 

    var currentFontSize = window.getComputedStyle(textSize).fontSize;

    currentFontSize = parseInt(currentFontSize.substr(0,(currentFontSize.length - 2)));

    // textSize.style.fontSize = parseInt(currentFontSize) + 16 + 'px';
    // console.log(window.getComputedStyle(textSize).fontSize);



function funbtn_Inc() {
    currentFontSize += 10
    textSize.style.fontSize = currentFontSize;
};

function funbtn_Dec() {
    currentFontSize -= 10
    textSize.style.fontSize = currentFontSize;
};


btn_Inc.addEventListener('click' , function(){
    funbtn_Inc();
});


btn_Dec.addEventListener('click' , function(){
    funbtn_Dec();
});
