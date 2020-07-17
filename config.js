import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBDMNlEqrqiQb8EyGSzdW4j-CceHjH-Wjg",
    authDomain: "xyz-95d2f.firebaseapp.com",
    databaseURL: "https://xyz-95d2f.firebaseio.com",
    projectId: "xyz-95d2f",
    storageBucket: "xyz-95d2f.appspot.com",
    messagingSenderId: "365083188981",
    appId: "1:365083188981:web:0226bdd4b2a6817ac82fbc",
    measurementId: "G-SWZT8HJ5D5"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();