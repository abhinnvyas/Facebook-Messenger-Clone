import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVqe6EvWn6I1sV1GRvv2HNAQLUIWTyxSQ",
  authDomain: "facebook-messenger-clone-1a1fd.firebaseapp.com",
  projectId: "facebook-messenger-clone-1a1fd",
  storageBucket: "facebook-messenger-clone-1a1fd.appspot.com",
  messagingSenderId: "617138759943",
  appId: "1:617138759943:web:031c0778fcd05477013da2",
});

const db = firebaseApp.firestore();

export { db };
