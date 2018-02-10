// Your code goes here:
    //When I click on the minion poster it replaces the main image poster with a larger minion poster//
    //When you click on the thumbnail image (id=thumbnails) take the attributes of the main image (id=main-image)//
    //and apply to the thumbnail image//


  let changePoster = function(event) {

    var thumb = jQuery(this).attr("src");

    let mainImage = jQuery("#main-image")
        mainImage.attr("src", thumb);
  }

  jQuery("#thumbnails img").on("click", changePoster)



  // <img src="https://image.tmdb.org/t/p/w300/44sKJOGP3fTm4QXBcIuqu0RkdP7.jpg">
  // <img src="https://image.tmdb.org/t/p/w300/q0R4crx2SehcEEQEkYObktdeFy.jpg">
  // <img src="https://image.tmdb.org/t/p/w300/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg">
  // <img src="https://image.tmdb.org/t/p/w300/qyRwj5VvuTRdJ76o2grP93grNxt.jpg">
  // <img src="https://image.tmdb.org/t/p/w300/h6O5OE3ueRVdCc7V7cwTiQocI7D.jpg">
  // <img src="https://image.tmdb.org/t/p/w300/dfhztJRiElqmYW4kpvjYe1gENsD.jpg">
  // <img src="https://image.tmdb.org/t/p/w300/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg">
  // <img src="https://image.tmdb.org/t/p/w300/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg">

  // <img id="main-image" src="https://image.tmdb.org/t/p/w300/44sKJOGP3fTm4QXBcIuqu0RkdP7.jpg">
