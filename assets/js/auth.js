 var config = {
    apiKey: "AIzaSyCIVlT1DRkM-pfQbEVuVp-zXPQAw2-wYas",
    authDomain: "chi-lantro-delivery-platform.firebaseapp.com",
    databaseURL: "https://chi-lantro-delivery-platform.firebaseio.com",
    projectId: "chi-lantro-delivery-platform",
    storageBucket: "chi-lantro-delivery-platform.appspot.com",
    messagingSenderId: "356504711264"
  };
  firebase.initializeApp(config);


var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()
	
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}
