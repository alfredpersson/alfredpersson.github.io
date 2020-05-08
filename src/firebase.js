import firebase from "firebase";
const config = {
  apiKey: "AIzaSyCZB1Wb936SSNJ3PYAqOng5br5_h2jgkTc",
  authDomain: "mobile-keyboards.firebaseapp.com",
  databaseURL: "https://mobile-keyboards.firebaseio.com",
  projectId: "mobile-keyboards",
  storageBucket: "mobile-keyboards.appspot.com",
  messagingSenderId: "1057946388271",
};
firebase.initializeApp(config);

export default firebase;
