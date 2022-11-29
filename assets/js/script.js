



// var familyKey = 'f6b6d2c3417b1e02fc001c1d391d2590';
// genre id "id": 10751,
// "name": "Family"
// var imgURL = "https://image.tmdb.org/t/p/w300"


// var familyURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=" +familyKey + '&page=1&with_genres=10751'



// getMovies();

// function getMovies() {
//     fetch(familyURL).then(function(response){
//       if (response.ok){
//         return response.json()
//       }
//     })
//    .then(function(data){
//    console.log(data.results.slice(0,5));
//     showMovies(data);
//    }) 
// .catch(function(error){
//   console.log(error)
// })
// }

// function showMovies(data){



//   for (let i=0; i < 5; i++) {

//   var movieTitle = document.querySelectorAll('#famTitle')
//   movieTitle[i].innerHTML = data.results[i].title;

//   var movieOverview = document.querySelectorAll('#famOverview')
//   movieOverview[i].innerHTML = data.results[i].overview;

//   var moviePoster = document.querySelectorAll('#famPoster')
//   moviePoster[i].setAttribute ('src',imgURL + data.results[i].poster_path);

//   var movieRating = document.querySelectorAll('#famRating')
//   movieRating[i].innerHTML = data.results[i].vote_average;
//   };
// }




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
// //*******FAMILY NIGHT */
// var familyKey = 'f6b6d2c3417b1e02fc001c1d391d2590';
// // genre id "id": 10751,
// // "name": "Family"
// var imgURL = "https://image.tmdb.org/t/p/w300"


// var familyURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + familyKey + '&page=1&with_genres=10751'
// //change to your genre function name
// getMovies();

// function getMovies() {
//   fetch(familyURL).then(function (response) {
//     if (response.ok) {
//       return response.json()
//     }
//   })
//     .then(function (data) {
//       console.log(data.results.slice(0, 11));
//       showMovies(data);

//     })
//   // .catch(function(error){
//   //   console.log(error)
//   // })
// }

// //display your genre information into carousel
// function showMovies(data) {
//   for (let x = 0; x < 11; x++) {

//     var movieTitle = document.querySelectorAll('#famTitle')
//     movieTitle[x].innerHTML = data.results[x].title;

//     var movieOverview = document.querySelectorAll('#famOverview')
//     movieOverview[x].innerHTML = data.results[x].overview;

//     var moviePoster = document.querySelectorAll('#famPoster')
//     moviePoster[x].setAttribute('src', imgURL + data.results[x].poster_path);

//   };
// }


//gets ratings from omdb



  // var famOMDBkey = "e6c5307a";
  // var famOMDBkeyurl = "http://www.omdbapi.com/?apikey=e6c5307a";
  // var famMovieIds = ["tt10032342","tt0245429","tt3153634","tt5198068","tt3061046","tt0038650","tt4729430","tt0110357","tt2140203","tt12816348"]
  
  //  movieidurl = "https://www.omdbapi.com/?apikey=e6c5307a&i="+famMovieIds;
  //CHANGE TO YOUR GENRE MOVIES
  //FAMILY MOVIE1
  // var famMovie1url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt10032342";
  // OmdbinfoMovie1();
  // function OmdbinfoMovie1() {
  //   fetch(famMovie1url).then(function (response) {
  //     if (response.ok) { return response.json() }
  //   })
  
  //     .then(function (data1) {
  //       console.log(data1);
  //       displayfamnightomdb(data1);
  //     })
  
  //   function displayfamnightomdb(data1) {
  //     document.getElementById('fammovierating1').innerHTML += `<p id=""> ${data1.imdbRating} </p>`;
  //   }
  // }
  
  // //FAMILY MOVIE2
  // var famMovie2url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt0245429";
  // OmdbinfoMovie2();
  // function OmdbinfoMovie2() {
  //   fetch(famMovie2url).then(function (response) {
  //     if (response.ok) { return response.json() }
  //   })
  
  //     .then(function (data2) {
  //       console.log(data2);
  //       displayfamnightomdb(data2);
  //     })
  
  //   function displayfamnightomdb(data2) {
  //     document.getElementById('fammovierating2').innerHTML += `<p id=""> ${data2.imdbRating} </p>`;
  //   }
  // }
  
  //FAMILY MOVIE3
  // var famMovie3url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt3153634";
  // OmdbinfoMovie3();
  // function OmdbinfoMovie3() {
  //   fetch(famMovie3url).then(function (response) {
  //     if (response.ok) { return response.json() }
  //   })
  
  //     .then(function (data3) {
  //       console.log(data3);
  //       displayfamnightomdb(data3);
  //     })
  
  //   function displayfamnightomdb(data3) {
  //     document.getElementById('fammovierating3').innerHTML += `<p id=""> ${data3.imdbRating} </p>`;
  //   }
  // }
  
  //FAMILY MOVIE4
  // var famMovie4url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt5198068";
  // OmdbinfoMovie4();
  // function OmdbinfoMovie4() {
  //   fetch(famMovie4url).then(function (response) {
  //     if (response.ok) { return response.json() }
  //   })
  
  //     .then(function (data4) {
  //       console.log(data4);
  //       displayfamnightomdb(data4);
  //     })
  
  //   function displayfamnightomdb(data4) {
  //     document.getElementById('fammovierating4').innerHTML += `<p id=""> ${data4.imdbRating} </p>`;
  //   }
  // }
  
  // //FAMILY MOVIE5
  // var famMovie5url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt3061046";
  // OmdbinfoMovie5();
  // function OmdbinfoMovie5() {
  //   fetch(famMovie5url).then(function (response) {
  //     if (response.ok) { return response.json() }
  //   })
  
  //     .then(function (data5) {
  //       console.log(data5);
  //       displayfamnightomdb(data5);
  //     })
  
  //   function displayfamnightomdb(data5) {
  //     document.getElementById('fammovierating5').innerHTML += `<p id=""> ${data5.imdbRating} </p>`;
  //   }
  // }
  //FAMILY MOVIE6
  // var famMovie6url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt0038650";
  // OmdbinfoMovie6();
  // function OmdbinfoMovie6() {
  //   fetch(famMovie6url).then(function (response) {
  //     if (response.ok) { return response.json() }
  //   })
  
  //     .then(function (data6) {
  //       console.log(data6);
  //       displayfamnightomdb(data6);
  //     })
  
  //   function displayfamnightomdb(data6) {
  //     document.getElementById('fammovierating6').innerHTML += `<p id=""> ${data6.imdbRating} </p>`;
  //   }
  // }
//FAMILY MOVIE7
// var famMovie7url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt4729430";
// OmdbinfoMovie7();
// function OmdbinfoMovie7() {
//   fetch(famMovie7url).then(function (response) {
//     if (response.ok) { return response.json() }
//   })

//     .then(function (data7) {
//       console.log(data7);
//       displayfamnightomdb(data7);
//     })

//   function displayfamnightomdb(data7) {
//     document.getElementById('fammovierating7').innerHTML += `<p id=""> ${data7.imdbRating} </p>`;
//   }
// }

//FAMILY MOVIE8
// var famMovie8url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt0038650";
// OmdbinfoMovie8();
// function OmdbinfoMovie8() {
//   fetch(famMovie8url).then(function (response) {
//     if (response.ok) { return response.json() }
//   })

//     .then(function (data8) {
//       console.log(data8);
//       displayfamnightomdb(data8);
//     })

//   function displayfamnightomdb(data8) {
//     document.getElementById('fammovierating8').innerHTML += `<p id=""> ${data8.imdbRating} </p>`;
//   }
// }

//FAMILY MOVIE9
// var famMovie9url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt2140203";
// OmdbinfoMovie9();
// function OmdbinfoMovie9() {
//   fetch(famMovie9url).then(function (response) {
//     if (response.ok) { return response.json() }
//   })

//     .then(function (data9) {
//       console.log(data9);
//       displayfamnightomdb(data9);
//     })

//   function displayfamnightomdb(data9) {
//     document.getElementById('fammovierating9').innerHTML += `<p id=""> ${data9.imdbRating} </p>`;
//   }
// }

//FAMILY MOVIE10
// var famMovie10url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt12816348";
// OmdbinfoMovie10();
// function OmdbinfoMovie10() {
//   fetch(famMovie10url).then(function (response) {
//     if (response.ok) { return response.json() }
//   })

//     .then(function (data10) {
//       console.log(data10);
//       displayfamnightomdb(data10);
//     })

//   function displayfamnightomdb(data10) {
//     document.getElementById('fammovierating10').innerHTML += `<p id=""> ${data10.imdbRating} </p>`;
//   }
// }


//***family nightsection end***


