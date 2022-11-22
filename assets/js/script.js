var carousel = document.getElementById('boysNight');
var next = document.querySelector('.carousel-control-next');
var prev = document.querySelector('.carousel-control-prev');
var index = 0;
var movieImage = document.querySelector('.movie');

var omdbBaseUrl = 'https://www.omdbapi.com/?apikey=';
var omdbApiKey = '8f3f0682';
var omdbParameters = '&i=tt3896198'; //search t={movie title} based on tmdb movies

var tmdbBaseUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=';
var tmdbApiKey = '884cba11f93bbe1c0a31ae85702286fa';
var tmdbParameters = //top 5? limit=5; genre &with_genres=

// fetchOmdbInfo();
fetchTmdbInfo();

//fetch tmdb information: movie title, description
function fetchTmdbInfo(){
    fetch(tmdbBaseUrl + tmdbApiKey)
    .then(function(response){
        if(response.ok){
            return response.json()
        }
    })
    .then(function(data){
        console.log(data);
        displayBoysNightInfo(data);
    })
    .catch(function(error){
        console.error(error);
    })
}

function displayBoysNightInfo(data){
    var movieTitle = data.results[0].title;
    var description = data.results[0].overview;
    // var rating = data.ratings[1].value;
    // var moviePoster = data.poster;

    console.log(movieTitle, description)
}


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
    // })