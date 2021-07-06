import firebase from "firebase";
// import admin from "firebase-admin";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVqe6EvWn6I1sV1GRvv2HNAQLUIWTyxSQ",
  authDomain: "facebook-messenger-clone-1a1fd.firebaseapp.com",
  projectId: "facebook-messenger-clone-1a1fd",
  storageBucket: "facebook-messenger-clone-1a1fd.appspot.com",
  messagingSenderId: "617138759943",
  appId: "1:617138759943:web:031c0778fcd05477013da2",
});

const db = firebaseApp.firestore();
const messaging = firebaseApp.messaging();
// admin.initializeApp();

export { db, messaging };

// export const getToken = (setTokenFound) => {
//   return messaging
//     .getToken({
//       vapidKey:
//         "BHg6jbcdxHtj2Dxjy4AaRt22X3DBgI8md7ZWf5m9B9FHxIH3edeqLIBZvMPxpwVwnGHeFOUAE49XZD9EExl3Q1k",
//     })
//     .then((currentToken) => {
//       if (currentToken) {
//         // console.log("current token for client: ", currentToken);
//         setTokenFound(true);
//         // Track the token -> client mapping, by sending to backend server
//         // show on the UI that permission is secured
//       } else {
//         // console.log(
//         //   "No registration token available. Request permission to generate one."
//         // );
//         setTokenFound(false);
//         // shows on the UI that permission is required
//       }
//     })
//     .catch((err) => {
//       console.log("An error occurred while retrieving token. ", err);
//       // catch error while creating client token
//     });
// };
