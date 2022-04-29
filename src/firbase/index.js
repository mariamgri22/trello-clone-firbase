import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCj_T4Rhj72RXANvOee15RtFlXgCd5YhAE",
    authDomain: "task-management-system-c4a42.firebaseapp.com",
    projectId: "task-management-system-c4a42",
    storageBucket: "task-management-system-c4a42.appspot.com",
    messagingSenderId: "422792994818",
    appId: "1:422792994818:web:59bd1c820da5c3cabf071b",
    measurementId: "G-3JT73GP6GE"
  };
  //init app

   firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export { db,auth };