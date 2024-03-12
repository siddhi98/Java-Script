// <!-- 6.] Drumset using keyboard key   -->

// Function to convert key code to key name
function keyCodeToKeyName(keyCode) {
    return String.fromCharCode(keyCode);
}

// Example of usage
document.addEventListener('keydown', function(event) {
    var keyName = keyCodeToKeyName(event.keyCode);
    console.log("Key Name: ", keyName);

    if (keyName == 'A') {
        var audio = new Audio('clap.wav');
        audio.play();
    }
    else if (keyName == 'S') {
        var audio = new Audio('hihat.wav');
        audio.play();
        console.log("Key Name is S");
    } 
    else if (keyName == 'D') {
        var audio = new Audio('kick.wav');
        audio.play();
        console.log("Key Name is D");
    } 
    else if (keyName == 'F') {
        var audio = new Audio('openhat.wav');
        audio.play();
        console.log("Key Name is F");
    } 
    else if (keyName == 'G') {
        var audio = new Audio('boom.wav');
        audio.play();
        console.log("Key Name is G");
    } 
    else if (keyName == 'H') {
        var audio = new Audio('ride.wav');
        audio.play();
        console.log("Key Name is H");
    } 
    else if (keyName == 'J') {
        var audio = new Audio('snare.wav');
        audio.play();
        console.log("Key Name is J");
    } 
    else if (keyName == 'K') {
        var audio = new Audio('tom.wav');
        audio.play();
        console.log("Key Name is K");
    } 
    else if (keyName == 'L') {
        var audio = new Audio('tink.wav');
        audio.play();
        console.log("Key Name is L");
    } 
    else {
        alert("Invalid Key Press")
    }
});

var a_btn = document.querySelector('#a_btn');

a_btn.addEventListener('click', function(){
    var audio = new Audio('clap.wav');
    audio.play();
    console.log("Key Name is A");
});

var s_btn = document.querySelector('#s_btn');

s_btn.addEventListener('click', function(){
    var audio = new Audio('hihat.wav');
    audio.play();
    console.log("Key Name is S");
});
var d_btn = document.querySelector('#d_btn');

d_btn.addEventListener('click', function(){
    var audio = new Audio('kick.wav');
    audio.play();
    console.log("Key Name is D");
});
var f_btn = document.querySelector('#f_btn');

f_btn.addEventListener('click', function(){
    var audio = new Audio('openhat.wav');
    audio.play();
    console.log("Key Name is F");
});
var g_btn = document.querySelector('#g_btn');

g_btn.addEventListener('click', function(){
    var audio = new Audio('boom.wav');
    audio.play();
    console.log("Key Name is G");
});
var h_btn = document.querySelector('#h_btn');

h_btn.addEventListener('click', function(){
    var audio = new Audio('ride.wav');
    audio.play();
    console.log("Key Name is H");
});
var j_btn = document.querySelector('#j_btn');

j_btn.addEventListener('click', function(){
    var audio = new Audio('snare.wav');
    audio.play();
    console.log("Key Name is J");
});
var k_btn = document.querySelector('#k_btn');

k_btn.addEventListener('click', function(){
    var audio = new Audio('tom.wav');
    audio.play();
    console.log("Key Name is K");
});
var l_btn = document.querySelector('#l_btn');

l_btn.addEventListener('click', function(){
    var audio = new Audio('tink.wav');
    audio.play();
    console.log("Key Name is L");
});
