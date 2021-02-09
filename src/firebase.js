import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCFc8f58FF3tSVYb2MPt-S95BjWxd3YCUw",
  authDomain: "genesis-ong-133b6.firebaseapp.com",
  projectId: "genesis-ong-133b6",
  storageBucket: "genesis-ong-133b6.appspot.com",
  messagingSenderId: "596827840768",
  appId: "1:596827840768:web:f306ba87d82f913cdfd3e5",
  measurementId: "G-ESVQHQD58G"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, db};
 