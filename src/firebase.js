import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDEcmfjx7sN7bgWL7tzzpG-qesm4t424eo",
  authDomain: "mudanzasgenesis-29eb3.firebaseapp.com",
  projectId: "mudanzasgenesis-29eb3",
  storageBucket: "mudanzasgenesis-29eb3.appspot.com",
  messagingSenderId: "819138131944",
  appId: "1:819138131944:web:30e1924490fdb9338ad65d",
  measurementId: "G-Q07C4R9260"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider, db};
  // export default db;