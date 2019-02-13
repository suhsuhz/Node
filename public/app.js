(function() {
    const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);

 const bigOne = document.getElementById('bigOne');
const dbRef = firebase.database().ref().child('text');
dbRef.on('value', function(snap) {
  return bigOne.innerText = snap.val();
});

}());

