var carousel = document.getElementById('dateNight');
var next = document.querySelector('.carousel-control-next');
var prev = document.querySelector('.carousel-control-prev');
var index = 0;
var movieImage = document.querySelector('.movie');

//date night carousel
//indicator buttons at the bottom center of carousel
//add class="active" and aria-current="true" to indicate current slide
//remove class and aria-current when not on slide
function navigate(direction){
    //04->18->navigate function
}

//previous button click event
prev.addEventListener('click', function(e){
    e.stopPropagation();
    navigate(-1);
})
//next button click event
next.addEventListener('click', function(e){
    e.stopPropagation();
    navigate(1);
})