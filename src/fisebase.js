import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyArhn8ux1whs00dqRJ3SNw9raAajn_uhDI",
  authDomain: "whats-up-clone-a1a76.firebaseapp.com",
  projectId: "whats-up-clone-a1a76",
  storageBucket: "whats-up-clone-a1a76.appspot.com",
  messagingSenderId: "538872149104",
  appId: "1:538872149104:web:4eb8ea1317f1e18f7cb0b5",
  measurementId: "G-XZVDRWKC2R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;