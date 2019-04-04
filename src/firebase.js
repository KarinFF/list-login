import firebase from 'firebase'

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyDEjBBqWcIJwiE0cgsIx45ghnAUAQomRDI",
    authDomain: "elk-login-4a498.firebaseapp.com",
    databaseURL: "https://elk-login-4a498.firebaseio.com",
    projectId: "elk-login-4a498",
    storageBucket: "elk-login-4a498.appspot.com",
    messagingSenderId: "630239457802"
  }

  firebase.initializeApp(config)

export default firebase
