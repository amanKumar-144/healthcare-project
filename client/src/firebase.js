// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJh3gZRwaC2NL_Z_TIOU8Hsziu2j79Zu8",
  authDomain: "consent-management-system.firebaseapp.com",
  projectId: "consent-management-system",
  storageBucket: "consent-management-system.appspot.com",
  messagingSenderId: "553931085345",
  appId: "1:553931085345:web:94b482a9cc72d88d4db560"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase,firestore,app };