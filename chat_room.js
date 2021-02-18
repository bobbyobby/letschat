var firebaseConfig = {
    apiKey: "AIzaSyAwNalbzemaq5dDK2B_qfLvzenGJQ8SNrc",
    authDomain: "class-93-kwittr.firebaseapp.com",
    databaseURL: "https://class-93-kwittr-default-rtdb.firebaseio.com",
    projectId: "class-93-kwittr",
    storageBucket: "class-93-kwittr.appspot.com",
    messagingSenderId: "548184880542",
    appId: "1:548184880542:web:63fa0f26bae0b01d00d28f",
    measurementId: "G-M4KFLY53SW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "welcome " + username + "!";

function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            row = "<div class = 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}