////// YOUTUBE LOGIC /////

var artistInformation = "lilwayne"
var YTAPIkey = "AIzaSyBBvhR0unYtp88z1PIMHMBM9a4tg31DqVM";
var queryURL = "https://www.googleapis.com/youtube/v3/channels/";
var encodePart = encodeURIComponent("contentDetails,statistics");

function youtubeApiCall(){
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
        var channelTitle = data.items[i].snippet.channelTitle;
        console.log(channelTitle);
        console.log("---------Channel ID------")
        var channelID = data.items[i].snippet.channelId;
        console.log(channelID);

        if (artistInformation === channelTitle) {
            console.log("here is the channel id:" + channelID)
        } else {
            console.log("nothing found")
        }

       }
    });
};

   youtubeApiCall();

// this function is to get the information from the channel
// function channelCALL(){
//    $.ajax({
//        url: queryURL + "?key=" + YTAPIkey + "&part=" + encodePart +"&forUsername=" + artistInformation + "&maxResults=10",
//        method: "GET",
//    }).then(function(response){
//        console.log(response);
//    })
// };
// channelCALL()

// this will count up the numbers using a time scheme
$(".numb").counterUp({
    delay: 10,
    time: 1000,
});