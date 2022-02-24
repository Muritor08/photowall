// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBHzeCSHx7GYkfix04jhgm5NGMzHFYWxmg",
  authDomain: "photowall-966eb.firebaseapp.com",
  databaseURL: "https://photowall-966eb-default-rtdb.firebaseio.com",
  projectId: "photowall-966eb",
  storageBucket: "photowall-966eb.appspot.com",
  messagingSenderId: "994555931993",
  appId: "1:994555931993:web:454285e17fc0518e563048"
};

// Initialize Firebase
firebase.initializeApp(config)

const database = firebase.database()

export {database}

