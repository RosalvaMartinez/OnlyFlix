//change id to something specific/ #spookynight?
var carousel = $("#carouselDark Variant");

//OMDB**********
//Inplement movie info using fetch from omdb
//title, picture, ratings, small description
function omdbDataFetch() {
    //store omdb link in variable
    var omdbURL = 'https://www.omdbapi.com/?apikey='
    //store my top secret api key in variable(mightvchange later)
    var omdbKey = '9a6b53be'
    //get specific parameters
    var omdbParameter = '&t=psycho'//based on movies chosen from tmdb
        //use fetch api to get info for 5 movies
        fetch(omdbURL + omdbKey + omdbParameter)
            .then(function (response) {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(function(data) {
                //  var results = data.results
             $("#rating-1").text("IMDB Rating: " + data.Ratings[0].Value + "\nRotten Tomatoes Rating: " + data.Ratings[1].Value)
                console.log(data);
            })
            .catch(function (error) {
                console.error(error);
            })
}


//TMDB**********
//TMDB URL: https://api.themoviedb.org/3/movie/top_rated?api_key={api key}&with_genres={genre code}
//&with_genres={genre code–can separate with commas}
//"id": 27,
//"name": "Horror"

function tmdbDataFetch(){
    //store tmbd link in var
    var tmdbUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key='
    //store tmbd api key in var
    var tmdbKey = '63d4376e54b1580869a756c5666c657f'
    //get specific parameters
    var tmdbParameter = '&language=en_US&with_genres=27'
    //img path? backdrop path? portrait final des
    var image = 'https://image.tmdb.org/t/p/w500' // then use concatination to add poster_path from site
    
    fetch(tmdbUrl + tmdbKey + tmdbParameter)
    .then(function(response){
        if(response.ok) {
            return response.json();
        }
    })
    .then(function(data) {
        //slicing 0,7 not 0,5 since we are skipping invalid movies 2 and 3
        var results = data.results.slice(0,7);
        //movie 1
        $("#img-1").attr('src',image + results[0].backdrop_path)
        $("#title-1").text(results[0].original_title)
        $('#description-1').text(results[0].overview)
        //movie 2
        $("#img-2").attr('src',image + results[1].backdrop_path)
        $("#title-2").text(results[1].original_title)
        $('#description-2').text(results[1].overview)
        //movie 3
        $("#img-3").attr('src',image + results[4].backdrop_path)
        $("#title-3").text(results[4].original_title)
        $('#description-3').text(results[4].overview)
        //movie 4
        $("#img-4").attr('src',image + results[5].backdrop_path)
        $("#title-4").text(results[5].original_title)
        $('#description-4').text(results[5].overview)
        //movie 5
        $("#img-5").attr('src',image + results[6].backdrop_path)
        $("#title-5").text(results[6].original_title)
        $('#description-5').text(results[6].overview)
        console.log(data.results.slice(0,7));
    })
    .catch(function(error) {
        console.error(error);
    })
    return  
}

tmdbDataFetch()
omdbDataFetch()


//prev and next button click event
//define both variables
//class="carousel-control-prev"
//class="carousel-control-next"
//different addEventListener
//different function
//e.stopPropagation()

//prev button 
//class="carousel-control-prev"
// var prev = $('.carousel-control-prev')
// prev.on('click', function (e) {
//     //e.stopPropagation()
//     e.stopPropagation()
//     navigate(-1)
// })
// //next button 
// //class="carousel-control-next"
// var next = $('.carousel-control-next')
// next.on('click', function (e) {
//     //e.stopPropagation()
//     e.stopPropagation()
//     navigate(1)
// })


// TMDB
// Movie title: results.title
// Description: results.overview

// OMDB
// RT Rating: ratings[1].value
// Image: poster
