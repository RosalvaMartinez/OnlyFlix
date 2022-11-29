//******GIRLS NIGHT */
// change to your genre codes
var carouselname = document.getElementById('girlsnight');
var apikey = "a4e2430bc83be09ef62dea94f12d573b";
var tmdburl = "https://api.themoviedb.org/3/movie/top_rated?api_key=a4e2430bc83be09ef62dea94f12d573b&page=1&with_genres=";
var girlsNightGenres = "35,10749";
var image = "https://image.tmdb.org/t/p/w500";
//change to your genre function name
girlsNightTmdbInfo();
//fetch girls night top 10 movies--CHANGE TO YOUR GENRE
 function girlsNightTmdbInfo(){
   fetch(tmdburl + girlsNightGenres)
   .then(function(response) {
      if(response.ok){
         return response.json()
      }
   })

.then(function(data){
   console.log(data.results.slice(0,11));
  
   displaygirlsnight(data);
  
}) }
//display your genre information into carousel
 //CHANGE TO YOUR GENRE
function displaygirlsnight(data) {

   var girlmoviepicIds = ["girlmoviepic1","girlmoviepic2","girlmoviepic3","girlmoviepic4","girlmoviepic5"]
   var girlmovietitleIds = ["girlmovietitle1","girlmovietitle2","girlmovietitle3","girlmovietitle4","girlmovietitle5"]
   var girlmovieoverviewIds = ["girlmovieoverview1","girlmovieoverview2","girlmovieoverview3","girlmovieoverview4","girlmovieoverview5"]
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


   
//gets ratings from omdb
var OMDBkey = "b88cdd94";
var OMDBkeyurl = "http://www.omdbapi.com/?apikey=b88cdd94";
//var movieids = ["tt0112870","tt0109830","tt13535456","tt0033045","tt0021749"]

//var movieidurl = "https://www.omdbapi.com/?apikey=b88cdd94&i="+movieids;
//CHANGE TO YOUR GENRE MOVIES
//GIRLS NIGHT MOVIE1
var girlmovie1url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0112870";
 OmdbinfoMovie1();
function OmdbinfoMovie1(){   
   fetch(girlmovie1url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data1){
   displaygirlsnightomdb(data1);
})

 function displaygirlsnightomdb(data1){
   document.getElementById('girlmovierating1').innerHTML += `<p id=""> ${data1.imdbRating} </p>`;
 } 
}

//GIRLS NIGHT MOVIE2
var girlmovie2url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0109830";
OmdbinfoMovie2();
function OmdbinfoMovie2(){   
   fetch(girlmovie2url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data2){
   displaygirlsnightomdb(data2);
})

function displaygirlsnightomdb(data2){
   document.getElementById('girlmovierating2').innerHTML += `<p id=""> ${data2.imdbRating} </p>`; 
 }  
}

//GIRLS NIGHT MOVIE3
var girlmovie3url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt13535456";
OmdbinfoMovie3();
function OmdbinfoMovie3(){   
   fetch(girlmovie3url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data3){
   displaygirlsnightomdb(data3);
})

function displaygirlsnightomdb(data3){
   document.getElementById('girlmovierating3').innerHTML += `<p id=""> ${data3.imdbRating} </p>`; 
 }  
}

//GIRLS NIGHT MOVIE4
var girlmovie4url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0033045";
OmdbinfoMovie4();
function OmdbinfoMovie4(){   
   fetch(girlmovie4url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data4){
   displaygirlsnightomdb(data4);
})

function displaygirlsnightomdb(data4){
   document.getElementById('girlmovierating4').innerHTML += `<p id=""> ${data4.imdbRating} </p>`; 
 }  
}

//GIRLS NIGHT MOVIE5
var girlmovie5url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0021749";
OmdbinfoMovie5();
function OmdbinfoMovie5(){   
   fetch(girlmovie5url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data5){
   displaygirlsnightomdb(data5);
})

function displaygirlsnightomdb(data5){
   document.getElementById('girlmovierating5').innerHTML += `<p id=""> ${data5.imdbRating} </p>`; 
 }  
}

<<<<<<< HEAD
//*******BOYS NIGHT--Jess' part /
var boysNightCarousel = document.getElementById('boysNight');
var apeMonkey = "a4e2430bc83be09ef62dea94f12d573b";
var boysNightGenres = "28,12";
var boysNightMovies = [];

//change to your genre function name
boysNightTmdbInfo();
//fetch girls night top 10 movies--CHANGE TO YOUR GENRE
 function boysNightTmdbInfo(){
   fetch(tmdburl + boysNightGenres)
   .then(function(response) {
      if(response.ok){
         return response.json()
      }
   })
.then(function(data){
   console.log(data.results.slice(0,11));
  
   displayboysnight(data);
  
}) }
//display your genre information into carousel
 //CHANGE TO YOUR GENRE
function displayboysnight(data) {
    var boyMovieRatings = ['boyMovieRating1', 'boyMovieRating2','boyMovieRating3','boyMovieRating4','boyMovieRating5','boyMovieRating6','boyMovieRating7','boyMovieRating8','boyMovieRating9','boyMovieRating10'
]

   var boymoviepicIds = ["boyMoviePic1","boyMoviePic2","boyMoviePic3","boyMoviePic4","boyMoviePic5","boyMoviePic6","boyMoviePic7","boyMoviePic8","boyMoviePic9","boyMoviePic10"];
   var boymovietitleIds = ["boyMovieTitle1","boyMovieTitle2","boyMovieTitle3","boyMovieTitle4","boyMovieTitle5","boyMovieTitle6","boyMovieTitle7","boyMovieTitle8","boyMovieTitle9","boyMovieTitle10"];
   var boymovieoverviewIds = ["boyMovieOverview1","boyMovieOverview2","boyMovieOverview3","boyMovieOverview4","boyMovieOverview5","boyMovieOverview6","boyMovieOverview7","boyMovieOverview8","boyMovieOverview9","boyMovieOverview10"];
   var boymoviepicList = 0,boymovietitleList = 0,boymovieoverviewList = 0;
 
   boymoviepicIds.forEach(function(picid){
      document.getElementById(picid).setAttribute('src',image + data.results[boymoviepicList].poster_path);
      boymoviepicList++;
   })

   boymovietitleIds.forEach(function(titleid){
      document.getElementById(titleid).innerHTML += `<h5 class="text-xl" id=""> ${data.results[boymovietitleList].title}</h5> `;
      boymovietitleList++;
   }) 
   
   boymovieoverviewIds.forEach(function(overviewid){
      document.getElementById(overviewid).innerHTML += `<p id=""> ${data.results[boymovieoverviewList].overview} </p>`;
      boymovieoverviewList++;
   })}

//gets ratings from omdb
var OMDBkey = "b88cdd94";
var OMDBkeyurl = "http://www.omdbapi.com/?apikey=b88cdd94";

//CHANGE TO YOUR GENRE MOVIES
//BOYS NIGHT MOVIE1
//lord of the rings: return of the king
var boymovie1url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0167260";
boysOmdbinfoMovie1();
function boysOmdbinfoMovie1(){   
    fetch(boymovie1url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data1){
    console.log(data1);
    displayboysnightomdb(data1);
})

function displayboysnightomdb(data1){
    document.getElementById('boyMovieRating1').innerHTML += `<p id=""> ${data1.imdbRating} </p>`;
} 
}

// //BOYS NIGHT MOVIE2
//primal
var boymovie2url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt11191124";
boysOmdbinfoMovie2();
function boysOmdbinfoMovie2(){   
    fetch(boymovie2url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data2){
    console.log(data2);  
    displayboysnightomdb(data2);
})

function displayboysnightomdb(data2){
    document.getElementById('boyMovieRating2').innerHTML += `<p id=""> ${data2.imdbRating} </p>`; 
}  
}

// //BOYS NIGHT MOVIE3
//into the spiderverse
var boymovie3url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt4633694";
boyOmdbinfoMovie3();
function boyOmdbinfoMovie3(){   
    fetch(boymovie3url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data3){
    console.log(data3);  
    displayboysnightomdb(data3);
})

function displayboysnightomdb(data3){
    document.getElementById('boyMovieRating3').innerHTML += `<p id=""> ${data3.imdbRating} </p>`; 
}  
}

// //BOYS NIGHT MOVIE4
//empire strikes back
var boymovie4url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0080684";
boyOmdbinfoMovie4();
function boyOmdbinfoMovie4(){   
    fetch(boymovie4url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data4){
    console.log(data4);  
    displayboysnightomdb(data4);
})

function displayboysnightomdb(data4){
    document.getElementById('boyMovieRating4').innerHTML += `<p id=""> ${data4.imdbRating} </p>`; 
}  
}

// //BOYS NIGHT MOVIE5
//fellowship of the ring
var boymovie5url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0120737";
boyOmdbinfoMovie5();
function boyOmdbinfoMovie5(){   
    fetch(boymovie5url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data5){
    console.log(data5);  
    displayboysnightomdb(data5);
})
=======
//*******BOYS NIGHT */
//change to your genre codes
var carouselname = document.getElementById('girlsnight');
var apikey = "a4e2430bc83be09ef62dea94f12d573b";

var tmdburl = "https://api.themoviedb.org/3/movie/top_rated?api_key=a4e2430bc83be09ef62dea94f12d573b&page=2&with_genres=35,10749";
var image = "https://image.tmdb.org/t/p/w185";

>>>>>>> main

function displayboysnightomdb(data5){
    document.getElementById('boyMovieRating5').innerHTML += `<p id=""> ${data5.imdbRating} </p>`; 
}  
}

// //BOYS NIGHT MOVIE6
//green snake
var boymovie6url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt15000314";
boyOmdbinfoMovie6();
function boyOmdbinfoMovie6(){   
    fetch(boymovie6url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data6){
    console.log(data6);  
    displayboysnightomdb(data6);
})

function displayboysnightomdb(data6){
    document.getElementById('boyMovieRating6').innerHTML += `<p id=""> ${data6.imdbRating} </p>`; 
}  
}

// //BOYS NIGHT MOVIE7
//two towers
var boymovie7url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0167261";
boyOmdbinfoMovie7();
function boyOmdbinfoMovie7(){   
    fetch(boymovie7url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data7){
    console.log(data7);  
    displayboysnightomdb(data7);
})

function displayboysnightomdb(data7){
    document.getElementById('boyMovieRating7').innerHTML += `<p id=""> ${data7.imdbRating} </p>`; 
}  
}

// //BOYS NIGHT MOVIE8
//inception
var boymovie8url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt1375666";
boyOmdbinfoMovie8();
function boyOmdbinfoMovie8(){   
    fetch(boymovie8url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data8){
    console.log(data8);  
    displayboysnightomdb(data8);
})

function displayboysnightomdb(data8){
    document.getElementById('boyMovieRating8').innerHTML += `<p id=""> ${data8.imdbRating} </p>`; 
}  
}

// //BOYS NIGHT MOVIE9
//demon slayer
var boymovie9url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt11032374";
boyOmdbinfoMovie9();
function boyOmdbinfoMovie9(){   
    fetch(boymovie9url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data9){
    console.log(data9);  
    displayboysnightomdb(data9);
})

function displayboysnightomdb(data9){
    document.getElementById('boyMovieRating9').innerHTML += `<p id=""> ${data9.imdbRating} </p>`; 
}  
}

// //BOYS NIGHT MOVIE10
//endgame
var boymovie10url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt4154796";
boyOmdbinfoMovie10();
function boyOmdbinfoMovie10(){   
    fetch(boymovie10url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data10){
    console.log(data10);  
    displayboysnightomdb(data10);
})

function displayboysnightomdb(data10){
    document.getElementById('boyMovieRating10').innerHTML += `<p id=""> ${data10.imdbRating} </p>`; 
}  
}

//*******FAMILY NIGHT */
//change to your genre codes
var carouselname = document.getElementById('girlsnight');
var apikey = "a4e2430bc83be09ef62dea94f12d573b";
var tmdburl = "https://api.themoviedb.org/3/movie/top_rated?api_key=a4e2430bc83be09ef62dea94f12d573b&page=1&with_genres=";
var girlsNightGenres = "35,10749";
var image = "https://image.tmdb.org/t/p/w500";
//change to your genre function name
girlsNightTmdbInfo();
//fetch girls night top 10 movies--CHANGE TO YOUR GENRE
 function girlsNightTmdbInfo(){
   fetch(tmdburl + girlsNightGenres)
   .then(function(response) {
      if(response.ok){
         return response.json()
      }
   })

.then(function(data){

   console.log(data.results.slice(0,10));

  
   displaygirlsnight(data);
  
}) }
//display your genre information into carousel
 //CHANGE TO YOUR GENRE
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


   
//gets ratings from omdb
var OMDBkey = "b88cdd94";
var OMDBkeyurl = "http://www.omdbapi.com/?apikey=b88cdd94";
//var movieids = ["tt0018742","tt0211915","tt3544112","tt0046250","tt8200456","tt3783958","tt0014429","tt13118012","tt0025316","tt8619812"]

//var movieidurl = "https://www.omdbapi.com/?apikey=b88cdd94&i="+movieids;
//CHANGE TO YOUR GENRE MOVIES
//GIRLS NIGHT MOVIE1
var girlmovie1url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0112870";
 OmdbinfoMovie1();
function OmdbinfoMovie1(){   
   fetch(girlmovie1url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data1){
   displaygirlsnightomdb(data1);
})

 function displaygirlsnightomdb(data1){
   document.getElementById('girlmovierating1').innerHTML += `<p id=""> ${data1.imdbRating} </p>`;
 } 
}

//GIRLS NIGHT MOVIE2
var girlmovie2url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0109830";
OmdbinfoMovie2();
function OmdbinfoMovie2(){   
   fetch(girlmovie2url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data2){
   displaygirlsnightomdb(data2);
})

function displaygirlsnightomdb(data2){
   document.getElementById('girlmovierating2').innerHTML += `<p id=""> ${data2.imdbRating} </p>`; 
 }  
}

//GIRLS NIGHT MOVIE3
var girlmovie3url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt13535456";
OmdbinfoMovie3();
function OmdbinfoMovie3(){   
   fetch(girlmovie3url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data3){
   displaygirlsnightomdb(data3);
})

function displaygirlsnightomdb(data3){
   document.getElementById('girlmovierating3').innerHTML += `<p id=""> ${data3.imdbRating} </p>`; 
 }  
}

//GIRLS NIGHT MOVIE4
var girlmovie4url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0033045";
OmdbinfoMovie4();
function OmdbinfoMovie4(){   
   fetch(girlmovie4url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data4){
   displaygirlsnightomdb(data4);
})

function displaygirlsnightomdb(data4){
   document.getElementById('girlmovierating4').innerHTML += `<p id=""> ${data4.imdbRating} </p>`; 
 }  
}

//GIRLS NIGHT MOVIE5
var girlmovie5url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0021749";
OmdbinfoMovie5();
function OmdbinfoMovie5(){   
   fetch(girlmovie5url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data5){
   displaygirlsnightomdb(data5);
})

function displaygirlsnightomdb(data5){
   document.getElementById('girlmovierating5').innerHTML += `<p id=""> ${data5.imdbRating} </p>`; 
 }  
}

//*******SPOOKY NIGHT/
//change to your genre codes
var carouselname = document.getElementById('girlsnight');
var apikey = "a4e2430bc83be09ef62dea94f12d573b";
var tmdburl = "https://api.themoviedb.org/3/movie/top_rated?api_key=a4e2430bc83be09ef62dea94f12d573b&page=1&with_genres=";
var girlsNightGenres = "35,10749";
var image = "https://image.tmdb.org/t/p/w500";
//change to your genre function name
girlsNightTmdbInfo();
//fetch girls night top 10 movies--CHANGE TO YOUR GENRE
 function girlsNightTmdbInfo(){
   fetch(tmdburl + girlsNightGenres)
   .then(function(response) {
      if(response.ok){
         return response.json()
      }
   })


//MOVIE1
var girlmovie1url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0018742";

 OmdbinfoMovie1();
function OmdbinfoMovie1(){   
   fetch(girlmovie1url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data1){
   displaygirlsnightomdb(data1);
})

 function displaygirlsnightomdb(data1){
   document.getElementById('girlmovierating1').innerHTML += `<p id=""> ${data1.imdbRating} </p>`;
 } 
}


//MOVIE2
var girlmovie2url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0211915";

OmdbinfoMovie2();
function OmdbinfoMovie2(){   
   fetch(girlmovie2url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data2){
   displaygirlsnightomdb(data2);
})

function displaygirlsnightomdb(data2){
   document.getElementById('girlmovierating2').innerHTML += `<p id=""> ${data2.imdbRating} </p>`;
 }  
}


//MOVIE3
var girlmovie3url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt3544112";

OmdbinfoMovie3();
function OmdbinfoMovie3(){   
   fetch(girlmovie3url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data3){
   displaygirlsnightomdb(data3);
})

function displaygirlsnightomdb(data3){
   document.getElementById('girlmovierating3').innerHTML += `<p id=""> ${data3.imdbRating} </p>`;
 }  
}


//MOVIE4
var girlmovie4url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0046250";

OmdbinfoMovie4();
function OmdbinfoMovie4(){   
   fetch(girlmovie4url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data4){
   displaygirlsnightomdb(data4);
})

function displaygirlsnightomdb(data4){
   document.getElementById('girlmovierating4').innerHTML += `<p id=""> ${data4.imdbRating} </p>`; 
 }  
}


//MOVIE5
var girlmovie5url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt8200456";

OmdbinfoMovie5();
function OmdbinfoMovie5(){   
   fetch(girlmovie5url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data5){
   displaygirlsnightomdb(data5);
})

function displaygirlsnightomdb(data5){
   document.getElementById('girlmovierating5').innerHTML += `<p id=""> ${data5.imdbRating} </p>`; 
 }  
}


var girlmovie6url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt3783958";
OmdbinfoMovie6();
function OmdbinfoMovie6(){   
   fetch(girlmovie6url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data6){
   console.log(data6);  
   displaygirlsnightomdb(data6);
})

function displaygirlsnightomdb(data6){
   document.getElementById('girlmovierating6').innerHTML += `<p id=""> ${data6.imdbRating} </p>`; 
 }  
}
//Movie - 7
var girlmovie7url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0014429";
OmdbinfoMovie7();
function OmdbinfoMovie7(){   
   fetch(girlmovie7url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data7){
   console.log(data7);  
   displaygirlsnightomdb(data7);
})

function displaygirlsnightomdb(data7){
   document.getElementById('girlmovierating7').innerHTML += `<p id=""> ${data7.imdbRating} </p>`; 
 }  
}

//Movie - 8
var girlmovie8url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt13118012";
OmdbinfoMovie8();
function OmdbinfoMovie8(){   
   fetch(girlmovie8url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data8){
   console.log(data8);  
   displaygirlsnightomdb(data8);
})

function displaygirlsnightomdb(data8){
   document.getElementById('girlmovierating8').innerHTML += `<p id=""> ${data8.imdbRating} </p>`; 
 }  
}

//Movie - 9
var girlmovie9url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0025316";
OmdbinfoMovie9();
function OmdbinfoMovie9(){   
   fetch(girlmovie9url).then(function(response) {if(response.ok){return response.json()}
})

.then(function(data9){
   console.log(data9);  
   displaygirlsnightomdb(data9);
})

function displaygirlsnightomdb(data9){
   document.getElementById('girlmovierating9').innerHTML += `<p id=""> ${data9.imdbRating} </p>`;  
 }  
}

//Movie - 10
var girlmovie10url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt8619812";
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
   elementsToshow = 3;

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