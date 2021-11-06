
//ADD YOUR FIREBASE LINKS HERE
 function logout(){
      window.location ="index.html";
      const firebaseConfig = {
          apiKey: "AIzaSyCNcGOS48RBF_fckXVZ-vMxphUNDWDQWig",
          authDomain: "kwitter-3033c.firebaseapp.com",
          databaseURL: "https://kwitter-3033c-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "kwitter-3033c",
          storageBucket: "kwitter-3033c.appspot.com",
          messagingSenderId: "142300484984",
          appId: "1:142300484984:web:e28ded46490e5ef90de48d",
          measurementId: "G-MCBKHMXPE3"
        };
        
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
