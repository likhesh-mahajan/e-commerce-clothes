import firebase from "firebase/app";
import "firebase/firestore"; //for database
import "firebase/auth"; //for authentication

const config = {
  apiKey: "AIzaSyAl7dRvRkK5UYGFzctnPSApVZasocHkA_8",
  authDomain: "crown-project-db.firebaseapp.com",
  databaseURL: "https://crown-project-db.firebaseio.com",
  projectId: "crown-project-db",
  storageBucket: "crown-project-db.appspot.com",
  messagingSenderId: "540091324480",
  appId: "1:540091324480:web:3c51af17ad5bf82c2627a5",
  measurementId: "G-6YGK5DRMZ5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
