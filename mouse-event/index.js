// <!-- 2.] on click button show popup  -->


var btn = document.getElementById('button');



function BtnClick(){
    alert('Button Clicked');
};

btn.onclick = BtnClick;

function movecolor(){
    btn.style.backgroundColor = "#ba4242ba";
    btn.style.color = "#ffffff";
};

function mouseoutColor(){
    btn.style.backgroundColor = "#20218bba";
    btn.style.color = "#f6b5b5";
};

function mouseFocus(){
    btn.style.color = "#656565";
};

function mouseenter(){
    btn.style.backgroundColor = "#468f49ba";
    btn.style.color = "#ffffff";
};

function mouseleave(){
    btn.style.backgroundColor = "#eb8906ba";
    btn.style.color = "#000000";
};

btn.addEventListener('mousemove', function(){
    movecolor(); 
    console.log("Mouse Move");
});

btn.addEventListener('mouseout', function(){
    mouseoutColor();
    console.log("Mouse Out");
});

btn.addEventListener('focus', function(){
    mouseFocus();
    console.log("Mouse Focus");
});

btn.addEventListener('mouseenter', function(){
    mouseenter();
    console.log("Mouse Enter");
});

btn.addEventListener('mouseleave', function(){
    mouseleave();
    console.log("Mouse Leave");
});


btn.addEventListener('click', BtnClick)
