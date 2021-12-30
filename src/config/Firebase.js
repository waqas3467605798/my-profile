import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBet13KL9d5wsDCFpYM7tIQnVV9Aa0-fT0",
    authDomain: "my-profile-54a83.firebaseapp.com",
    databaseURL: "https://my-profile-54a83.firebaseio.com",
    projectId: "my-profile-54a83",
    storageBucket: "my-profile-54a83.appspot.com",
    messagingSenderId: "748140405946",
    appId: "1:748140405946:web:6ba855a3574aae66ce0e83",
    measurementId: "G-EYQFC3MPDV"

};
  // Initialize Firebase
  // const fire = 
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  // firebase.analytics();
// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
// const db = firebase.firestore();

// Create a storage reference from our storage service
var storageRef = storage.ref();

export {db, storage, storageRef}

export default firebase;