
var searchBtn = document.querySelector('.searchBtn')
var movieInput = document.getElementById('movieInput');
var recentSearch = document.querySelector('.recentsearch');
var tmdburl1 = "https://api.themoviedb.org/3/search/movie?api_key=a4e2430bc83be09ef62dea94f12d573b&page=1&include_adult=false&query=";
var image = "https://image.tmdb.org/t/p/w500";
var searchedMovies = [];

searchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    fetchSearchedMovie();
    if (!searchedMovies.includes(movieInput.value)){
        storeInputs();
        renderRecentSearches();
    }
    movieInput.value = '';
}); 

var omdbBaseUrl1 = 'https://www.omdbapi.com/?apikey=8f3f0682&type=movie&s=';
function fetchSearchedMovie(){
    fetch(tmdburl1 + encodeURIComponent(movieInput.value.trim()))
    .then(function(res){
        if(res.ok){
            return res.json()
        }
    })
    .then(function(data){
        console.log(data)
        displaySearchedMovie(data)
    })
    .catch(function(err){
        console.error(err)
    })
}

function displaySearchedMovie(data){
//loop through data results to put title, overview, and poster photo into html 
    var searchedMoviePic = document.getElementById('searchedMoviePic');
    var searchedMovieTitle = document.getElementById('searchedMovieTitle');
    var searchedMovieOverview = document.getElementById('searchedMovieOverview');
    var searchedMovieRating = document.getElementById('searchedMovieRating');
    
    searchedMoviePic.setAttribute('src', image + data.results[0].poster_path);
    searchedMovieTitle.innerHTML = data.results[0].title;       
    searchedMovieOverview.innerHTML = 'Overview: ' + data.results[0].overview;
    searchedMovieRating.innerHTML = 'IMDB Rating: ' + data.results[0].vote_average;
}

function storeInputs(){
    localStorage.setItem('movie', JSON.stringify(searchedMovies));
}

function renderRecentSearches(){
    var li = document.createElement('li');
    var recent = searchedMovies[searchedMovies.length -1];
    li.textContent = recent;

    recentSearch.appendChild(li);
}