



var familyKey = 'f6b6d2c3417b1e02fc001c1d391d2590';
// genre id "id": 10751,
// "name": "Family"
var imgURL = "https://image.tmdb.org/t/p/w300"


var familyURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=" +familyKey + '&page=1&with_genres=10751'

// fetch(familyURL)
// .then(response => {
//   if (!response.ok) {
//     throw response; //check the http response code and if isn't ok then throw the response as an error
//   }

//   return response.json(); //parse the result as JSON

// });
// console.log(familyURL)


getMovies();

function getMovies() {
    fetch(familyURL).then(function(response){
      if (response.ok){
        return response.json()
      }
    })
   .then(function(data){
   console.log(data.results.slice(0,5));
    showMovies(data);
   }) 
// .catch(function(error){
//   console.log(error)
// })
}

function showMovies(data){


    
  for (let i=0; i < 5; i++) {

  var movieTitle = document.querySelectorAll('#famTitle')
  movieTitle[i].innerHTML = data.results[i].title;

  var movieOverview = document.querySelectorAll('#famOverview')
  movieOverview[i].innerHTML = data.results[i].overview;

  var moviePoster = document.querySelectorAll('#famPoster')
  moviePoster[i].setAttribute ('src',imgURL + data.results[i].poster_path);

  var movieRating = document.querySelectorAll('#famRating')
  movieRating[i].innerHTML = data.results[i].vote_average;
  };
}

// var index= 0;
// var carousel = document.querySelector('#carouselDarkVariant');

// carousel.addEventListener("click", function navigate(direction) {
//   index = index + direction;
//   if (index < 0) { 
//     index = showMovies.length - 1; 
//   } else if (index > showMovies.length - 1) { 
//     index = 0;
//   }
  
// });


// const prevButton = document.querySelector('#prev');
// const nextButton = document.querySelector('#next');


// nextButton.addEventListener("click", function(event) {
//   // Stops event from bubbling up and new window opening
//   event.stopPropagation();

//   navigate(1);
// });

// prevButton.addEventListener("click", function(event) {
//   // Event bubbling would occur and a new window would open if we did not include the following line of code.
//   event.stopPropagation();

//   navigate(-1);
// });
// navigate(0);

// prevButton.addEventListener('click', () => {
 
// });

// nextButton.addEventListener('click', () => {
 

// });

