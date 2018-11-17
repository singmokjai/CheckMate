////// YOUTUBE LOGIC /////

var artistInformation = "lil wayne"
var YTAPIkey = "AIzaSyBBvhR0unYtp88z1PIMHMBM9a4tg31DqVM";
var queryURL = "https://www.googleapis.com/youtube/v3/channels/";
var encodePart = encodeURIComponent("contentDetails,statistics");

var _channelId = youtubeApiCall();

function youtubeApiCall(){
    $.ajax({
        cache: false,
        data: $.extend({
            key: YTAPIkey,
            q: artistInformation,
            part: 'snippet',
        }, {maxResults:1}),
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
   }).then(function(results){
       console.log("-------channelCALL Response-------")
       console.log(results);
       var subCount = results.items[0].statistics.subscriberCount;
       console.log("here is subcount: " + subCount);
       var vCount = results.items[0].statistics.viewCount;
       console.log("here is viewcount: " + vCount);

       $(".vStat").append(vCount);
       $(".subStat").append(subCount);



    




   })





};






// // this will count up the numbers using a time scheme
// $(".numb").counterUp({
//     delay: 10,
//     time: 1000,
// });