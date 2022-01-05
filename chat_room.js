var firebaseConfig = {
      apiKey: "AIzaSyBJyM6RoHttUBVhngaX44JcYxytazqSPzQ",
      authDomain: "letschat-web-app---3-b65bf.firebaseapp.com",
      databaseURL: "https://letschat-web-app---3-b65bf-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app---3-b65bf",
      storageBucket: "letschat-web-app---3-b65bf.appspot.com",
      messagingSenderId: "695079661420",
      appId: "1:695079661420:web:5620cc1476ddc8a87f0d49",
      measurementId: "G-0KY8XSSW4K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value',
            function (snapshot) {
                  document.getElementById("output").innerHTML = "";
                  snapshot.forEach(function (childSnapshot) {
                        childKey = childSnapshot.key;
                        Room_names = childKey;
                        //Start code
                        console.log("Room Name", Room_names);
                        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' > #" + Room_names + "</div><hr>";
                        document.getElementById("output").innerHTML += row;
                        //End code
                  });
            });
}
getData();
function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
