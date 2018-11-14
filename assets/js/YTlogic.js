////// YOUTUBE LOGIC /////

var artistInformation = "JayZ";
var YTAPIkey = "AIzaSyBBvhR0unYtp88z1PIMHMBM9a4tg31DqVM";
var queryURL = "https://www.googleapis.com/youtube/v3/search";

function youtubeApiCall(){
    $.ajax({
        cache: false,
        data: $.extend({
            key: YTAPIkey,
            q: artistInformation,
            id: "videoId",
            part: 'snippet',
        }, {maxResults:1}),
        dataType: 'json',
        method: "GET",
        // timeout: 5000,
        url: queryURL
    })
   .done(function(data) {
       console.log(data);
    });
};

   youtubeApiCall();

function channelCALL(){
   $.ajax({
       url: "https://www.googleapis.com/youtube/v3/channels/?key=" + YTAPIkey + "&part=statistics&forUsername=" + artistInformation,
       method: "GET",
    
    //    id=UCBJycsmduvYEL83R_U4JriQ
   }).then(function(response){
       console.log(response);
   })
};
channelCALL()

// this will count up the numbers using a time scheme
$(".numb").counterUp({
    delay: 10,
    time: 1000,
});