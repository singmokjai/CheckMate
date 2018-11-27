// Gives access to data inside the YTlogic.js file

function getScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "assets/js/YTlogic.js";
 
    script.onreadystatechange = callback;
    script.onload = callback;
 
    document.getElementsByTagName('head')[0].appendChild(script);
 }

 


// // Calculates potential revenues based YouTube and LiveFM Data pulled from api
function displayArtistInfo() {
    var queryURL = "https://ws.audioscrobbler.com/2.0/?method=artist.search&limit=1&artist=";
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
        $("#you-art-info").html(artistImg);
        $("#listenersLive").html("Listeners: " + artistInfo);
       
       // New code calculates and consoles data values from ytLogic & liveFM
        getScript('assets/js/YTlogic.js', function(){
            //    alert("queryURL = " + queryURL);
                
        var revNum = (parseInt(+ytViews + +ytSubs + +ytVids + +artistInfo) * (0.008));
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
        var pR = formatter.format(revNum);



        // var pR = revNum.toFixed(2);
        console.log("Revenue = " + pR);
        console.log("YouTube Views = " + ytViews);
        console.log("YouTube Subscribers = " + ytSubs);
        console.log("YouTube Videos = " + ytVids);
        console.log("Lisenters = " + artistInfo);
        });
        

    });
};


//function clears Input field

function clearFields() {

    document.getElementById("userInput").value = "";
   
};

// on click event for the search button
$("#subBut").on("click", function (event) {
    event.preventDefault();
    displayArtistInfo();
    clearFields();
  
 
});


// keypress event for enter key
$("#userInput").on("keypress", function (enterEvent){
   
    var keycode = (enterEvent.keyCode ? enterEvent.keyCode : enterEvent.which);
    if(keycode == '13'){
        displayArtistInfo();
        clearFields();
    }
      
});









