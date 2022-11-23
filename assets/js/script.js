var carousel = $("#carouselDarkVariant");
//Inplement movie info using fetch from omdb
//title, picture, ratings, small description
function movieData() {
//store omdb link in variable
var omdbURL = 'https://www.omdbapi.com/?apikey='
//store my top secret api key in variable(mightvchange later)
var omdbApiKey = '9a6b53be'
//use fetch api to get info for 5 movies
    fetch(omdbURL + omdbApiKey + '     ')
        .then(res => {
            console.log(res.body)
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
}

movieData()

//prev and next button click event
//define both variables
//class="carousel-control-prev"
//class="carousel-control-next"
//different addEventListener
//different function
//e.stopPropagation()