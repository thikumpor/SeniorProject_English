import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBi61qMfH8-xirKFaxAWCA7VU-7SNzDX34",
  authDomain: "enga-6c023.firebaseapp.com",
  databaseURL: "https://enga-6c023-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "enga-6c023",
  storageBucket: "enga-6c023.appspot.com",
  messagingSenderId: "1085937940616",
  appId: "1:1085937940616:web:84e64b8d5cb898fea9473d",
  measurementId: "G-GRWYX3LEWX"
});

export default firebaseConfig;