 import firebase from 'firebase/app';
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC3zs3aqjkVmKD2HBgn4p3g1Elj2wHQVww",
    authDomain: "bauerjohnson-plan.firebaseapp.com",
    databaseURL: "https://bauerjohnson-plan.firebaseio.com",
    projectId: "bauerjohnson-plan",
    storageBucket: "bauerjohnson-plan.appspot.com",
    messagingSenderId: "396397765561",
    appId: "1:396397765561:web:7539863651a4a905ac0c68",
    measurementId: "G-WJ1DYNKP6J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  //firebase.firestore().settings({ timestampsInSnapshots : true })

  export default firebase;