
var apikey = "a4e2430bc83be09ef62dea94f12d573b";
var boystmdburl = "https://api.themoviedb.org/3/movie/top_rated?api_key=a4e2430bc83be09ef62dea94f12d573b&page=1&with_genres=28,12";
var image = "https://image.tmdb.org/t/p/w185";
boysNightTmdbinfo();

function boysNightTmdbinfo() {
    fetch(boystmdburl)
        .then(function (response) {
            if (response.ok) {
                return response.json()
            }
        })

        .then(function (data) {
            console.log(data.results.slice(0, 10));

            displayboysnight(data);

        })
}

function displayboysnight(data) {

    var boymoviepicIds = ["boymoviepic1", "boymoviepic2", "boymoviepic3", "boymoviepic4", "boymoviepic5", "boymoviepic6", "boymoviepic7", "boymoviepic8", "boymoviepic9", "boymoviepic10"]
    var boymovietitleIds = ["boymovietitle1", "boymovietitle2", "boymovietitle3", "boymovietitle4", "boymovietitle5", "boymovietitle6", "boymovietitle7", "boymovietitle8", "boymovietitle9", "boymovietitle10"]
    var boymovieoverviewIds = ["boymovieoverview1", "boymovieoverview2", "boymovieoverview3", "boymovieoverview4", "boymovieoverview5", "boymovieoverview6", "boymovieoverview7", "boymovieoverview8", "boymovieoverview9", "boymovieoverview10"]
    var boymoviepicList = 0, boymovietitleList = 0, boymovieoverviewList = 0;

    boymoviepicIds.forEach(function (picid) {
        document.getElementById(picid).setAttribute('src', image + data.results[boymoviepicList].poster_path);
        boymoviepicList++;
    })

    boymovietitleIds.forEach(function (titleid) {
        document.getElementById(titleid).innerHTML += `<h5 class="text-xl" id=""> ${data.results[boymovietitleList].title}</h5> `;
        boymovietitleList++;
    })

    boymovieoverviewIds.forEach(function (overviewid) {
        document.getElementById(overviewid).innerHTML += `<p id=""> ${data.results[boymovieoverviewList].overview} </p>`;
        boymovieoverviewList++;
    })
}




var OMDBkey = "b88cdd94";
var OMDBkeyurl = "http://www.omdbapi.com/?apikey=b88cdd94";
//var movieids = ["tt0112870","tt0109830","tt13535456","tt0033045","tt0021749","tt10472884","tt1478839","tt0053604","tt0045152","tt0053291"]

//var movieidurl = "https://www.omdbapi.com/?apikey=b88cdd94&i="+movieids;

//MOVIE1--lord of the rings: return of the king
var boymovie1url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0167260";
boyOmdbinfoMovie1();
function boyOmdbinfoMovie1() {
    fetch(boymovie1url).then(function (response) {
        if (response.ok) { return response.json() }
    })

        .then(function (data1) {
            console.log(data1);
            displayboysnightomdb(data1);
        })

    function displayboysnightomdb(data1) {
        document.getElementById('boymovierating1').innerHTML += `<p id=""> ${data1.imdbRating} </p>`;
    }
}

//MOVIE2-primal
var boymovie2url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt11191124";
boyOmdbinfoMovie2();
function boyOmdbinfoMovie2() {
    fetch(boymovie2url).then(function (response) {
        if (response.ok) { return response.json() }
    })

        .then(function (data2) {
            console.log(data2);
            displayboysnightomdb(data2);
        })

    function displayboysnightomdb(data2) {
        document.getElementById('boymovierating2').innerHTML += `<p id="">${data2.imdbRating} </p>`;
    }
}

//MOVIE3--spiderman: into the spiderverse
var boymovie3url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt4633694";
boyOmdbinfoMovie3();
function boyOmdbinfoMovie3() {
    fetch(boymovie3url).then(function (response) {
        if (response.ok) { return response.json() }
    })

        .then(function (data3) {
            console.log(data3);
            displayboysnightomdb(data3);
        })

    function displayboysnightomdb(data3) {
        document.getElementById('boymovierating3').innerHTML += `<p id="">${data3.imdbRating} </p>`;
    }
}

//MOVIE4-star wars: empire strikes back
var boymovie4url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0080684";
boyOmdbinfoMovie4();
function boyOmdbinfoMovie4() {
    fetch(boymovie4url).then(function (response) {
        if (response.ok) { return response.json() }
    })

        .then(function (data4) {
            console.log(data4);
            displayboysnightomdb(data4);
        })

    function displayboysnightomdb(data4) {
        document.getElementById('boymovierating4').innerHTML += `<p id="">${data4.imdbRating} </p>`;
    }
}

//MOVIE5--lord of the rings: fellowship of the ring
var boymovie5url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0120737";
boyOmdbinfoMovie5();
function boyOmdbinfoMovie5() {
    fetch(boymovie5url).then(function (response) {
        if (response.ok) { return response.json() }
    })

        .then(function (data5) {
            console.log(data5);
            displayboysnightomdb(data5);
        })

    function displayboysnightomdb(data5) {
        document.getElementById('boymovierating5').innerHTML += `<p id="">${data5.imdbRating} </p>`;
    }
}

//MOVIE6--green snake
var boymovie6url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt15000314";
boyOmdbinfoMovie6();
function boyOmdbinfoMovie6() {
    fetch(boymovie6url).then(function (response) {
        if (response.ok) { return response.json() }
    })

        .then(function (data6) {
            console.log(data6);
            displayboysnightomdb(data6);
        })

    function displayboysnightomdb(data6) {
        document.getElementById('boymovierating6').innerHTML += `<p id="">${data6.imdbRating} </p>`;
    }
}
//Movie7--lord of the rings: two towers
var boymovie7url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0167261";
boyOmdbinfoMovie7();
function boyOmdbinfoMovie7() {
    fetch(boymovie7url).then(function (response) {
        if (response.ok) { return response.json() }
    })

        .then(function (data7) {
            console.log(data7);
            displayboysnightomdb(data7);
        })

    function displayboysnightomdb(data7) {
        document.getElementById('boymovierating7').innerHTML += `<p id="">${data7.imdbRating} </p>`;
    }
}

//Movie8--inception
var boymovie8url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt1375666";
boyOmdbinfoMovie8();
function boyOmdbinfoMovie8() {
    fetch(boymovie8url).then(function (response) {
        if (response.ok) { return response.json() }
    })

        .then(function (data8) {
            console.log(data8);
            displayboysnightomdb(data8);
        })

    function displayboysnightomdb(data8) {
        document.getElementById('boymovierating8').innerHTML += `<p id="">${data8.imdbRating} </p>`;
    }
}

//Movie9--demon slayer
var boymovie9url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt11032374";
boyOmdbinfoMovie9();
function boyOmdbinfoMovie9() {
    fetch(boymovie9url).then(function (response) {
        if (response.ok) { return response.json() }
    })

        .then(function (data9) {
            console.log(data9);
            displayboysnightomdb(data9);
        })

    function displayboysnightomdb(data9) {
        document.getElementById('boymovierating9').innerHTML += `<p id="">${data9.imdbRating} </p>`;
    }
}

//Movie10--Avengers: Endgame
var boymovie10url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt4154796";
boyOmdbinfoMovie10();
function boyOmdbinfoMovie10() {
    fetch(boymovie10url).then(function (response) {
        if (response.ok) { return response.json() }
    })

        .then(function (data10) {
            console.log(data10);
            displayboysnightomdb(data10);
        })

    function displayboysnightomdb(data10) {

        document.getElementById('boymovierating10').innerHTML += `<p id="">${data10.imdbRating} </p>`;
    }
}


//carosuel
var boysliderContainer = document.getElementById('boysSliderContainer');
var boyslider = document.getElementById('boysSlider');
var boycards = boyslider.getElementsByTagName('li');

//Number of cards to show in the homepage
var boyelementsToshow = 4;

//Responsive
if (document.body.clientWidth < 1000) {
    boyelementsToshow = 1;

} else if (document.body.clientWidth > 1000) {
    boyelementsToshow = 4;
}

var boysliderContainerWidth = boysliderContainer.clientWidth;
//To show 4 cards in homepage 
var boycardWidth = boysliderContainerWidth / boyelementsToshow;
//To set width to the slider container
boyslider.style.width = boycards.length * boycardWidth + 'px';
boyslider.style.transition = 'margin';
boyslider.style.transitionDuration = '1s';


for (let index = 0; index < boycards.length; index++) {
    const element = boycards[index];
    element.style.width = boycardWidth + 'px';
}
//To make prev and next button to stop sliding the cards when its reach the end.
function boysPrev() {
    //console.log(+slider.style.marginLeft.slice(0,-2))
    //console.log(-cardWidth*(cards.length-elementsToshow))
    if (+boyslider.style.marginLeft.slice(0, -2) != -boycardWidth * (boycards.length - boyelementsToshow))
    boyslider.style.marginLeft = ((+boyslider.style.marginLeft.slice(0, -2)) - boycardWidth) + 'px';//100px
}

function boysNext() {
    if (+boyslider.style.marginLeft.slice(0, -2) != 0)
    boyslider.style.marginLeft = ((+boyslider.style.marginLeft.slice(0, -2)) + boycardWidth) + 'px';
}