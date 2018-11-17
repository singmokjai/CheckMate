// Initialize Firebase
var config = {
    apiKey: "AIzaSyAOghXUfW2AHN968PjAtDzVn-7cTRGFzto",
    authDomain: "checkmate-3de1e.firebaseapp.com",
    databaseURL: "https://checkmate-3de1e.firebaseio.com",
    projectId: "checkmate-3de1e",
    storageBucket: "checkmate-3de1e.appspot.com",
    messagingSenderId: "1032631263441"
};
firebase.initializeApp(config);

var database = firebase.database();

// Button for adding email to database
$("#emailBut").on("click", function(event) {
    event.preventDefault();
    console.log("button clicked");

    // Grabs user input
    var userEmail = $("#emailInput").val().trim();
console.log(userEmail);
    // Creates local "temporary object for holding email data"
    database.ref().push({
        email: userEmail
    });

console.log(userEmail);
$("emailInput").val("");
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
});