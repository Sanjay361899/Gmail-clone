import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF6pc9Sa7EUXiBdFWiRgl1h7CbLHvmyv0",
  authDomain: "clone-84c8d.firebaseapp.com",
  projectId: "clone-84c8d",
  storageBucket: "clone-84c8d.appspot.com",
  messagingSenderId: "239001987520",
  appId: "1:239001987520:web:10b4eeaac9326190984025",
  measurementId: "G-16JDRB194Y",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
//   const storage= firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
export default firebase;
