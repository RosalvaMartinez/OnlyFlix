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
        displayBoysNightInfo(data)
    })
    .then(function(){
        fetchOmdbInfo();
    })
    .catch(function(error){
        console.error(error);
    })
}

function displayBoysNightInfo(data){
    var movieSlides = $('.carousel-inner');
    //first loop create class and divs (image and description-h5,p)
    for (var i = 0; i < data.results.slice(0, 5).length; i++){

        var descriptionContainer = document.createElement('div');
        descriptionContainer.setAttribute('class', 'carousel-caption description');
        var movieImage = document.createElement('img');
        movieImage.setAttribute('class', 'ml-28 w-1/5');
        movieImage.setAttribute('id', 'poster' + i);
        var title = document.createElement('h5');
        title.setAttribute('id', 'title' + i);
        title.setAttribute('class', 'title');
        var description = document.createElement('p');
        description.setAttribute('id', 'description' + i);
        var rating = document.createElement('p');
        rating.setAttribute('id', 'rating' + i);

        movieSlides.append(descriptionContainer);
        descriptionContainer.append(movieImage);
        descriptionContainer.append(title);
        descriptionContainer.append(description);
        descriptionContainer.append(rating);
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
        pushDescription.innerHTML = getDescription;
        pushMovieImage.src = getMovieImage;


            // var rating = data.ratings[1].value;
            // var moviePoster = data.poster;
        
            // console.log(movieTitle, description)
    }
}


// fetch omdb information: rating, poster
function fetchOmdbInfo(){
    for (var i = 0; i < 5; i++) {
        var pushMovieRating = document.getElementById('rating' + i);

        fetch(omdbBaseUrl + omdbApiKey + omdbParameters + boysNightMovies[i])
        .then(function(response){
            if(response.ok){
                return response.json();
            }
        })
        .then(function(data){
            console.log(pushMovieRating)
            console.log(i)
    

            if (!data.Ratings[1]){
                var getImdbRating = data.Ratings[0].Value;
                console.log('imdb', getImdbRating)
                pushMovieRating.innetrHTML = getImdbRating;
            } else {
                var getRottenTomatoesRating = data.Ratings[1].Value;
                console.log('rotten', getRottenTomatoesRating)
                pushMovieRating.innerHTML = getRottenTomatoesRating;

            }
                

        })
        .catch(function(error){
            console.error(error);
        })
    }
}








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
