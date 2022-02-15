// import firebase from 'firebase';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-OSUvgdc88rAvQeqsbmotxkauHpvb3KU",
    authDomain: "notes-app-659e4.firebaseapp.com",
    projectId: "notes-app-659e4",
    storageBucket: "notes-app-659e4.appspot.com",
    messagingSenderId: "572012566054",
    appId: "1:572012566054:web:7988527a0c0714409978e7"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// const app = initializeApp(firebaseConfig)
const db = app.firestore();

export { db };