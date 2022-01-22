
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR5QgNysHAWi12xdVfBmuNNIWLWODi-KE",
  authDomain: "canguroseguro-2a8c6.firebaseapp.com",
  projectId: "canguroseguro-2a8c6",
  storageBucket: "canguroseguro-2a8c6.appspot.com",
  messagingSenderId: "365126972375",
  appId: "1:365126972375:web:596c42bf8c0e8d3395d192",
  measurementId: "G-9X0RPEWHMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//AUTENTIFICACIÓN
var email = "cjimena05@gmail.com";
var password = "cjCV2005";

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    const dt = new Date();
    update(ref(database, 'users/' + user.uid),{
      last_login: dt,
    })

    alert('User loged in!');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
  });