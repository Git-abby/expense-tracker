import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// import firebase from 'firebase/app';
// import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgebSu1IMBPY_0cYWVEp2TS2sIY_aEvIU",
  authDomain: "budget-planner-57a0f.firebaseapp.com",
  databaseURL: "https://budget-planner-57a0f-default-rtdb.firebaseio.com",
  projectId: "budget-planner-57a0f",
  storageBucket: "budget-planner-57a0f.appspot.com",
  messagingSenderId: "98019013894",
  appId: "1:98019013894:web:bded9e590e210ca89f9a87",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const expensesCollection = collection(firestore, 'expenses');

export { firestore, expensesCollection };
// firebase.initializeApp(firebaseConfig);
//  export const firestore =  firebase.firestore();
