import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-fyckcat51463Hhi3t4Wao_cNU9QoO3w",
    authDomain: "clone-5cdfa.firebaseapp.com",
    projectId: "clone-5cdfa",
    storageBucket: "clone-5cdfa.appspot.com",
    messagingSenderId: "425661364456",
    appId: "1:425661364456:web:4cfffd11e072d3f308f15d",
    measurementId: "G-KL8VXF5DGD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };