



function displayArtistInfo() {
    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.search&limit=1&artist=Cher&api_key=336b213548b87643810f891a0c694d83&format=json";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log('response', response);
        console.log(queryURL);
        var artistImg = response.results.artistmatches.artist[0].image[2]["#text"];
        // artistImg.()
        console.log(artistImg);
        $("#you-art-info").append(artistImg);
        

    });
};



$("#subBut").on("click", function (event) {

    event.preventDefault();
    // This line grabs the input from the textbox
    displayArtistInfo();
    var newArtist = $("#animal-input").val().trim();

    
    
    displayArtistInfo();
});








