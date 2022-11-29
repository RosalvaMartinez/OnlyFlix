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
   console.log(data1);  
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
   console.log(data2);  
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
   console.log(data3);  
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
   console.log(data4);  
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
   console.log(data5);  
   displaygirlsnightomdb(data5);
})

function displaygirlsnightomdb(data5){
   document.getElementById('girlmovierating5').innerHTML += `<p id=""> ${data5.imdbRating} </p>`; 
 }  
}

//*******BOYS NIGHT */
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
   console.log(data1);  
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
   console.log(data2);  
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
   console.log(data3);  
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
   console.log(data4);  
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
   console.log(data5);  
   displaygirlsnightomdb(data5);
})

function displaygirlsnightomdb(data5){
   document.getElementById('girlmovierating5').innerHTML += `<p id=""> ${data5.imdbRating} </p>`; 
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
   console.log(data1);  
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
   console.log(data2);  
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
   console.log(data3);  
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
   console.log(data4);  
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
   console.log(data5);  
   displaygirlsnightomdb(data5);
})

function displaygirlsnightomdb(data5){
   document.getElementById('girlmovierating5').innerHTML += `<p id=""> ${data5.imdbRating} </p>`; 
 }  
}

//*******SPOOKY NIGHT/
//change to your genre codes
var carouselname = document.getElementById('spookynight');
var apikey = "a4e2430bc83be09ef62dea94f12d573b";
var tmdburl = "https://api.themoviedb.org/3/movie/top_rated?api_key=a4e2430bc83be09ef62dea94f12d573b&page=1&with_genres=";
var spookyNightGenres = "27";
var image = "https://image.tmdb.org/t/p/w500";
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
   console.log(data.results.slice(0,11));
  
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
var OMDBkey = "b88cdd94";
var OMDBkeyurl = "http://www.omdbapi.com/?apikey=b88cdd94";
//var movieids = ["tt0112870","tt0109830","tt13535456","tt0033045","tt0021749"]

//var movieidurl = "https://www.omdbapi.com/?apikey=b88cdd94&i="+movieids;
//CHANGE TO YOUR GENRE MOVIES
//SPOOKY NIGHT MOVIE1
var spookymovie1url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0054215";
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
var spookymovie2url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0081505";
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
var spookymovie3url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt2396396";
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
var spookymovie4url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt4620956";
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
var spookymovie5url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0078748";
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
var spookymovie6url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt8594324";
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
var spookymovie7url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt8594324";
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
var spookymovie8url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0010323";
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
var spookymovie9url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0056687";
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
var spookymovie10url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0016847";
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

//CHANGE CAROUSEL AND SLIDER CONTAINER IDS TO FIT 
//*****GIRLS NIGHT
//index line 138-139
//carosuel buttons

var sliderContainer = document.getElementById('sliderContainer');
var slider = document.getElementById('slider');
var cards = slider.getElementsByTagName('div');
var elementsToshow = 3;
var sliderContainerWidth = sliderContainer.clientWidth;


var cardWidth = sliderContainerWidth/elementsToshow;

slider.style.width = cards.length*cardWidth+'px';

for (let index = 0; index < cards.length; index++) {
   const element = cards[index];
   element.style.width = cardWidth+'px';
}

function prev(){
slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+ 'px';//100px
}

function next(){
   slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+ 'px';
}

//CHANGE CAROUSEL AND SLIDER CONTAINER IDS TO FIT 
//*****BOYS NIGHT
//index line 235-236
//carosuel

var sliderContainer = document.getElementById('sliderContainer');
var slider = document.getElementById('slider');
var cards = slider.getElementsByTagName('div');
var elementsToshow = 3;
var sliderContainerWidth = sliderContainer.clientWidth;


var cardWidth = sliderContainerWidth/elementsToshow;

slider.style.width = cards.length*cardWidth+'px';

for (let index = 0; index < cards.length; index++) {
   const element = cards[index];
   element.style.width = cardWidth+'px';
}

function prev(){
slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+ 'px';//100px
}

function next(){
   slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+ 'px';
}
//CHANGE CAROUSEL AND SLIDER CONTAINER IDS TO FIT
//*****FAMILY NIGHT
//index line 331-332
//carosuel

var sliderContainer = document.getElementById('sliderContainer');
var slider = document.getElementById('slider');
var cards = slider.getElementsByTagName('div');
var elementsToshow = 3;
var sliderContainerWidth = sliderContainer.clientWidth;


var cardWidth = sliderContainerWidth/elementsToshow;

slider.style.width = cards.length*cardWidth+'px';

for (let index = 0; index < cards.length; index++) {
   const element = cards[index];
   element.style.width = cardWidth+'px';
}

function prev(){
slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+ 'px';//100px
}

function next(){
   slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+ 'px';
}
//CHANGE CAROUSEL AND SLIDER CONTAINER IDS TO FIT 
//****SPOOKY NIGHT
//index line 427-428
//carosuel

var sliderContainer = document.getElementById('spookyContainer');
var slider = document.getElementById('spookySlider');
var cards = slider.getElementsByTagName('div');
var elementsToshow = 3;
var sliderContainerWidth = sliderContainer.clientWidth;


var cardWidth = sliderContainerWidth/elementsToshow;

slider.style.width = cards.length*cardWidth+'px';

for (let index = 0; index < cards.length; index++) {
   const element = cards[index];
   element.style.width = cardWidth+'px';
}

function prev(){
slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+ 'px';//100px
}

function next(){
   slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+ 'px';
}