import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyDKkwd7visRVXUciTQlLKO0W5rAAHLnbis",
    authDomain: "first-firebase-app-6fe5b.firebaseapp.com",
    databaseURL: "https://first-firebase-app-6fe5b.firebaseio.com",
    projectId: "first-firebase-app-6fe5b",
    storageBucket: "first-firebase-app-6fe5b.appspot.com",
    messagingSenderId: "326980651670"
  };
  firebase.initializeApp(config);
  //firebase.firestore().settings({timestampsInSnapshots: true});
  
  export default firebase;