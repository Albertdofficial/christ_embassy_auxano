import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjMOWmGudD-0cU9NnH7VVrJwYWZX79Rz0",
  authDomain: "cooking-ninja-site-40b63.firebaseapp.com",
  projectId: "cooking-ninja-site-40b63",
  storageBucket: "cooking-ninja-site-40b63.appspot.com",
  messagingSenderId: "179063055460",
  appId: "1:179063055460:web:d403458b3236e8694a2b71",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
