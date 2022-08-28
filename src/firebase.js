import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCm666Ia-K4POoLtNb1IaWQjJvPFAAXvE",
  authDomain: "line-clone-75e04.firebaseapp.com",
  projectId: "line-clone-75e04",
  storageBucket: "line-clone-75e04.appspot.com",
  messagingSenderId: "1072565557592",
  appId: "1:1072565557592:web:df17a2c3aa2ae5c1cced2d"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };