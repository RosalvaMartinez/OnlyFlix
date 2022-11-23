 var carouselname = document.getElementById('girlsnight');
 //var index = 0;
 
 
 var apikey = "a4e2430bc83be09ef62dea94f12d573b";

 var tmdburl = "https://api.themoviedb.org/3/movie/top_rated?api_key=a4e2430bc83be09ef62dea94f12d573b&page=1&with_genres=35|10749";

tmdbinfo();

 function tmdbinfo(){
   fetch(tmdburl)
   .then(function(response) {
      if(response.ok){
         return response.json()
      }
   })

.then(function(data){
   console.log(data.results.slice(0,5));
   displaygirlsnight(data);
})
.catch(function(error){
   console.error(error);
})
 }
