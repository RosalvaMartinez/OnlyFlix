//**************GIRLS NIGHT****************//
var carouselname = document.getElementById('girlsnight');
var apikey = "a4e2430bc83be09ef62dea94f12d573b";
var tmdburl = "https://api.themoviedb.org/3/movie/top_rated?api_key=a4e2430bc83be09ef62dea94f12d573b&page=1&with_genres=35,10749";
var image = "https://image.tmdb.org/t/p/w500";

tmdbinfo();

 function tmdbinfo(){
   fetch(tmdburl)
   .then(function(response) {
      if(response.ok){
         return response.json()
      }
   })

.then(function(data){
   console.log(data.results.slice(0,10));
  
   displaygirlsnight(data);
  
}) }
 
function displaygirlsnight(data) {

   var girlmoviepicIds = ["girlmoviepic1","girlmoviepic2","girlmoviepic3","girlmoviepic4","girlmoviepic5","girlmoviepic6","girlmoviepic7","girlmoviepic8","girlmoviepic9","girlmoviepic10"]
   var girlmovietitleIds = ["girlmovietitle1","girlmovietitle2","girlmovietitle3","girlmovietitle4","girlmovietitle5","girlmovietitle6","girlmovietitle7","girlmovietitle8","girlmovietitle9","girlmovietitle10"]
   var girlmovieoverviewIds = ["girlmovieoverview1","girlmovieoverview2","girlmovieoverview3","girlmovieoverview4","girlmovieoverview5","girlmovieoverview6","girlmovieoverview7","girlmovieoverview8","girlmovieoverview9","girlmovieoverview10"]
   var girlmoviepicList = 0,girlmovietitleList = 0,girlmovieoverviewList = 0;
 
   girlmoviepicIds.forEach(function(picid){
      document.getElementById(picid).setAttribute('src',image + data.results[girlmoviepicList].poster_path);
      girlmoviepicList++;
   })

   girlmovietitleIds.forEach(function(titleid){
      document.getElementById(titleid).innerHTML += `<h5 class="text-xl" id=""> ${data.results[girlmovietitleList].title}</h5> `;
      girlmovietitleList++;
   }) 
   
   girlmovieoverviewIds.forEach(function(overviewid){
      document.getElementById(overviewid).innerHTML += `<p id=""> ${data.results[girlmovieoverviewList].overview} </p>`;
      girlmovieoverviewList++;
   })}


   

var OMDBkey = "8f3f0682";
var OMDBkeyurl = "http://www.omdbapi.com/?apikey=8f3f0682";
//var movieids = ["tt0112870","tt0109830","tt13535456","tt0033045","tt0021749","tt10472884","tt1478839","tt0053604","tt0045152","tt0053291"]

//var movieidurl = "https://www.omdbapi.com/?apikey=b88cdd94&i="+movieids;

//MOVIE1
var girlmovie1url =  "https://www.omdbapi.com/?apikey=8f3f0682&i=tt0112870";
 OmdbinfoMovie1();
function OmdbinfoMovie1(){   
   fetch(girlmovie1url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data1){
   console.log(data1);  
   displaygirlsnightomdb(data1);
})

 function displaygirlsnightomdb(data1){
    document.getElementById('girlmovierating1').innerHTML += `<p id="">${data1.imdbRating} </p>`;
 } 
}

//MOVIE2
var girlmovie2url =  "https://www.omdbapi.com/?apikey=8f3f0682&i=tt0109830";
OmdbinfoMovie2();
function OmdbinfoMovie2(){   
   fetch(girlmovie2url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data2){
   console.log(data2);  
   displaygirlsnightomdb(data2);
})

function displaygirlsnightomdb(data2){
    document.getElementById('girlmovierating2').innerHTML += `<p id="">${data2.imdbRating} </p>`;
 }  
}

//MOVIE3
var girlmovie3url =  "https://www.omdbapi.com/?apikey=8f3f0682&i=tt13535456";
OmdbinfoMovie3();
function OmdbinfoMovie3(){   
   fetch(girlmovie3url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data3){
   console.log(data3);  
   displaygirlsnightomdb(data3);
})

function displaygirlsnightomdb(data3){
    document.getElementById('girlmovierating3').innerHTML += `<p id="">${data3.imdbRating} </p>`;
 }  
}

//MOVIE4
var girlmovie4url =  "https://www.omdbapi.com/?apikey=8f3f0682&i=tt0033045";
OmdbinfoMovie4();
function OmdbinfoMovie4(){   
   fetch(girlmovie4url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data4){
   console.log(data4);  
   displaygirlsnightomdb(data4);
})

function displaygirlsnightomdb(data4){
    document.getElementById('girlmovierating4').innerHTML += `<p id="">${data4.imdbRating} </p>`;
 }  
}

//MOVIE5
var girlmovie5url =  "https://www.omdbapi.com/?apikey=8f3f0682&i=tt0021749";
OmdbinfoMovie5();
function OmdbinfoMovie5(){   
   fetch(girlmovie5url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data5){
   console.log(data5);  
   displaygirlsnightomdb(data5);
})

function displaygirlsnightomdb(data5){
    document.getElementById('girlmovierating5').innerHTML += `<p id="">${data5.imdbRating} </p>`;
 }  
}

//MOVIE6
var girlmovie6url =  "https://www.omdbapi.com/?apikey=8f3f0682&i=tt10472884";
OmdbinfoMovie6();
function OmdbinfoMovie6(){   
   fetch(girlmovie6url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data6){
   console.log(data6);  
   displaygirlsnightomdb(data6);
})

function displaygirlsnightomdb(data6){
    document.getElementById('girlmovierating6').innerHTML += `<p id="">${data6.imdbRating} </p>`;
 }  
}

//MOVIE7
var girlmovie7url =  "https://www.omdbapi.com/?apikey=8f3f0682&i=tt1478839";
OmdbinfoMovie7();
function OmdbinfoMovie7(){   
   fetch(girlmovie7url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data7){
   console.log(data7);  
   displaygirlsnightomdb(data7);
})

function displaygirlsnightomdb(data7){
    document.getElementById('girlmovierating7').innerHTML += `<p id="">${data7.imdbRating} </p>`; 
 }  
}

//MOVIE8
var girlmovie8url =  "https://www.omdbapi.com/?apikey=8f3f0682&i=tt0053604";
OmdbinfoMovie8();
function OmdbinfoMovie8(){   
   fetch(girlmovie8url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data8){
   console.log(data8);  
   displaygirlsnightomdb(data8);
})

function displaygirlsnightomdb(data8){
    document.getElementById('girlmovierating8').innerHTML += `<p id="">${data8.imdbRating} </p>`;
 }  
}

//MOVIE9
var girlmovie9url =  "https://www.omdbapi.com/?apikey=8f3f0682&i=tt0045152";
OmdbinfoMovie9();
function OmdbinfoMovie9(){   
   fetch(girlmovie9url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data9){
   console.log(data9);  
   displaygirlsnightomdb(data9);
})

function displaygirlsnightomdb(data9){
    document.getElementById('girlmovierating9').innerHTML += `<p id="">${data9.imdbRating} </p>`;
 }  
}

//MOVIE10
var girlmovie10url =  "https://www.omdbapi.com/?apikey=8f3f0682&i=tt0053291";
OmdbinfoMovie10();
function OmdbinfoMovie10(){   
   fetch(girlmovie10url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data10){
   console.log(data10);  
   displaygirlsnightomdb(data10);
})

function displaygirlsnightomdb(data10){
    
    document.getElementById('girlmovierating10').innerHTML += `<p id=""> ${data10.imdbRating} </p>`;
 }  
}


//carosuel
var sliderContainer = document.getElementById('sliderContainer');
var slider = document.getElementById('slider');
var cards = slider.getElementsByTagName('li');

//Number of cards to show in the homepage
var elementsToshow = 4;

//Responsive
if(document.body.clientWidth<1000){
   elementsToshow = 1;

}else if(document.body.clientWidth>1000){
   elementsToshow = 4;
}

var sliderContainerWidth = sliderContainer.clientWidth;
//To show 4 cards in homepage 
var cardWidth = sliderContainerWidth / elementsToshow;
//To set width to the slider container
slider.style.width = cards.length*cardWidth+'px';
slider.style.transition = 'margin';
slider.style.transitionDuration = '1s';


for (let index = 0; index < cards.length; index++) {
   const element = cards[index];
   element.style.width = cardWidth+'px';
}
//To make prev and next button to stop sliding the cards when its reach the end.
function prev(){
   //console.log(+slider.style.marginLeft.slice(0,-2))
   //console.log(-cardWidth*(cards.length-elementsToshow))
   if(+slider.style.marginLeft.slice(0,-2) != -cardWidth*(cards.length - elementsToshow))
   slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2)) -cardWidth)+ 'px';//100px
}

function next(){
   if(+slider.style.marginLeft.slice(0,-2)!=0)
   slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2)) +cardWidth)+ 'px';
}


//**************BOYS NIGHT****************//
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



//Family Night//
var carouselname = document.getElementById('famNight');
var familyKey = "f6b6d2c3417b1e02fc001c1d391d2590";
var familyURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + familyKey + '&page=1&with_genres=10751'
var image = "https://image.tmdb.org/t/p/w185";

famtmdbinfo();

 function famtmdbinfo(){
   fetch(familyURL)
   .then(function(response) {
      if(response.ok){
         return response.json()
      }
   })

.then(function(data){
   console.log(data.results.slice(0,10));
  
   displayfamnight(data);
  
}) }
 
function displayfamnight(data) {

   var famMoviePicIds = ["famMoviePic1","famMoviePic2","famMoviePic3","famMoviePic4","famMoviePic5","famMoviePic6","famMoviePic7","famMoviePic8","famMoviePic9","famMoviePic10"]
   var famMovieTitleIds = ["famMovieTitle1","famMovieTitle2","famMovieTitle3","famMovieTitle4","famMovieTitle5","famMovieTitle6","famMovieTitle7","famMovieTitle8","famMovieTitle9","famMovieTitle10"]
   var famMovieOverviewIds = ["famMovieOverview1","famMovieOverview2","famMovieOverview3","famMovieOverview4","famMovieOverview5","famMovieOverview6","famMovieOverview7","famMovieOverview8","famMovieOverview9","famMovieOverview10"]
   var famMoviepicList = 0,famMovieTitleList = 0,famMovieOverviewList = 0;
 
   famMoviePicIds.forEach(function(picid){
      document.getElementById(picid).setAttribute('src',image + data.results[famMoviepicList].poster_path);
      famMoviepicList++;
   })

   famMovieTitleIds.forEach(function(titleid){
      document.getElementById(titleid).innerHTML += `<h5 class="text-xl" id=""> ${data.results[famMovieTitleList].title}</h5> `;
      famMovieTitleList++;
   }) 
   
   famMovieOverviewIds.forEach(function(overviewid){
      document.getElementById(overviewid).innerHTML += `<p id=""> ${data.results[famMovieOverviewList].overview} </p>`;
      famMovieOverviewList++;
   })}


   

var famOMDBkey = "e6c5307a";
var famOMDBkeyurl = "http://www.omdbapi.com/?apikey=e6c5307a";
//var famMovieIds = ["tt10032342","tt0245429","tt3153634","tt5198068","tt3061046","tt0038650","tt4729430","tt0110357","tt2140203","tt12816348"]
  

//famMovieidurl = "https://www.omdbapi.com/?apikey=e6c5307a&i="+famMovieIds;

//MOVIE1
var famMovie1url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt10032342";
 famOmdbinfoMovie1();
function famOmdbinfoMovie1(){   
   fetch(famMovie1url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data1){
   console.log(data1);  
   displayfamnightomdb(data1);
})

 function displayfamnightomdb(data1){
   document.getElementById('famMovieRating1').innerHTML += `<p id=""> ${data1.imdbRating} </p>`;
}
}

//MOVIE2
var famMovie2url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt0245429";
famOmdbinfoMovie2();
function famOmdbinfoMovie2(){   
   fetch(famMovie2url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data2){
   console.log(data2);  
   displayfamnightomdb(data2);
})

function displayfamnightomdb(data2){
   document.getElementById('famMovieRating2').innerHTML += `<p id=""> ${data2.imdbRating} </p>`; 
 }  
}

//MOVIE3
var famMovie3url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt3153634";
famOmdbinfoMovie3();
function famOmdbinfoMovie3(){   
   fetch(famMovie3url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data3){
   console.log(data3);  
   displayfamsnightomdb(data3);
})

function displayfamsnightomdb(data3){
   document.getElementById('famMovieRating3').innerHTML += `<p id=""> ${data3.imdbRating} </p>`;
 }  
}

//MOVIE4
var famMovie4url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt5198068";
famOmdbinfoMovie4();
function famOmdbinfoMovie4(){   
   fetch(famMovie4url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data4){
   console.log(data4);  
   displayfamnightomdb(data4);
})

function displayfamnightomdb(data4){
   document.getElementById('famMovieRating4').innerHTML += `<p id=""> ${data4.imdbRating} </p>`;
 }  
}

//MOVIE5
 var famMovie5url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt3061046";
  famOmdbinfoMovie5();
function famOmdbinfoMovie5(){   
   fetch(famMovie5url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data5){
   console.log(data5);  
   displayfamnightomdb(data5);
})

function displayfamnightomdb(data5){
   document.getElementById('famMovieRating5').innerHTML += `<p id=""> ${data5.imdbRating} </p>`;
 }  
}

var famMovie6url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt0038650";
famOmdbinfoMovie6();
function famOmdbinfoMovie6(){   
   fetch(famMovie6url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data6){
   console.log(data6);  
   displayfamnightomdb(data6);
})

function displayfamnightomdb(data6){
   document.getElementById('famMovieRating6').innerHTML += `<p id=""> ${data6.imdbRating} </p>`;
 }  
}
//Movie - 7
var famMovie7url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt4729430";
famOmdbinfoMovie7();
function famOmdbinfoMovie7(){   
   fetch(famMovie7url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data7){
   console.log(data7);  
   displayfamnightomdb(data7);
})

function displayfamnightomdb(data7){
   document.getElementById('famMovieRating7').innerHTML += `<p id=""> ${data7.imdbRating} </p>`;
 }  
}

//Movie - 8
var famMovie8url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt0038650";
famOmdbinfoMovie8();
function famOmdbinfoMovie8(){   
   fetch(famMovie8url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data8){
   console.log(data8);  
   displayfamnightomdb(data8);
})

function displayfamnightomdb(data8){
   document.getElementById('famMovieRating8').innerHTML += `<p id=""> ${data8.imdbRating} </p>`;
 }  
}

//Movie - 9
var famMovie9url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt2140203";
famOmdbinfoMovie9();
function famOmdbinfoMovie9(){   
   fetch(famMovie9url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data9){
   console.log(data9);  
   displayfamnightomdb(data9);
})

function displayfamnightomdb(data9){
   document.getElementById('famMovieRating9').innerHTML += `<p id=""> ${data9.imdbRating} </p>`; 
 }  
}

//Movie - 10
var famMovie10url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt12816348";
famOmdbinfoMovie10();
function famOmdbinfoMovie10(){   
   fetch(famMovie10url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data10){
   console.log(data10);  
   displayfamnightomdb(data10);
})

function displayfamnightomdb(data10){
    
   document.getElementById('famMovieRating10').innerHTML += `<p id=""> ${data10.imdbRating} </p>`;
 }  
}


//carosuel
var famSliderContainer = document.getElementById('famSliderContainer');
var famSlider = document.getElementById('famSlider');
var famCards = famSlider.getElementsByTagName('li');

//Number of cards to show in the homepage
var famelementsToshow = 4;

//Responsive
if(document.body.clientWidth < 1000){
   famelementsToshow = 1;

}else if(document.body.clientWidth>1000){
   famelementsToshow = 4;
}

var famsliderContainerWidth = famSliderContainer.clientWidth;
//To show 4 cards in homepage 
var famcardWidth = famsliderContainerWidth / famelementsToshow;
//To set width to the slider container
famSlider.style.width = famCards.length*famcardWidth+'px';
famSlider.style.transition = 'margin';
famSlider.style.transitionDuration = '1s';


for (let index = 0; index < famCards.length; index++) {
   const element = famCards[index];
   element.style.width = famcardWidth+'px';
}
//To make prev and next button to stop sliding the cards when its reach the end.
function famPrev(){
   //console.log(+slider.style.marginLeft.slice(0,-2))
   //console.log(-cardWidth*(cards.length-elementsToshow))
   if(+famSlider.style.marginLeft.slice(0, -2) != -famcardWidth* (famCards.length - famelementsToshow))
   famSlider.style.marginLeft = ((+famSlider.style.marginLeft.slice(0,-2)) -famcardWidth)+ 'px';//100px
}

function famNext(){
   if(+famSlider.style.marginLeft.slice(0,-2)!=0)
   famSlider.style.marginLeft = ((+famSlider.style.marginLeft.slice(0,-2)) +famcardWidth)+ 'px';
}



                        //**************SPOOKY NIGHT****************//

var carouselname = document.getElementById('spookynight');
var apikey = "a4e2430bc83be09ef62dea94f12d573b";
var tmdburl = "https://api.themoviedb.org/3/movie/top_rated?api_key=a4e2430bc83be09ef62dea94f12d573b&page=1&with_genres=";
var spookyNightGenres = "27";
var image = "https://image.tmdb.org/t/p/w185";
//img variable gone
//change to your genre function name
spookyNightTmdbInfo();
//fetch spooky night top 10 movies--CHANGE TO YOUR GENRE
 function spookyNightTmdbInfo(){
   fetch(tmdburl + spookyNightGenres)
   .then(function(response) {
      if(response.ok){
         return response.json() 
      }
   })

.then(function(data){
   console.log(data.results.slice(0,10));
  
   displayspookynight(data);
  
}) }
//display your genre information into carousel
 //CHANGE TO YOUR GENRE
function displayspookynight(data) {

   var spookymoviepicIds = ["spookymoviepic1","spookymoviepic2","spookymoviepic3","spookymoviepic4","spookymoviepic5","spookymoviepic6","spookymoviepic7","spookymoviepic8","spookymoviepic9","spookymoviepic10"]
   var spookymovietitleIds = ["spookymovietitle1","spookymovietitle2","spookymovietitle3","spookymovietitle4","spookymovietitle5","spookymovietitle6","spookymovietitle7","spookymovietitle8","spookymovietitle9","spookymovietitle10"]
   var spookymovieoverviewIds = ["spookymovieoverview1","spookymovieoverview2","spookymovieoverview3","spookymovieoverview4","spookymovieoverview5","spookymovieoverview6","spookymovieoverview7","spookymovieoverview8","spookymovieoverview9","spookymovieoverview10"]
   var spookymoviepicList = 0,spookymovietitleList = 0,spookymovieoverviewList = 0;
 
   spookymoviepicIds.forEach(function(picid){
      document.getElementById(picid).setAttribute('src',image + data.results[spookymoviepicList].poster_path);
      spookymoviepicList++;
   })

   spookymovietitleIds.forEach(function(titleid){
      document.getElementById(titleid).innerHTML += `<h5 class="text-xl" id=""> ${data.results[spookymovietitleList].title}</h5> `;
      spookymovietitleList++;
   }) 
   
   spookymovieoverviewIds.forEach(function(overviewid){
      document.getElementById(overviewid).innerHTML += `<p id=""> ${data.results[spookymovieoverviewList].overview} </p>`;
      spookymovieoverviewList++;
   })}


   
//gets ratings from omdb
var OMDBkey = "9a6b53be";
var OMDBkeyurl = "http://www.omdbapi.com/?apikey=9a6b53be";
//var movieids = ["tt0112870","tt0109830","tt13535456","tt0033045","tt0021749"]

//var movieidurl = "https://www.omdbapi.com/?apikey=b88cdd94&i="+movieids;
//CHANGE TO YOUR GENRE MOVIES
//SPOOKY NIGHT MOVIE1
var spookymovie1url =  "https://www.omdbapi.com/?apikey=9a6b53be&i=tt0054215";
 OmdbinfoSpookyMovie1();
function OmdbinfoSpookyMovie1(){   
   fetch(spookymovie1url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data1){
   console.log(data1);  
   displayspookynightomdb(data1);
})

 function displayspookynightomdb(data1){
   document.getElementById('spookymovierating1').innerHTML += `<p id=""> ${data1.imdbRating} </p>`;
 } 
}

//SPOOKY NIGHT MOVIE2
var spookymovie2url =  "https://www.omdbapi.com/?apikey=9a6b53be&i=tt0081505";
OmdbinfoSpookyMovie2();
function OmdbinfoSpookyMovie2(){   
   fetch(spookymovie2url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data2){
   console.log(data2);  
   displayspookynightomdb(data2);
})

function displayspookynightomdb(data2){
   document.getElementById('spookymovierating2').innerHTML += `<p id=""> ${data2.imdbRating} </p>`; 
 }  
}

//SPOOKY NIGHT MOVIE3
var spookymovie3url =  "https://www.omdbapi.com/?apikey=9a6b53be&i=tt2396396";
OmdbinfoSpookyMovie3();
function OmdbinfoSpookyMovie3(){   
   fetch(spookymovie3url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data3){
   console.log(data3);  
   displaySpookynightomdb(data3);
})

function displaySpookynightomdb(data3){
   document.getElementById('spookymovierating3').innerHTML += `<p id=""> ${data3.imdbRating} </p>`; 
 }  
}

//SPOOKY NIGHT MOVIE4
var spookymovie4url =  "https://www.omdbapi.com/?apikey=9a6b53be&i=tt4620956";
OmdbinfoSpookyMovie4();
function OmdbinfoSpookyMovie4(){   
   fetch(spookymovie4url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data4){
   console.log(data4);  
   displaySpookynightomdb(data4);
})

function displaySpookynightomdb(data4){
   document.getElementById('spookymovierating4').innerHTML += `<p id=""> ${data4.imdbRating} </p>`; 
 }  
}

//SPOOKY NIGHT MOVIE5
var spookymovie5url =  "https://www.omdbapi.com/?apikey=9a6b53be&i=tt0078748";
OmdbinfoSpookyMovie5();
function OmdbinfoSpookyMovie5(){   
   fetch(spookymovie5url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data5){
   console.log(data5);  
   displaySpookynightomdb(data5);
})

function displaySpookynightomdb(data5){
   document.getElementById('spookymovierating5').innerHTML += `<p id=""> ${data5.imdbRating} </p>`; 
 }  
}

//SPOOKY NIGHT MOVIE6
var spookymovie6url =  "https://www.omdbapi.com/?apikey=9a6b53be&i=tt8594324";
 OmdbinfoSpookyMovie6();
function OmdbinfoSpookyMovie6(){   
   fetch(spookymovie6url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data6){
   console.log(data6);  
   displayspookynightomdb(data6);
})

 function displayspookynightomdb(data6){
   document.getElementById('spookymovierating6').innerHTML += `<p id=""> ${data6.imdbRating} </p>`;
 } 
}

//SPOOKY NIGHT MOVIE7
var spookymovie7url =  "https://www.omdbapi.com/?apikey=9a6b53be&i=tt8594324";
OmdbinfoSpookyMovie7();
function OmdbinfoSpookyMovie7(){   
   fetch(spookymovie7url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data7){
   console.log(data7);  
   displayspookynightomdb(data7);
})

function displayspookynightomdb(data7){
   document.getElementById('spookymovierating7').innerHTML += `<p id=""> ${data7.imdbRating} </p>`; 
 }  
}

//SPOOKY NIGHT MOVIE8
var spookymovie8url =  "https://www.omdbapi.com/?apikey=9a6b53be&i=tt0010323";
OmdbinfoSpookyMovie8();
function OmdbinfoSpookyMovie8(){   
   fetch(spookymovie8url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data8){
   console.log(data8);  
   displaySpookynightomdb(data8);
})

function displaySpookynightomdb(data8){
   document.getElementById('spookymovierating8').innerHTML += `<p id=""> ${data8.imdbRating} </p>`; 
 }  
}

//SPOOKY NIGHT MOVIE9
var spookymovie9url =  "https://www.omdbapi.com/?apikey=9a6b53be&i=tt0056687";
OmdbinfoSpookyMovie9();
function OmdbinfoSpookyMovie9(){   
   fetch(spookymovie9url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data9){
   console.log(data9);  
   displaySpookynightomdb(data9);
})

function displaySpookynightomdb(data9){
   document.getElementById('spookymovierating9').innerHTML += `<p id=""> ${data9.imdbRating} </p>`; 
 }  
}

//SPOOKY NIGHT MOVIE10
var spookymovie10url =  "https://www.omdbapi.com/?apikey=9a6b53be&i=tt0016847";
OmdbinfoSpookyMovie10();
function OmdbinfoSpookyMovie10(){   
   fetch(spookymovie10url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data10){
   console.log(data10);  
   displaySpookynightomdb(data10);
})

function displaySpookynightomdb(data10){
   document.getElementById('spookymovierating10').innerHTML += `<p id=""> ${data10.imdbRating} </p>`; 
 }  
}

//carosuel
var spookySliderContainer = document.getElementById('spookySliderContainer');
var spookySlider = document.getElementById('spookySlider');
var spookyCards = spookySlider.getElementsByTagName('li');

//Number of cards to show in the homepage
var spookyElementsToshow = 4;

//Responsive
if(document.body.clientWidth<1000){
   spookyElementsToshow = 1;

}else if(document.body.clientWidth>1000){
   spookyElementsToshow = 4;
}

var spookySliderContainerWidth = spookySliderContainer.clientWidth;
//To show 4 cards in homepage 
var spookyCardWidth = spookySliderContainerWidth / spookyElementsToshow;
//To set width to the slider container
spookySlider.style.width = spookyCards.length*spookyCardWidth+'px';
spookySlider.style.transition = 'margin';
spookySlider.style.transitionDuration = '1s';


for (let index = 0; index < spookyCards.length; index++) {
   const element = spookyCards[index];
   element.style.width = spookyCardWidth+'px';
}
//To make prev and next button to stop sliding the cards when its reach the end.
function spookyPrev(){
   //console.log(+slider.style.marginLeft.slice(0,-2))
   //console.log(-cardWidth*(cards.length-elementsToshow))
   if(+spookySlider.style.marginLeft.slice(0,-2) != -spookyCardWidth*(spookyCards.length - spookyElementsToshow))
   spookySlider.style.marginLeft = ((+spookySlider.style.marginLeft.slice(0,-2)) -spookyCardWidth)+ 'px';//100px
}

function spookyNext(){
   if(+spookySlider.style.marginLeft.slice(0,-2)!=0)
   spookySlider.style.marginLeft = ((+spookySlider.style.marginLeft.slice(0,-2)) +spookyCardWidth)+ 'px';
}