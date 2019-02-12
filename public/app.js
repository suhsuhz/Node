(function() {
    const config = {
    apiKey: "AIzaSyCsMzGXRnd1QK_ZKhEohbbB8-poKYNVX9U",
    authDomain: "node-1d7b7.firebaseapp.com",
    databaseURL: "https://node-1d7b7.firebaseio.com",
    projectId: "node-1d7b7",
    storageBucket: "node-1d7b7.appspot.com",
    messagingSenderId: "748695749498"
  };
  firebase.initializeApp(config);

 const bigOne = document.getElementById('bigOne');
const dbRef = firebase.database().ref().child('text');
dbRef.on('value', function(snap) {
  return bigOne.innerText = snap.val();
});

}());

