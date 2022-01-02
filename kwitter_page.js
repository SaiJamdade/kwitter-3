//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAncQUm3inL_ZLfWRx4gQ3C1cbNCEy37Bk",
      authDomain: "kwitter-app-eb293.firebaseapp.com",
      databaseURL: "https://kwitter-app-eb293-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-eb293",
      storageBucket: "kwitter-app-eb293.appspot.com",
      messagingSenderId: "256155681743",
      appId: "1:256155681743:web:4b5c377bd15a12c5dc48ba"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

 function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
   
//End code
      } });  }); }
getData();
