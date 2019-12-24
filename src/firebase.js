import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFi28yliKRVyEp0aBILUioUMuLp5IRUD0",
    authDomain: "just-clock-it-16e29.firebaseapp.com",
    databaseURL: "https://just-clock-it-16e29.firebaseio.com",
    projectId: "just-clock-it-16e29",
    storageBucket: "just-clock-it-16e29.appspot.com",
    messagingSenderId: "852320179549",
    appId: "1:852320179549:web:ac8cc355b4f6aac4c484b4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;