import firebase, { firestore } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuQN3JPiM5HGhBl8M2btvPDE7qlzVTieQ",
  authDomain: "fb-clone-client.firebaseapp.com",
  projectId: "fb-clone-client",
  storageBucket: "fb-clone-client.appspot.com",
  messagingSenderId: "478466214048",
  appId: "1:478466214048:web:5c49311d98ff21f919a1c5",
  measurementId: "G-VH86JNXJLG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
