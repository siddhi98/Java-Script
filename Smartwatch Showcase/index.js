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



// get time by 24 hr


// function updateClock() {
//     var currentTime = new Date();
//     // Operating System Clock Hours for 12h clock
//     var currentHoursAP = currentTime.getHours();
//     // Operating System Clock Hours for 24h clock
//     var currentHours = currentTime.getHours();
//     // Operating System Clock Minutes
//     var currentMinutes = currentTime.getMinutes();
//     // Operating System Clock Seconds
//     var currentSeconds = currentTime.getSeconds();
//     // Adding 0 if Minutes & Seconds is More or Less than 10
//     currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
//     currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
//     // Picking "AM" or "PM" 12h clock if time is more or less than 12
//     var timeOfDay = (currentHours < 12) ? "AM" : "PM";
//     // transform clock to 12h version if needed
//     currentHoursAP = (currentHours > 12) ? currentHours - 12 : currentHours;
//     // transform clock to 12h version after mid night
//     currentHoursAP = (currentHoursAP == 0) ? 12 : currentHoursAP;
//     // display first 24h clock and after line break 12h version
//     var currentTimeString = "24h kello: " + currentHours + ":" + currentMinutes + ":" + currentSeconds + "" + "<br>" + "12h kello: "    + currentHoursAP + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
//     // print clock js in div #clock.
//     $("#clock").html(currentTimeString);}
//     $(document).ready(function () {
//     setInterval(updateClock, 1000);
// });


// get time by 12 hr


function updateClock() {
    var currentTime = new Date();
    // Operating System Clock Hours for 12h clock
    var currentHoursAP = currentTime.getHours();
    // Operating System Clock Minutes
    var currentMinutes = currentTime.getMinutes();
    // Operating System Clock Seconds
    var currentSeconds = currentTime.getSeconds();
    // Adding 0 if Minutes & Seconds is More or Less than 10
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    // Picking "AM" or "PM" 12h clock if time is more or less than 12
    var timeOfDay = (currentHoursAP < 12) ? "AM" : "PM";
    // // transform clock to 12h version if needed
    // currentHoursAP = (currentHours > 12) ? currentHours - 12 : currentHours;
    // // transform clock to 12h version after mid night
    // currentHoursAP = (currentHoursAP == 0) ? 12 : currentHoursAP;
    // // display first 12h clock
    var currentTimeString = currentHoursAP + ":" + currentMinutes + ":" + currentSeconds + timeOfDay;
    // print clock js in div #clock.
    $("#clock").html(currentTimeString);    
}
$(document).ready(function () {
    setInterval(updateClock, 1000);
});


// on click heart rate button show heart

var heart_rate = document.querySelector('.heart-rate');
var time = document.querySelector('.time');
var clock_display = document.querySelector('#heart');
var clock = document.querySelector('#clock');


function heartRate(){
    // clock_display.innerHTML = "heart";
    // console.log("hello");
    clock_display.classList.add('show');
    clock_display.classList.remove('close');
    clock.classList.remove('show');
    clock.classList.add('close');


};

heart_rate.addEventListener('click', function(){
    heartRate();
});

function timeEvent(){
    clock_display.classList.add('close');
    clock_display.classList.remove('show');
    clock.classList.remove('close');
    clock.classList.add('show');
};

time.addEventListener('click', function (){
    timeEvent();
});