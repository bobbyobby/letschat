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
username = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: username,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";

}