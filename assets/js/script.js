var carousel = document.getElementById('boysNight');
var next = document.querySelector('.carousel-control-next');
var prev = document.querySelector('.carousel-control-prev');
var movieTitles = $('.title');

var omdbBaseUrl = 'https://www.omdbapi.com/?apikey=';
var omdbApiKey = '8f3f0682';
var omdbParameters = '&t='; //search t={movie title} based on tmdb movies

var tmdbBaseUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=';
var tmdbApiKey = '884cba11f93bbe1c0a31ae85702286fa';
var tmdbParameters = '&language=en_US&with_genres=28,12';
var imagePath = 'https://image.tmdb.org/t/p/w500' //+ backdrop_path

var boysNightMovies = [];
var index = 0;

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
    var movieSlides = $('.carousel-inner');
    //first loop create class and divs (image and description-h5,p)
    for (var i = 0; i < data.results.slice(0, 5).length; i++){
        var movieContainer = document.createElement('div');
        movieContainer.setAttribute('class', 'carousel-item movieImage');
        var movieImage = document.createElement('img');
        movieImage.setAttribute('id', 'poster' + i);
        movieImage.setAttribute('class', 'block w-1/5')
        var descriptionContainer = document.createElement('div');
        descriptionContainer.setAttribute('class', 'carousel-caption description');
        var title = document.createElement('h5');
        title.setAttribute('id', 'title' + i);
        title.setAttribute('class', 'title');
        var description = document.createElement('p');
        description.setAttribute('id', 'description' + i);

        movieSlides.append(movieContainer);
        movieContainer.append(movieImage);
        movieSlides.append(descriptionContainer);
        descriptionContainer.append(title);
        descriptionContainer.append(description);
    // inject info into each element
    //rating from omdb...fetch inside? idk
        var getMovieTitle = data.results[i].title;
        var getDescription = data.results[i].overview;
        var getMovieImage = imagePath + data.results[i].poster_path;
        var pushMovieTitle = document.getElementById('title'+i);
        var pushDescription = document.getElementById('description' + i);
        var pushMovieImage = document.getElementById('poster' + i);

        pushMovieTitle.innerHTML = getMovieTitle;
        boysNightMovies.push(getMovieTitle);
        Object.assign({}, boysNightMovies);
        pushDescription.innerHTML = getDescription;
        pushMovieImage.setAttribute('src', getMovieImage);

            // var rating = data.ratings[1].value;
            // var moviePoster = data.poster;
        
            // console.log(movieTitle, description)
    }
}

// fetch omdb information: rating, poster
function fetchOmdbInfo(){
    // for (var i = 0; i < boysNightMovies.length; i++) {
        fetch(omdbBaseUrl + omdbApiKey + omdbParameters + boysNightMovies[2])
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

    // }
}
fetchOmdbInfo();





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