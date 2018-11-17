////// YOUTUBE LOGIC /////

// var artistInformation = "lil wayne"
var YTAPIkey = "AIzaSyBBvhR0unYtp88z1PIMHMBM9a4tg31DqVM";
var queryURL = "https://www.googleapis.com/youtube/v3/channels/";
var encodePart = encodeURIComponent("contentDetails,statistics");



$("#subBut").on("click", function (event){
    
    var artistInformation = $("#userInput").val();
    youtubeApiCall(artistInformation);

});

function youtubeApiCall(artistInformation){
    $.ajax({
        cache: false,
        data: $.extend({
            key: YTAPIkey,
            q: artistInformation,
            part: 'snippet',
        }, {maxResults:15}),
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search/",
        
    })
.done(function(data) {
       console.log(data);
    //    console.log(data.items[0].snippet.channelTitle)
       for(var i = 0; i < data.items.length; i++ ) {
        console.log("---------Channel Title------")
        var channelTitle = data.items[i].snippet.channelTitle
        var lcChannelTitle = channelTitle.toLowerCase().replace(/[^\w]/gi,"");
        console.log('channelTitle: ' + channelTitle)
        console.log('lcChannelTitle : ' + lcChannelTitle);

        console.log("---------Channel ID------")
        var channelID = data.items[i].snippet.channelId;
        console.log(channelID);

        var _artistInfo = artistInformation.toLocaleLowerCase().replace(/[^\w]/gi, "");

        if (_artistInfo === lcChannelTitle) {
            console.log("here is the channel id:" + channelID)
            // call the next function
            channelCALL(channelID);
            break
        } else {
            console.log("nothing found")
        }

       }
    });
};



// this function is to get the information from the channel
function channelCALL(channelID){
   $.ajax({
       url: queryURL + "?key=" + YTAPIkey + "&part=" + encodePart +"&id=" + channelID + "&maxResults=10",
       method: "GET",
   }).then(function(result){
       console.log("-------channelCALL Result-------")
       console.log(result);
       console.log(result.items[0].statistics.subscriberCount);
       $("#stats").text(result.items[0].statistics.subscriberCount);

       console.log(result.items[0].statistics.videoCount)
       $("#vid").text(result.items[0].statistics.videoCount);

       console.log(result.items[0].statistics.viewCount)
       $("#view").text(result.items[0].statistics.viewCount);

   })
};

// this will count up the numbers using a time scheme
$(".numb").counterUp({
    delay: 10,
    time: 1000,
});