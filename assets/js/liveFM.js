
$("#subBut").on("click", function (event) {

    event.preventDefault();
    displayArtistInfo();
});

function displayArtistInfo() {
   var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.search&limit=1&artist=";
   var artistName = $("#userInput").val().trim();
   var liveApiKey = "&api_key=336b213548b87643810f891a0c694d83&format=json"

   $.ajax({
       url: queryURL + artistName + liveApiKey,
       method: "GET",
   }).then(function (response) {
       console.log('response', response);
       console.log(queryURL);
       var artistURL = response.results.artistmatches.artist[0].image[2]["#text"];
       // artistImg.()
       console.log(artistURL);
       var artistImg = $("<img>").attr("src", artistURL);
       // artistInfo
       var artistInfo = response.results.artistmatches.artist["0"].listeners;
       $("#you-art-info").append(artistImg);
       $("#you-art-info").append("Listeners: " + artistInfo);



   });
};














