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

var tmdburl = "https://api.themoviedb.org/3/movie/top_rated?api_key=a4e2430bc83be09ef62dea94f12d573b&page=2&with_genres=35,10749";
var image = "https://image.tmdb.org/t/p/w185";


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
   console.log(data1);  
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
   console.log(data2);  
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
   console.log(data3);  
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
   console.log(data4);  
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
   console.log(data5);  
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