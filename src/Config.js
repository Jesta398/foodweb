//import firebase, { initializeApp } from "firebase/compat/app";
//import "firebase/compat/database";
//import 'firebase/compat/firestore';
//import 'firebase/compat/storage';
//import 'firebase/compat/auth';
import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyCR49KHLRr1y_7QyxGNlXq5yazL8_7uFeI",
   authDomain: "crud-project-react-93a69.firebaseapp.com",
   projectId: "crud-project-react-93a69",
   storageBucket: "crud-project-react-93a69.appspot.com",
   messagingSenderId: "1059363411180",
   appId: "1:1059363411180:web:6841ed4f5f4c15ab4dc1c9"
};
// const firebaseConfig = {
//    apiKey: "AIzaSyBPpn7YN6ytpvNB1BSXBCIlbW8D--CnwhE",
//    authDomain: "foodhub-e4d05.firebaseapp.com",
//    projectId: "foodhub-e4d05",
//    storageBucket: "foodhub-e4d05.appspot.com",
//    messagingSenderId: "497185462406",
//    appId: "1:497185462406:web:aebf75cfb2a53f797d5907",
//    measurementId: "G-WB1D1NY989"
//  };
//  const firebaseConfig = {
//    apiKey: "AIzaSyCz-CDWb_vTWFQpvTllntRAEIghs8zND-s",
//    authDomain: "foodwebapp-65963.firebaseapp.com",
//    projectId: "foodwebapp-65963",
//    storageBucket: "foodwebapp-65963.appspot.com",
//    messagingSenderId: "711117537193",
//    appId: "1:711117537193:web:9ccaa51610956e94ac0eb8",
//    measurementId: "G-DY28TX8B1S"
//  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();



export {auth, db, storage};

