////// YOUTUBE LOGIC /////

var artistInformation = "Jay-Z";
var YTAPIkey = "AIzaSyBBvhR0unYtp88z1PIMHMBM9a4tg31DqVM";
var queryURL = "https://www.googleapis.com/youtube/v3/search";

console.log("FIRST CALL -------------------")
function youtubeApiCall(){
    $.ajax({
        cache: false,
        data: $.extend({
            key: YTAPIkey,
            q: "jay-z",
            id: "videoId",
            part: 'snippet'
        }, {maxResults:10}),
        dataType: 'json',
        // type: 'GET',
        method: "GET",
        timeout: 5000,
        url: queryURL
    })
   .done(function(data) {
    //    $('.btn-group').show();
       console.log(data);
    });
};

   youtubeApiCall();

   
// function anotherYoutubeApiCall(){
//         $.ajax({
//                 key: YTAPIkey,
//                 part: 'snippet,contentDetails,statistics',

//              {maxResults:5}),
//             method: "GET",
//             url: "https://www.googleapis.com/youtube/v3/channels"
            
//         })
//     .done(function(response) {
//         $('.btn-group').show();
//         console.log("SECOND CALL -------------------")
//         console.log(response);
        
//         });
//    };

//    anotherYoutubeApiCall()

function channelCALL(){
   $.ajax({
       url: "https://www.googleapis.com/youtube/v3/channels/?key=AIzaSyBBvhR0unYtp88z1PIMHMBM9a4tg31DqVM&part=statistics&id=UCN-sc1xJr-QQNj_uNIM9wTA",
       method: "GET",
    //    id: "UCbJG1HvzgzaMe_15xfiUyWw",
    //    part: 'statistics'
    
   }).then(function(response){
        console.log("SECOND CALL -------------------")
       console.log(response)
   })
}
channelCALL()
