// Test artist (Alexandra Stan)
var artistID = "0BmLNz4nSLfoWYW1cYsElL"

var oAuthToken = "BQBs1F5u-oXXBL0BDRlkOQcH3QdT47-5nDb7k53MlSElHu4SSrgaRzs0XexBLsYqpj8psr1Vs2nafyb_ZwHTQAccLWTkJ2cl1BuOXno9PnGLig4VRbRIflmu1oNqsaPsJW4yS1Z6AsekrUY2"


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