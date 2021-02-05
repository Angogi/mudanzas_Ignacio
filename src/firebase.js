import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNaGuH_uMdb026QaOn2IN2MoB4sRbd8gE",
  authDomain: "mudanzasgenesis-2d2cc.firebaseapp.com",
  projectId: "mudanzasgenesis-2d2cc",
  storageBucket: "mudanzasgenesis-2d2cc.appspot.com",
  messagingSenderId: "416207579375",
  appId: "1:416207579375:web:658d8b9c3d2dab65aa131a",
  measurementId: "G-E935DH99B6"
};



  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider, db};
  // export default db;