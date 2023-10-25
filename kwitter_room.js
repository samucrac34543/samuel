
function redirectToRoomName(name)
{
      console.log (name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "agregando el nombre de la sala"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

// Initialize Firebase
const firebaseConfig = {

      apiKey: "AIzaSyA0_PMyYXu30aJ5yB85ijBh0bMxS59EJ9Y",
    
      authDomain: "kwiteer-9de60.firebaseapp.com",
    
      databaseURL: "https://kwiteer-9de60-default-rtdb.firebaseio.com",
    
      projectId: "kwiteer-9de60",
    
      storageBucket: "kwiteer-9de60.appspot.com",
    
      messagingSenderId: "255859290269",
    
      appId: "1:255859290269:web:52bf945eb983d31de12474"
    
    };
    
    
    // Initialize Firebase
    
    const app = firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicia el código
                  console.log("Nombre de la sala: " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //Finaliza el código
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
