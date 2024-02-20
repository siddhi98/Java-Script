// 1]. change number font size, font color, bg img project


// var newNum = document.getElementById('number');
// var currentNum = newNum.innerText;


// var set = setInterval( function(){
//     currentNum = currentNum > 0 ? currentNum - 1 : 0;
//     newNum.innerHTML = currentNum;

//     newBG = currentNum % 2 === 0 ? "url('hills-mountain.jpg')" : "url('bird-green-tree.jpg')";
//     newColor = currentNum % 2 === 0 ? "#9016c9" : "#ffffff";

//     document.getElementById('img').style.backgroundImage = newBG;
//     newSize = document.getElementById('number').style.fontSize = currentNum  * 30 + "px";
//     document.getElementById('number').style.color = newColor;

//     if ( currentNum <= 0 ){
//         clearInterval(set);
//         document.getElementById('number').style.fontSize = 25+ "px";
//         document.getElementById('number').style.color = "#ffffff";
//     };
// }, 1000);


// <!-- 2.] on click button show popup  -->


// var btn = document.getElementById('button');



// function BtnClick(){
//     alert('Button Clicked');
// };

// btn.onclick = BtnClick;

// function movecolor(){
//     btn.style.backgroundColor = "#ba4242ba";
//     btn.style.color = "#ffffff";
// };

// function mouseoutColor(){
//     btn.style.backgroundColor = "#20218bba";
//     btn.style.color = "#f6b5b5";
// };

// function mouseFocus(){
//     btn.style.color = "#656565";
// };

// function mouseenter(){
//     btn.style.backgroundColor = "#468f49ba";
//     btn.style.color = "#ffffff";
// };

// function mouseleave(){
//     btn.style.backgroundColor = "#eb8906ba";
//     btn.style.color = "#000000";
// };

// btn.addEventListener('mousemove', function(){
//     movecolor(); 
//     console.log("Mouse Move");
// });

// btn.addEventListener('mouseout', function(){
//     mouseoutColor();
//     console.log("Mouse Out");
// });

// btn.addEventListener('focus', function(){
//     mouseFocus();
//     console.log("Mouse Focus");
// });

// btn.addEventListener('mouseenter', function(){
//     mouseenter();
//     console.log("Mouse Enter");
// });

// btn.addEventListener('mouseleave', function(){
//     mouseleave();
//     console.log("Mouse Leave");
// });


// btn.addEventListener('click', BtnClick)


// <!-- 3.] on click button change bg color  -->


// var btn = document.querySelector('button');
// var newDiv = document.querySelector('body div');
// var fontColor = document.getElementById('text');

// function chnageColor(){
//     // btn.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
//     newDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
// //    fontColor.style.color = "rgb(" + Math.floor(Math.random() * 250) + "," + Math.floor(Math.random() * 250) + "," + Math.floor(Math.random() * 250) + ")";
//    fontColor.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
//    console.log("color code is #" + Math.floor(Math.random()*16777215).toString(16));


//     // var codeDiv = document.getElementsByClassName('header');
//     // var h1 = document.createElement('h1');
//     // h1.innerText = "hi";
//     // codeDiv.appendChild(h1);

//     // var h1 = document.createElement('h1');
//     // div.appendChild(h1);
//     // h1.createTextNode(text);


// };

// btn.addEventListener('click' , function(){
//     chnageColor();
// });

// add div and show color code 


// const codeDiv = document.getElementsByClassName("header");
// codeDiv.innerHTML = "Hello, World!";
// const parent = document.querySelector("body");
// parent.appendChild(codeDiv);




// var codeDiv = document.getElementsByClassName('header');
// var h1 = document.createElement('h1');
// h1.innerText = "hi";
// codeDiv.appendChild(h1);


// on click inc or dec font size 

