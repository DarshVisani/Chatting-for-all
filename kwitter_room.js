
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCSySJev2-XlO1LIZCgcrmkpkDNNP4KIbg",
      authDomain: "robo-chat-app--class-93-97.firebaseapp.com",
      projectId: "robo-chat-app--class-93-97",
      storageBucket: "robo-chat-app--class-93-97.appspot.com",
      messagingSenderId: "880013283645",
      appId: "1:880013283645:web:1e786b11823cfabb0af554"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
