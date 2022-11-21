var carousel = document.getElementById('dateNight');
var next = document.querySelector('.carousel-control-next');
var prev = document.querySelector('.carousel-control-prev');
var index = 0;
var movieImage = document.querySelector('.movie');

var baseUrl = 'https://www.omdbapi.com/?apikey=';
var omdbApiKey = '8f3f0682';
var parameters = '&i=tt3896198';


fetchMovieInfo();
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

//fetch omdb information: movie title, rating, description, poster
function fetchMovieInfo(){
    fetch(baseUrl + omdbApiKey + parameters)
    .then(function(response){
        if(response.ok){
            return response.json()
        }
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.error(error);
    })
}