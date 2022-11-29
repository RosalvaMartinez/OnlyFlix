



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
function girlsNightTmdbInfo() {
  fetch(tmdburl + girlsNightGenres)
    .then(function (response) {
      if (response.ok) {
        return response.json()
      }
    })

    .then(function (data) {
      console.log(data.results.slice(0, 11));

      displaygirlsnight(data);

    })
}
//display your genre information into carousel
//CHANGE TO YOUR GENRE
function displaygirlsnight(data) {

  var girlmoviepicIds = ["girlmoviepic1", "girlmoviepic2", "girlmoviepic3", "girlmoviepic4", "girlmoviepic5"]
  var girlmovietitleIds = ["girlmovietitle1", "girlmovietitle2", "girlmovietitle3", "girlmovietitle4", "girlmovietitle5"]
  var girlmovieoverviewIds = ["girlmovieoverview1", "girlmovieoverview2", "girlmovieoverview3", "girlmovieoverview4", "girlmovieoverview5"]
  var girlmoviepicList = 0, girlmovietitleList = 0, girlmovieoverviewList = 0;

  girlmoviepicIds.forEach(function (picid) {
    document.getElementById(picid).setAttribute('src', image + data.results[girlmoviepicList].poster_path);
    girlmoviepicList++;
  })

  girlmovietitleIds.forEach(function (titleid) {
    document.getElementById(titleid).innerHTML += `<h5 class="text-xl" id=""> ${data.results[girlmovietitleList].title}</h5> `;
    girlmovietitleList++;
  })

  girlmovieoverviewIds.forEach(function (overviewid) {
    document.getElementById(overviewid).innerHTML += `<p id=""> ${data.results[girlmovieoverviewList].overview} </p>`;
    girlmovieoverviewList++;
  })
}



//gets ratings from omdb
var OMDBkey = "b88cdd94";
var OMDBkeyurl = "http://www.omdbapi.com/?apikey=b88cdd94";
//var movieids = ["tt0112870","tt0109830","tt13535456","tt0033045","tt0021749"]

//var movieidurl = "https://www.omdbapi.com/?apikey=b88cdd94&i="+movieids;
//CHANGE TO YOUR GENRE MOVIES
//GIRLS NIGHT MOVIE1
var girlmovie1url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0112870";
OmdbinfoMovie1();
function OmdbinfoMovie1() {
  fetch(girlmovie1url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data1) {
      console.log(data1);
      displaygirlsnightomdb(data1);
    })

  function displaygirlsnightomdb(data1) {
    document.getElementById('girlmovierating1').innerHTML += `<p id=""> ${data1.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE2
var girlmovie2url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0109830";
OmdbinfoMovie2();
function OmdbinfoMovie2() {
  fetch(girlmovie2url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data2) {
      console.log(data2);
      displaygirlsnightomdb(data2);
    })

  function displaygirlsnightomdb(data2) {
    document.getElementById('girlmovierating2').innerHTML += `<p id=""> ${data2.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE3
var girlmovie3url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt13535456";
OmdbinfoMovie3();
function OmdbinfoMovie3() {
  fetch(girlmovie3url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data3) {
      console.log(data3);
      displaygirlsnightomdb(data3);
    })

  function displaygirlsnightomdb(data3) {
    document.getElementById('girlmovierating3').innerHTML += `<p id=""> ${data3.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE4
var girlmovie4url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0033045";
OmdbinfoMovie4();
function OmdbinfoMovie4() {
  fetch(girlmovie4url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data4) {
      console.log(data4);
      displaygirlsnightomdb(data4);
    })

  function displaygirlsnightomdb(data4) {
    document.getElementById('girlmovierating4').innerHTML += `<p id=""> ${data4.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE5
var girlmovie5url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0021749";
OmdbinfoMovie5();
function OmdbinfoMovie5() {
  fetch(girlmovie5url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data5) {
      console.log(data5);
      displaygirlsnightomdb(data5);
    })

  function displaygirlsnightomdb(data5) {
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
function girlsNightTmdbInfo() {
  fetch(tmdburl + girlsNightGenres)
    .then(function (response) {
      if (response.ok) {
        return response.json()
      }
    })

    .then(function (data) {
      console.log(data.results.slice(0, 11));

      displaygirlsnight(data);

    })
}
//display your genre information into carousel
//CHANGE TO YOUR GENRE
function displaygirlsnight(data) {

  var girlmoviepicIds = ["girlmoviepic1", "girlmoviepic2", "girlmoviepic3", "girlmoviepic4", "girlmoviepic5"]
  var girlmovietitleIds = ["girlmovietitle1", "girlmovietitle2", "girlmovietitle3", "girlmovietitle4", "girlmovietitle5"]
  var girlmovieoverviewIds = ["girlmovieoverview1", "girlmovieoverview2", "girlmovieoverview3", "girlmovieoverview4", "girlmovieoverview5"]
  var girlmoviepicList = 0, girlmovietitleList = 0, girlmovieoverviewList = 0;

  girlmoviepicIds.forEach(function (picid) {
    document.getElementById(picid).setAttribute('src', image + data.results[girlmoviepicList].poster_path);
    girlmoviepicList++;
  })

  girlmovietitleIds.forEach(function (titleid) {
    document.getElementById(titleid).innerHTML += `<h5 class="text-xl" id=""> ${data.results[girlmovietitleList].title}</h5> `;
    girlmovietitleList++;
  })

  girlmovieoverviewIds.forEach(function (overviewid) {
    document.getElementById(overviewid).innerHTML += `<p id=""> ${data.results[girlmovieoverviewList].overview} </p>`;
    girlmovieoverviewList++;
  })
}



//gets ratings from omdb
var OMDBkey = "b88cdd94";
var OMDBkeyurl = "http://www.omdbapi.com/?apikey=b88cdd94";
//var movieids = ["tt0112870","tt0109830","tt13535456","tt0033045","tt0021749"]

//var movieidurl = "https://www.omdbapi.com/?apikey=b88cdd94&i="+movieids;
//CHANGE TO YOUR GENRE MOVIES
//GIRLS NIGHT MOVIE1
var girlmovie1url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0112870";
OmdbinfoMovie1();
function OmdbinfoMovie1() {
  fetch(girlmovie1url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data1) {
      console.log(data1);
      displaygirlsnightomdb(data1);
    })

  function displaygirlsnightomdb(data1) {
    document.getElementById('girlmovierating1').innerHTML += `<p id=""> ${data1.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE2
var girlmovie2url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0109830";
OmdbinfoMovie2();
function OmdbinfoMovie2() {
  fetch(girlmovie2url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data2) {
      console.log(data2);
      displaygirlsnightomdb(data2);
    })

  function displaygirlsnightomdb(data2) {
    document.getElementById('girlmovierating2').innerHTML += `<p id=""> ${data2.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE3
var girlmovie3url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt13535456";
OmdbinfoMovie3();
function OmdbinfoMovie3() {
  fetch(girlmovie3url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data3) {
      console.log(data3);
      displaygirlsnightomdb(data3);
    })

  function displaygirlsnightomdb(data3) {
    document.getElementById('girlmovierating3').innerHTML += `<p id=""> ${data3.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE4
var girlmovie4url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0033045";
OmdbinfoMovie4();
function OmdbinfoMovie4() {
  fetch(girlmovie4url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data4) {
      console.log(data4);
      displaygirlsnightomdb(data4);
    })

  function displaygirlsnightomdb(data4) {
    document.getElementById('girlmovierating4').innerHTML += `<p id=""> ${data4.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE5
var girlmovie5url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0021749";
OmdbinfoMovie5();
function OmdbinfoMovie5() {
  fetch(girlmovie5url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data5) {
      console.log(data5);
      displaygirlsnightomdb(data5);
    })

  function displaygirlsnightomdb(data5) {
    document.getElementById('girlmovierating5').innerHTML += `<p id=""> ${data5.imdbRating} </p>`;
  }
}

//*******FAMILY NIGHT */
var familyKey = 'f6b6d2c3417b1e02fc001c1d391d2590';
// genre id "id": 10751,
// "name": "Family"
var imgURL = "https://image.tmdb.org/t/p/w300"


var familyURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + familyKey + '&page=1&with_genres=10751'
//change to your genre function name
getMovies();

function getMovies() {
  fetch(familyURL).then(function (response) {
    if (response.ok) {
      return response.json()
    }
  })
    .then(function (data) {
      console.log(data.results.slice(0, 11));
      showMovies(data);

    })
  // .catch(function(error){
  //   console.log(error)
  // })
}

//display your genre information into carousel
function showMovies(data) {
  for (let x = 0; x < 11; x++) {

    var movieTitle = document.querySelectorAll('#famTitle')
    movieTitle[x].innerHTML = data.results[x].title;

    var movieOverview = document.querySelectorAll('#famOverview')
    movieOverview[x].innerHTML = data.results[x].overview;

    var moviePoster = document.querySelectorAll('#famPoster')
    moviePoster[x].setAttribute('src', imgURL + data.results[x].poster_path);

  };
}

//gets ratings from omdb



  var famOMDBkey = "e6c5307a";
  var famOMDBkeyurl = "http://www.omdbapi.com/?apikey=e6c5307a";
  var famMovieIds = ["tt10032342","tt0245429","tt3153634","tt5198068","tt3061046","tt0038650","tt4729430","tt0110357","tt2140203","tt12816348"]
  
   movieidurl = "https://www.omdbapi.com/?apikey=e6c5307a&i="+famMovieIds;
  //CHANGE TO YOUR GENRE MOVIES
  //GIRLS NIGHT MOVIE1
  var famMovie1url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt10032342";
  OmdbinfoMovie1();
  function OmdbinfoMovie1() {
    fetch(famMovie1url).then(function (response) {
      if (response.ok) { return response.json() }
    })
  
      .then(function (data1) {
        console.log(data1);
        displayfamnightomdb(data1);
      })
  
    function displayfamnightomdb(data1) {
      document.getElementById('fammovierating1').innerHTML += `<p id=""> ${data1.imdbRating} </p>`;
    }
  }
  
  //GIRLS NIGHT MOVIE2
  var famMovie2url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt0245429";
  OmdbinfoMovie2();
  function OmdbinfoMovie2() {
    fetch(famMovie2url).then(function (response) {
      if (response.ok) { return response.json() }
    })
  
      .then(function (data2) {
        console.log(data2);
        displayfamnightomdb(data2);
      })
  
    function displayfamnightomdb(data2) {
      document.getElementById('fammovierating2').innerHTML += `<p id=""> ${data2.imdbRating} </p>`;
    }
  }
  
  //GIRLS NIGHT MOVIE3
  var famMovie3url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt3153634";
  OmdbinfoMovie3();
  function OmdbinfoMovie3() {
    fetch(famMovie3url).then(function (response) {
      if (response.ok) { return response.json() }
    })
  
      .then(function (data3) {
        console.log(data3);
        displayfamnightomdb(data3);
      })
  
    function displayfamnightomdb(data3) {
      document.getElementById('fammovierating3').innerHTML += `<p id=""> ${data3.imdbRating} </p>`;
    }
  }
  
  //GIRLS NIGHT MOVIE4
  var famMovie4url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt5198068";
  OmdbinfoMovie4();
  function OmdbinfoMovie4() {
    fetch(famMovie4url).then(function (response) {
      if (response.ok) { return response.json() }
    })
  
      .then(function (data4) {
        console.log(data4);
        displayfamnightomdb(data4);
      })
  
    function displayfamnightomdb(data4) {
      document.getElementById('fammovierating4').innerHTML += `<p id=""> ${data4.imdbRating} </p>`;
    }
  }
  
  //GIRLS NIGHT MOVIE5
  var famMovie5url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt3061046";
  OmdbinfoMovie5();
  function OmdbinfoMovie5() {
    fetch(famMovie5url).then(function (response) {
      if (response.ok) { return response.json() }
    })
  
      .then(function (data5) {
        console.log(data5);
        displayfamnightomdb(data5);
      })
  
    function displayfamnightomdb(data5) {
      document.getElementById('fammovierating5').innerHTML += `<p id=""> ${data5.imdbRating} </p>`;
    }
  }
  //GIRLS NIGHT MOVIE6
  var famMovie6url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt0038650";
  OmdbinfoMovie6();
  function OmdbinfoMovie6() {
    fetch(famMovie6url).then(function (response) {
      if (response.ok) { return response.json() }
    })
  
      .then(function (data6) {
        console.log(data6);
        displayfamnightomdb(data6);
      })
  
    function displayfamnightomdb(data6) {
      document.getElementById('fammovierating6').innerHTML += `<p id=""> ${data6.imdbRating} </p>`;
    }
  }
//GIRLS NIGHT MOVIE7
var famMovie7url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt4729430";
OmdbinfoMovie7();
function OmdbinfoMovie7() {
  fetch(famMovie7url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data7) {
      console.log(data7);
      displayfamnightomdb(data7);
    })

  function displayfamnightomdb(data7) {
    document.getElementById('fammovierating7').innerHTML += `<p id=""> ${data7.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE8
var famMovie8url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt0038650";
OmdbinfoMovie8();
function OmdbinfoMovie8() {
  fetch(famMovie8url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data8) {
      console.log(data8);
      displayfamnightomdb(data8);
    })

  function displayfamnightomdb(data8) {
    document.getElementById('fammovierating8').innerHTML += `<p id=""> ${data8.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE9
var famMovie9url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt2140203";
OmdbinfoMovie9();
function OmdbinfoMovie9() {
  fetch(famMovie9url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data9) {
      console.log(data9);
      displayfamnightomdb(data9);
    })

  function displayfamnightomdb(data9) {
    document.getElementById('fammovierating9').innerHTML += `<p id=""> ${data9.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE10
var famMovie10url = "https://www.omdbapi.com/?apikey=e6c5307a&i=tt12816348";
OmdbinfoMovie10();
function OmdbinfoMovie10() {
  fetch(famMovie10url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data10) {
      console.log(data10);
      displayfamnightomdb(data10);
    })

  function displayfamnightomdb(data10) {
    document.getElementById('fammovierating10').innerHTML += `<p id=""> ${data10.imdbRating} </p>`;
  }
}


//***family nightsection end***


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
function girlsNightTmdbInfo() {
  fetch(tmdburl + girlsNightGenres)
    .then(function (response) {
      if (response.ok) {
        return response.json()
      }
    })

    .then(function (data) {
      console.log(data.results.slice(0, 11));

      displaygirlsnight(data);

    })
}
//display your genre information into carousel
//CHANGE TO YOUR GENRE
function displaygirlsnight(data) {

  var girlmoviepicIds = ["girlmoviepic1", "girlmoviepic2", "girlmoviepic3", "girlmoviepic4", "girlmoviepic5"]
  var girlmovietitleIds = ["girlmovietitle1", "girlmovietitle2", "girlmovietitle3", "girlmovietitle4", "girlmovietitle5"]
  var girlmovieoverviewIds = ["girlmovieoverview1", "girlmovieoverview2", "girlmovieoverview3", "girlmovieoverview4", "girlmovieoverview5"]
  var girlmoviepicList = 0, girlmovietitleList = 0, girlmovieoverviewList = 0;

  girlmoviepicIds.forEach(function (picid) {
    document.getElementById(picid).setAttribute('src', image + data.results[girlmoviepicList].poster_path);
    girlmoviepicList++;
  })

  girlmovietitleIds.forEach(function (titleid) {
    document.getElementById(titleid).innerHTML += `<h5 class="text-xl" id=""> ${data.results[girlmovietitleList].title}</h5> `;
    girlmovietitleList++;
  })

  girlmovieoverviewIds.forEach(function (overviewid) {
    document.getElementById(overviewid).innerHTML += `<p id=""> ${data.results[girlmovieoverviewList].overview} </p>`;
    girlmovieoverviewList++;
  })
}



//gets ratings from omdb
var OMDBkey = "b88cdd94";
var OMDBkeyurl = "http://www.omdbapi.com/?apikey=b88cdd94";
//var movieids = ["tt0112870","tt0109830","tt13535456","tt0033045","tt0021749"]

//var movieidurl = "https://www.omdbapi.com/?apikey=b88cdd94&i="+movieids;
//CHANGE TO YOUR GENRE MOVIES
//GIRLS NIGHT MOVIE1
var girlmovie1url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0112870";
OmdbinfoMovie1();
function OmdbinfoMovie1() {
  fetch(girlmovie1url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data1) {
      console.log(data1);
      displaygirlsnightomdb(data1);
    })

  function displaygirlsnightomdb(data1) {
    document.getElementById('girlmovierating1').innerHTML += `<p id=""> ${data1.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE2
var girlmovie2url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0109830";
OmdbinfoMovie2();
function OmdbinfoMovie2() {
  fetch(girlmovie2url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data2) {
      console.log(data2);
      displaygirlsnightomdb(data2);
    })

  function displaygirlsnightomdb(data2) {
    document.getElementById('girlmovierating2').innerHTML += `<p id=""> ${data2.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE3
var girlmovie3url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt13535456";
OmdbinfoMovie3();
function OmdbinfoMovie3() {
  fetch(girlmovie3url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data3) {
      console.log(data3);
      displaygirlsnightomdb(data3);
    })

  function displaygirlsnightomdb(data3) {
    document.getElementById('girlmovierating3').innerHTML += `<p id=""> ${data3.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE4
var girlmovie4url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0033045";
OmdbinfoMovie4();
function OmdbinfoMovie4() {
  fetch(girlmovie4url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data4) {
      console.log(data4);
      displaygirlsnightomdb(data4);
    })

  function displaygirlsnightomdb(data4) {
    document.getElementById('girlmovierating4').innerHTML += `<p id=""> ${data4.imdbRating} </p>`;
  }
}

//GIRLS NIGHT MOVIE5
var girlmovie5url = "https://www.omdbapi.com/?apikey=b88cdd94&i=tt0021749";
OmdbinfoMovie5();
function OmdbinfoMovie5() {
  fetch(girlmovie5url).then(function (response) {
    if (response.ok) { return response.json() }
  })

    .then(function (data5) {
      console.log(data5);
      displaygirlsnightomdb(data5);
    })

  function displaygirlsnightomdb(data5) {
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


var cardWidth = sliderContainerWidth / elementsToshow;

slider.style.width = cards.length * cardWidth + 'px';

for (let index = 0; index < cards.length; index++) {
  const element = cards[index];
  element.style.width = cardWidth + 'px';
}

function prev() {
  slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) - cardWidth) + 'px';//100px
}

function next() {
  slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) + cardWidth) + 'px';
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


var cardWidth = sliderContainerWidth / elementsToshow;

slider.style.width = cards.length * cardWidth + 'px';

for (let index = 0; index < cards.length; index++) {
  const element = cards[index];
  element.style.width = cardWidth + 'px';
}

function prev() {
  slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) - cardWidth) + 'px';//100px
}

function next() {
  slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) + cardWidth) + 'px';
}
//CHANGE CAROUSEL AND SLIDER CONTAINER IDS TO FIT
//*****FAMILY NIGHT
//index line 331-332
//carosuel

var sliderContainer = document.getElementById('famSliderContainer');
var slider = document.getElementById('famSlider');
var cards = slider.getElementById('fam');
var elementsToshow = 3;
var sliderContainerWidth = sliderContainer.clientWidth;


var cardWidth = sliderContainerWidth / elementsToshow;

slider.style.width = cards.length * cardWidth + 'px';

for (let index = 0; index < cards.length; index++) {
  const element = cards[index];
  element.style.width = cardWidth + 'px';
}

function prev() {
  slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) - cardWidth) + 'px';//100px
}

function next() {
  slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) + cardWidth) + 'px';
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


var cardWidth = sliderContainerWidth / elementsToshow;

slider.style.width = cards.length * cardWidth + 'px';

for (let index = 0; index < cards.length; index++) {
  const element = cards[index];
  element.style.width = cardWidth + 'px';
}

function prev() {
  slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) - cardWidth) + 'px';//100px
}

function next() {
  slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) + cardWidth) + 'px';
}
