import { getDatabase } from "firebase/database";
// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCvsnl_9_tLqFABG98O5kTAxt8ScSlfsvE",
    authDomain: "vaku-89121.firebaseapp.com",
    databaseURL: "https://vaku-89121-default-rtdb.firebaseio.com",
    projectId: "vaku-89121",
    storageBucket: "vaku-89121.appspot.com",
    messagingSenderId: "814614085172",
    appId: "1:814614085172:web:7e49116c626e037e4c9461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db = firebase.firestore(app);
export const db = getDatabase(app);
// const analytics = getAnalytics(app);
export default app;
