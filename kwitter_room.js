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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      });
      localStorage.setItem(room_name,"room_name");

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
           row = "<div class ='room_name' id ="+Room_names+" onclick ='redirectToRoom_names(this.id)'>#"+ Room_names +"</div><hr>";
           document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoom_names(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_room.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}