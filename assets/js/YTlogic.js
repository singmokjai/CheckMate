////// YOUTUBE LOGIC /////

// var artistInformation = "lil wayne"
var YTAPIkey = "AIzaSyBBvhR0unYtp88z1PIMHMBM9a4tg31DqVM";
var queryURL = "https://www.googleapis.com/youtube/v3/channels/";
var encodePart = encodeURIComponent("contentDetails,statistics");

// Declaring varables to store views, subs and vid count
var ytViews;
var ytSubs;
var ytVids;

function youtubeApiCall(artistInformation){
    console.log('API request info: ', artistInformation)
    $.ajax({
        cache: false,
        data: $.extend({
            key: YTAPIkey,
            q: artistInformation,
            part: 'snippet',
        }, {maxResults:50}),
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search/",
        
    })
.done(function(data) {
       console.log('response data: ', data);
    //    console.log(data.items[0].snippet.channelTitle)
       for(var i = 0; i < data.items.length; i++ ) {
        console.log("---------Channel Title------")
        var channelTitle = data.items[i].snippet.channelTitle
        var lcChannelTitle = channelTitle.toLowerCase().replace(/[^\w]/gi,""); 
        var videoLink = data.items[0].id.videoId ? data.items[0].id.videoId : null;
        console.log('channelTitle: ' + channelTitle)
        console.log('lcChannelTitle : ' + lcChannelTitle);
        console.log("videoID: " + videoLink);

        
        if(videoLink) {
            $("#artistVid").attr('src',"https://www.youtube.com/embed/" + videoLink );
        }
        console.log($("#artistVid"));
    
        console.log("---------Channel ID------")
        var channelID = data.items[i].snippet.channelId;
        console.log(channelID);

        var _artistInfo = artistInformation.toLocaleLowerCase().replace(/[^\w]/gi, "");

        if (_artistInfo === lcChannelTitle) {
            console.log("here is the channel id:" + channelID)
            // call the channel function
            channelCALL(channelID);
            break;
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
       $("#view").text(result.items[0].statistics.videoCount);

       console.log(result.items[0].statistics.viewCount)
       $("#vid").text(result.items[0].statistics.viewCount);
    // assigns data to sub, vid, view count variables
       ytSubs = result.items[0].statistics.subscriberCount;
       ytVids = result.items[0].statistics.videoCount;
       ytViews = result.items[0].statistics.viewCount;
    // returns values so varaiables are accessible outside function
       return ytSubs, ytVids, ytViews;

   })

};

// this will count up the numbers using a time scheme
// $(".numb").counterUp({
//     delay: 10,
//     time: 4000,
// });

// on click event for the search button
$("#subBut").on("click", function (event) {
    event.preventDefault();
    var artistInformation = $("#userInput").val();
    console.log('subBut artistinfo: ', artistInformation);
    youtubeApiCall(artistInformation);
 
});


// keypress event for enter key
$("#userInput").on("keypress", function (enterEvent){
   
    var keycode = (enterEvent.keyCode ? enterEvent.keyCode : enterEvent.which);
    if(keycode == '13'){
        var artistInformation = $("#userInput").val();
        youtubeApiCall(artistInformation);
    }
      
});
