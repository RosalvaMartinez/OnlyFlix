var carousel = document.getElementById('boysNight');
var next = document.querySelector('.carousel-control-next');
var prev = document.querySelector('.carousel-control-prev');
var movieImage = document.querySelector('.movie');

var omdbBaseUrl = 'https://www.omdbapi.com/?apikey=';
var omdbApiKey = '8f3f0682';
var omdbParameters = '&t={movie title}'; //search t={movie title} based on tmdb movies

var tmdbBaseUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=';
var tmdbApiKey = '884cba11f93bbe1c0a31ae85702286fa';
var tmdbParameters = '&language=en_US&with_genres=28,12';
var imagePath = 'https://image.tmdb.org/t/p/w500' //+ backdrop_path

// fetchOmdbInfo();
fetchTmdbInfo();

//fetch tmdb information: movie title, description
function fetchTmdbInfo(){
    fetch(tmdbBaseUrl + tmdbApiKey + tmdbParameters)
    .then(function(response){
        if(response.ok){
            return response.json()
        }
    })
    .then(function(data){
        console.log(data.results.slice(0, 5));
        displayBoysNightInfo(data);
    })
    .catch(function(error){
        console.error(error);
    })
}

function displayBoysNightInfo(data){
    // document.getElementById('movieTwo').setAttribute('src', imagePath + data.results[1].poster_path)
    var movieTitle = $('.movie');
    //first loop create ids and divs
    //create div for img and description
    //description h5 and p
    //put ids in variables
    
        //second loop inject info into created divs


    for (var i = 0; i < data.results.length; i++){
        var getMovieTitle = data.results[i].title;
        var getDescription = data.results[i].overview;
        var getMovieImage = imagePath + data.results[i].poster_path;

        document.getElementById('movieOne').setAttribute('src', getMovieImage);
        document.getElementById('movieTitle').innerHTML = getMovieTitle;
        document.getElementById('description').innerHTML = getDescription;

    // }
    // var rating = data.ratings[1].value;
    // var moviePoster = data.poster;

    // console.log(movieTitle, description)
}}


//fetch omdb information: rating, poster
// function fetchOmdbInfo(){
//     fetch(omdbBaseUrl + omdbApiKey + omdbParameters)
//     .then(function(response){
//         if(response.ok){
//             return response.json()
//         }
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(error){
//         console.error(error);
//     })
// }





    //boys night carousel
    //indicator buttons at the bottom center of carousel
    //add class="active" and aria-current="true" to indicate current slide
    //remove class and aria-current when not on slide
    // function navigate(direction){
        //04->18->navigate function
    // }
    
    //previous button click event
    // prev.addEventListener('click', function(e){
    //     e.stopPropagation();
    //     navigate(-1);
    // })
    //next button click event
    // next.addEventListener('click', function(e){
    //     e.stopPropagation();
    //     navigate(1);
    //})