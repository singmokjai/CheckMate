////// YOUTUBE LOGIC /////

var artistInformation = "Drake";
var YTAPIkey = "AIzaSyBBvhR0unYtp88z1PIMHMBM9a4tg31DqVM";
var queryURL = "https://www.googleapis.com/youtube/v3/search/";

function youtubeApiCall(){
    $.ajax({
        cache: false,
        data: $.extend({
            key: YTAPIkey,
            q: artistInformation,
            id: "videoId",
            part: 'snippet',
        }, {maxResults:5}),
        method: "GET",
        url: queryURL
    })
   .done(function(data) {
       console.log(data);

       for(var i = 0; i < data.items.length; i++) {
           console.log("---Channel Title---")
           var channelTitle = data.items[i].snippet.channelTitle;
           console.log(channelTitle);
           console.log("---Channel ID---")
           var channelID = data.items[i].snippet.channelId;
           console.log(channelID);

           if (artistInformation === channelTitle) {
            console.log("here is the channel id:" + channelID);
            
           }


       }
    });
};

   youtubeApiCall();

// function channelCALL(){
//    $.ajax({
//        url: queryURL + "?key=" + YTAPIkey + "&part=statistics&forUsername=" + artistInformation,
//        method: "GET",
    
//     //    id=UCBJycsmduvYEL83R_U4JriQ
//    }).then(function(response){
//        console.log(response);
       
//    })
// };
// channelCALL()

// // this will count up the numbers using a time scheme
// $(".numb").counterUp({
//     delay: 10,
//     time: 1000,
// });