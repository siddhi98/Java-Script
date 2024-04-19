// 9. Image Slider

var slides = document.querySelectorAll('.img-slide'); // Select all images
var currentSlide = 0; // Initialize current slide index

console.log("slides.length is" + slides.length);
// Function to show the current slide and hide others
function showSlide(n) {
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        slides[i].classList.add('no-active');
    }
    // Show the selected slide
    slides[n].classList.remove('no-active');
    slides[n].classList.add('active');
}

var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

// Function to change to the next slide
next.addEventListener('click', function(){
  console.log("next slide clicked");
    currentSlide = (currentSlide + 1) % slides.length; // Increment current slide index
    showSlide(currentSlide); // Show the new slide
});

// Function to change to the previous slide
prev.addEventListener('click', function(){
  console.log("prev slide clicked");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Decrement current slide index
    showSlide(currentSlide); // Show the new slide
});

// Initial call to show the first slide
showSlide(currentSlide);

// Automatic slide change every 3 seconds
setInterval(nextSlide, 3000);
