import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyANF3EX4PoyCdzjEsEOPY9dWidtR74Mk9s",
    authDomain: "app-6d1ea.firebaseapp.com",
    projectId: "app-6d1ea",
    storageBucket: "app-6d1ea.appspot.com",
    messagingSenderId: "395500617110",
    appId: "1:395500617110:web:a45c97237243f73f2971b7"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);