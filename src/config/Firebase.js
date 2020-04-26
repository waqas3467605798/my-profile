import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAfZmxd9OyGEmTcU6P3K5sZGPaDHHCg3NI",
    authDomain: "my-profile-fa398.firebaseapp.com",
    databaseURL: "https://my-profile-fa398.firebaseio.com",
    projectId: "my-profile-fa398",
    storageBucket: "my-profile-fa398.appspot.com",
    messagingSenderId: "793419085085",
    appId: "1:793419085085:web:e8dba3362d2a58a9f39df4",
    measurementId: "G-SEWW8LJ2ZR"

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