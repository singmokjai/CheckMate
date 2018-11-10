// Test artist (Alexandra Stan)
var artistID = "0BmLNz4nSLfoWYW1cYsElL"

var oAuthToken = "BQCxZfxrxmJwHVX4u-J-VqrgI0zE0GEI55W0VPJCPHHb7mosTub5BWb-jv5I5vpVurju8Ky2Feg6HQn9J9t_TsNEk20GrTw7-3bbdhwJqQaboi8sPJDmJvSjhNdLiabWQth5XyGZqsGLD3tg"


$.ajax({
    url: 'https://api.spotify.com/v1/artists/' + artistID,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + oAuthToken
    },
    method: 'GET',
    success: function(data){
        console.log(data);
    }
});