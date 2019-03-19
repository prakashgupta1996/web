// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     $(".login-cover").hide();

//     var dialog = document.querySelector('#loginDialog');
//     /*
//     if (! dialog.showModal) {
//       dialogPolyfill.registerDialog(dialog);
//     }
//     */
//     dialog.close();

//   } else {

//     $(".login-cover").show();

//     // No user is signed in.
//     var dialog = document.querySelector('#loginDialog');
//     if (! dialog.showModal) {
//       dialogPolyfill.registerDialog(dialog);
//     }
//     dialog.showModal();

//   }
// });


// /* LOGIN PROCESS */

// $("#loginBtn").click(
//   function(){


//     var email = $("#loginEmail").val();
//     var password = $("#loginPassword").val();

//     if(email != "" && password != ""){
//       $("#loginProgress").show();
//       $("#loginBtn").hide();

//       firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;

//         $("#loginError").show().text(errorMessage);
//         $("#loginProgress").hide();
//         $("#loginBtn").show();
//       });
//     }
//   }
// );


// /* LOGOUT PROCESS */

// $("#signOutBtn").click(
//   function(){

//     firebase.auth().signOut().then(function() {
//       // Sign-out successful.
//     }).catch(function(error) {
//       // An error happened.
//       alert(error.message);
//     });

//   }
// );
const table=document.getElementById("table");
db.ref("/Requests").once("value").then(snapshot=>{
  for(let [key,value] of Object.entries(snapshot.val())){
      console.log(value)
      const msgHTML = `
        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">${value.address}</div>
            <div class="msg-info-time">${value.foods[0].produName}</div>
          </div>
          <div class="msg-text">${value.foods[0].price}</div>
          <div class="msg-text">${value.foods[0].quantity}</div>
        </div>
    `
    table.insertAdjacentHTML('beforeend', msgHTML)
  }
})
