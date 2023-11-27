import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCTg6sb3dWahh3YcCUyn7aSpQ6AdpI5Z-0",
    authDomain: "p-71-2d5c2.firebaseapp.com",
    projectId: "p-71-2d5c2",
    storageBucket: "p-71-2d5c2.appspot.com",
    messagingSenderId: "691694363151",
    appId: "1:691694363151:web:3e79d3e57933cc7d4f797a"
  };
  
  // Initialize Firebase
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
