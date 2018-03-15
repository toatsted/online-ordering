 
var config = {
    apiKey: "AIzaSyCIVlT1DRkM-pfQbEVuVp-zXPQAw2-wYas",
    authDomain: "chi-lantro-delivery-platform.firebaseapp.com",
    databaseURL: "https://chi-lantro-delivery-platform.firebaseio.com",
    projectId: "chi-lantro-delivery-platform",
    storageBucket: "chi-lantro-delivery-platform.appspot.com",
    messagingSenderId: "356504711264"
  };
  firebase.initializeApp(config);



 var database = firebase.database();
 var user;
 var ref = firebase.database().ref();
 var userId = JSON.parse(localStorage.getItem("UID"));
 console.log("The UID is: " + userId);



ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});


$("#addInfoBtn").on("click", function(evt){
	evt.preventDefault();

	 var userName = $("#nameInput").val().trim();
	 var userAddress = $("#addressInput").val().trim();
	 var userPhone = $("#phoneNumberInput").val().trim();
	 var userEmail = $("#emailInput").val().trim();
	 userId = JSON.parse(localStorage.getItem("UID"));
	 console.log(userName);
	 console.log(userAddress);
	 console.log(userPhone);
	 console.log(userEmail);
	 console.log(userId);

	 var acctInfo = {
	 		userId: userId,
		    name: userName,
		    address: userAddress,
		    phone: userPhone,
		    email: userEmail
	 };

	 database.ref('users/' + userId).push(acctInfo);
	 alert("COOL!");

	 // function writeUserData(userId, name, address, phone, email) {
		//   firebase.database().ref('users/' + userId).set({
		//   	userId: userId,
		//     name: userName,
		//     address: userAddress,
		//     phone: userPhone,
		//     email: userEmail
	 //  	  });
	 //  }

	 // writeUserData(); 

});


//  function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: "Katie",
//     email: "cool@whatever.com"
//   });
// }


$("#register-btn").on("click", function(){
		var email = $("#register_email").val().trim();
		var password = $("#register_password").val().trim();
		
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		   console.log(error.code);
		   console.log(error.message);
		});

		isLoggedIn();
	});


$("#login-btn").on("click", function(){
		var email = $("#login_email").val().trim();
		var password = $("#login_password").val().trim();

		var user = firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		   if(error.code == "auth/invalid-email"){
		   	alert("Incorrect email format.");
		   }
		   if(error.code == "auth/user-not-found"){
		   	alert("Invalid email or password");
		   }
		   console.log(error.code);
		   console.log(error.message);
		});

			//console.clear();
   			console.log(user);
});

$("#logout-btn").on("click", function(){
		firebase.auth().signOut().then(function() {
		   console.log("Logged out!")

		   isLoggedIn();

		}, function(error) {
		   console.log(error.code);
		   console.log(error.message);
		});
	});


function isLoggedIn(){
firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    console.log("success");
		    	user = firebase.auth().currentUser;
				userId = firebase.auth().currentUser.uid;
				localStorage.setItem("UID", JSON.stringify(userId));
		  } else {
		    console.log("No user logged in!");
		    return false;
		  }

		  // userId = user.uid;
		  console.log(user);
		  console.log(userId);
});
}

var data = isLoggedIn();
console.log(data);

$('#login-btn').on("click", function(e) {
    e.preventDefault();
    console.log("HELLO");
    // Coding
    $('#login-modal').modal('toggle'); //or  $('#IDModal').modal('hide');
    return false;
});

$('#register-btn').on("click", function(e) {
    e.preventDefault();
    console.log("HELLO AGAIN");
    // Coding
    $('#login-modal').modal('toggle'); //or  $('#IDModal').modal('hide');
    return false;
});

isLoggedIn();






 
$(function() {
    
    var $formLogin = $('#login-form');
    var $formLost = $('#lost-form');
    var $formRegister = $('#register-form');
    var $divForms = $('#div-forms');
    var $modalAnimateTime = 300;
    var $msgAnimateTime = 150;
    var $msgShowTime = 2000;

    $("form").submit(function () {
        switch(this.id) {
            case "login-form":
                var $lg_email=$('#login_email').val();
                var $lg_password=$('#login_password').val();
                if ($lg_email == "ERROR") {
                    msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "glyphicon-remove", "Login error");
                } else {
                    msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "success", "glyphicon-ok", "Login OK");
                }
                return false;
                break;
            case "lost-form":
                var $ls_email=$('#lost_email').val();
                if ($ls_email == "ERROR") {
                    msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), "error", "glyphicon-remove", "Send error");
                } else {
                    msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), "success", "glyphicon-ok", "Send OK");
                }
                return false;
                break;
            case "register-form":
                // var $rg_name=$('#register_name').val();
                var $rg_email=$('#register_email').val();
                var $rg_password=$('#register_password').val();
                if ($rg_email == "ERROR") {
                    msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "error", "glyphicon-remove", "Register error");
                } else {
                    msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "success", "glyphicon-ok", "Register OK");
                }
                return false;
                break;
            default:
                return false;
        }
        return false;
    });
    
    $('#login_register_btn').click( function () { modalAnimate($formLogin, $formRegister) });
    $('#register_login_btn').click( function () { modalAnimate($formRegister, $formLogin); });
    $('#login_lost_btn').click( function () { modalAnimate($formLogin, $formLost); });
    $('#lost_login_btn').click( function () { modalAnimate($formLost, $formLogin); });
    $('#lost_register_btn').click( function () { modalAnimate($formLost, $formRegister); });
    $('#register_lost_btn').click( function () { modalAnimate($formRegister, $formLost); });
    
    function modalAnimate ($oldForm, $newForm) {
        var $oldH = $oldForm.height();
        var $newH = $newForm.height();
        $divForms.css("height",$oldH);
        $oldForm.fadeToggle($modalAnimateTime, function(){
            $divForms.animate({height: $newH}, $modalAnimateTime, function(){
                $newForm.fadeToggle($modalAnimateTime);
            });
        });
    }
    
    function msgFade ($msgId, $msgText) {
        $msgId.fadeOut($msgAnimateTime, function() {
            $(this).text($msgText).fadeIn($msgAnimateTime);
        });
    }
    
    function msgChange($divTag, $iconTag, $textTag, $divClass, $iconClass, $msgText) {
        var $msgOld = $divTag.text();
        msgFade($textTag, $msgText);
        $divTag.addClass($divClass);
        $iconTag.removeClass("glyphicon-chevron-right");
        $iconTag.addClass($iconClass + " " + $divClass);
        setTimeout(function() {
            msgFade($textTag, $msgOld);
            $divTag.removeClass($divClass);
            $iconTag.addClass("glyphicon-chevron-right");
            $iconTag.removeClass($iconClass + " " + $divClass);
  		}, $msgShowTime);
    }
});


//---------------------------------------------------------------------------//

//  


//---------------------------------------------------------------------------//

  // user.updateProfile({
		//   displayName: $("#register_name").val().trim(),
		// }).then(function() {
		//   var displayName = user.displayName;

		// }, function(error) {
		//   console.log(error);
		// });


 //--------------------------------------------------------------------------//


// var provider = new firebase.auth.GoogleAuthProvider();

// function googleSignin() {
//    firebase.auth()
   
//    .signInWithPopup(provider).then(function(result) {
//       var token = result.credential.accessToken;
//       var user = result.user;
		
//       console.log(token)
//       console.log(user)
//    }).catch(function(error) {
//       var errorCode = error.code;
//       var errorMessage = error.message;
		
//       console.log(error.code)
//       console.log(error.message)
//    });
// }

// function googleSignout() {
//    firebase.auth().signOut()
	
//    .then(function() {
//       console.log('Signout Succesfull')
//    }, function(error) {
//       console.log('Signout Failed')  
//    });
// }
