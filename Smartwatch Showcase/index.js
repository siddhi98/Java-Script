// <!-- 5.] Smartwatch Showcase  -->


// complete your order button js
$('.order').click(function(e) {

    let button = $(this);

    if(!button.hasClass('animate')) {
        button.addClass('animate');
        setTimeout(() => {
            button.removeClass('animate');
        }, 10000);
    }

});

// on click watch color change
var black_btn = document.querySelector('.black-button');
var red_btn = document.querySelector('.red-button');
var blue_btn = document.querySelector('.blue-button');
var purple_btn = document.querySelector('.purple-button'); 
var myImage = document.querySelector('.watch-img');

black_btn.addEventListener('click' , function(){
    myImage.src = './Black-img.png';
});

red_btn.addEventListener('click' , function(){
    myImage.src = './Red-img.png';
});

blue_btn.addEventListener('click' , function(){
    myImage.src = './Blue-img.png';
});

purple_btn.addEventListener('click' , function(){
    myImage.src = './Purple-img.png';
});

