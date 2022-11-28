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

//*******BOYS NIGHT--Jess' part /
var boysNightCarousel = document.getElementById('boysNight');
var apeMonkey = "a4e2430bc83be09ef62dea94f12d573b";
var boysNightGenres = "28,12";
var boysNightMovies = [];
var pushBoyMovieRating = $('#boyMovieRating1',);
    // '#boyMovieRating2',
    // '#boyMovieRating3',
    // '#boyMovieRating4',
    // '#boyMovieRating5',
    // '#boyMovieRating6',
    // '#boyMovieRating7',
    // '#boyMovieRating8',
    // '#boyMovieRating9',
    // '#boyMovieRating10'


//fetch top 10 boys night movies
const boysNightTmdbInfo = async () =>{
    try {
        const res = await fetch(tmdburl + boysNightGenres);
        console.log(res.ok);
        const data = await res.json();
        console.log(data.results.slice(0,10));
        displayBoysNight(data);
        fetchBoysOmdbInfo();
    }catch(err) {
        console.error(err);
    }
}
boysNightTmdbInfo();
//display your genre information into carousel
 //CHANGE TO YOUR GENRE
 //for loop????
function displayBoysNight(data) {
//loop through data results to put title, overview, and poster photo into html
    for (var i = 1; i < data.results.slice(0,11).length; i++) {
        var getMovieTitle = data.results[i].title;
        var getDescription = data.results[i].overview;
        var getMovieImage = image + data.results[i].poster_path;
        var pushMovieTitle = document.getElementById('boyMovieTitle' + i);
        var pushDescription = document.getElementById('boyMovieOverview' + i);
        var pushMovieImage = document.getElementById('boyMoviePic' + i);

        pushMovieTitle.innerHTML = getMovieTitle;
        pushMovieTitle.setAttribute('class', 'text-xl');
        boysNightMovies.push(getMovieTitle);
        pushDescription.innerHTML = 'Overview: ' + getDescription;
        pushMovieImage.src = getMovieImage;
    }
}
// girlmoviepicIds.forEach(function(picid){
    //     document.getElementById(picid).setAttribute('src',image + data.results[girlmoviepicList].poster_path);
    //     girlmoviepicList++;
    // })

    // girlmovietitleIds.forEach(function(titleid){
    //     document.getElementById(titleid).innerHTML += `<h5 class="text-xl" id=""> ${data.results[girlmovietitleList].title}</h5> `;
    //     girlmovietitleList++;
    // }) 

    // girlmovieoverviewIds.forEach(function(overviewid){
    //     document.getElementById(overviewid).innerHTML += `<p id=""> ${data.results[girlmovieoverviewList].overview} </p>`;
    //     girlmovieoverviewList++;
    // })


//gets ratings from omdb
var OMDBkey = "b88cdd94";
var OMDBkeyurl = "http://www.omdbapi.com/?apikey=b88cdd94&t=";
var omdbBaseUrl = 'https://www.omdbapi.com/?apikey=';
var omdbApiKey = '8f3f0682';
var omdbParameters = '&t=';

// fetch omdb information: rating, poster
const fetchBoysOmdbInfo = async () =>{
    try{
        const results = await Promise.all([
            fetch(omdbBaseUrl + omdbApiKey + omdbParameters + boysNightMovies[0]),
            fetch(omdbBaseUrl + omdbApiKey + omdbParameters + boysNightMovies[1]),
            fetch(omdbBaseUrl + omdbApiKey + omdbParameters + boysNightMovies[2]),
            fetch(omdbBaseUrl + omdbApiKey + omdbParameters + boysNightMovies[3]),
            fetch(omdbBaseUrl + omdbApiKey + omdbParameters + boysNightMovies[4]),
            fetch(omdbBaseUrl + omdbApiKey + omdbParameters + boysNightMovies[5]),
            fetch(omdbBaseUrl + omdbApiKey + omdbParameters + boysNightMovies[6]),
            fetch(omdbBaseUrl + omdbApiKey + omdbParameters + boysNightMovies[7]),
            fetch(omdbBaseUrl + omdbApiKey + omdbParameters + boysNightMovies[8]),
            fetch(omdbBaseUrl + omdbApiKey + omdbParameters + boysNightMovies[9]),
        ])
        const finalData = await Promise.all(results.map(result => result.json()));
        console.log(finalData);
        displayBoysRatings(finalData);
        return finalData;
    } catch(err){
        console.error(err);
    }
}

var boyMovieRatings = [];

function displayBoysRatings(finalData){
    for (i = 0; i < boysNightMovies.length; i++){
        var getBoyMovieRating = finalData[i].Ratings;
        boyMovieRatings.push(getBoyMovieRating);
        if (finalData.Response === undefined){
            console.log('rating:n/a')
            // pushBoyMovieRating[i].innerHTML = 'Rating: N/A';
        }else{
            // pushBoyMovieRating.innerHTML = getBoyMovieRating[i];
        }
    }
    
    for(j = 0; j < boyMovieRatings.length; j++){
        pushBoyMovieRating.innerHTML = boyMovieRatings[j]
        console.log(boyMovieRatings)
    }
}
    

// }


// Promise.all([boysNightTmdbInfo, fetchBoysOmdbInfo])
// .then(function(responses){
//     return Promise.all(responses.map(function(response){
//         return response.json();
//     }))
// })
// .then((function(data){
//     console.log(data)
//     displayBoysNight(data);
// }))
// .then(function(data){
//         console.log(data)
//         if (!data.Ratings[1]){
//             var getImdbRating = data.Ratings[0].Value;
//             pushMovieRating.innerHTML = getImdbRating;
//         } else {
//             var getRottenTomatoesRating = data.Ratings[1].Value;
//             pushMovieRating.innerHTML = getRottenTomatoesRating;
//         }
//     })
// .catch((err) => console.error(err))
// .finally(() => console.log("all functions have been completed"))

//CHANGE TO YOUR GENRE MOVIES
//BOYS NIGHT MOVIE1
// OmdbinfoMovie1();
// function OmdbinfoMovie1(){   
//     fetch(girlmovie1url).then(function(response) {if(response.ok){return response.json()}
// })

// .then(function(data1){
//     console.log(data1);  
//     displaygirlsnightomdb(data1);
// })

// function displaygirlsnightomdb(data1){
//     document.getElementById('girlmovierating1').innerHTML += `<p id=""> ${data1.imdbRating} </p>`;
// } 
// }

// //GIRLS NIGHT MOVIE2
// var girlmovie2url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0109830";
// OmdbinfoMovie2();
// function OmdbinfoMovie2(){   
//     fetch(girlmovie2url).then(function(response) {if(response.ok){return response.json()}
// })

// .then(function(data2){
//     console.log(data2);  
//     displaygirlsnightomdb(data2);
// })

// function displaygirlsnightomdb(data2){
//     document.getElementById('girlmovierating2').innerHTML += `<p id=""> ${data2.imdbRating} </p>`; 
// }  
// }

// //GIRLS NIGHT MOVIE3
// var girlmovie3url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt13535456";
// OmdbinfoMovie3();
// function OmdbinfoMovie3(){   
//     fetch(girlmovie3url).then(function(response) {if(response.ok){return response.json()}
// })

// .then(function(data3){
//     console.log(data3);  
//     displaygirlsnightomdb(data3);
// })

// function displaygirlsnightomdb(data3){
//     document.getElementById('girlmovierating3').innerHTML += `<p id=""> ${data3.imdbRating} </p>`; 
// }  
// }

// //GIRLS NIGHT MOVIE4
// var girlmovie4url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0033045";
// OmdbinfoMovie4();
// function OmdbinfoMovie4(){   
//     fetch(girlmovie4url).then(function(response) {if(response.ok){return response.json()}
// })

// .then(function(data4){
//     console.log(data4);  
//     displaygirlsnightomdb(data4);
// })

// function displaygirlsnightomdb(data4){
//     document.getElementById('girlmovierating4').innerHTML += `<p id=""> ${data4.imdbRating} </p>`; 
// }  
// }

// //GIRLS NIGHT MOVIE5
// var girlmovie5url =  "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0021749";
// OmdbinfoMovie5();
// function OmdbinfoMovie5(){   
//     fetch(girlmovie5url).then(function(response) {if(response.ok){return response.json()}
// })

// .then(function(data5){
//     console.log(data5);  
//     displaygirlsnightomdb(data5);
// })

// function displaygirlsnightomdb(data5){
//     document.getElementById('girlmovierating5').innerHTML += `<p id=""> ${data5.imdbRating} </p>`; 
// }  
// }

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