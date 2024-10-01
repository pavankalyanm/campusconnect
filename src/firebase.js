
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD3WikeIUtD43svIboomhqqxpCVYyQKU40",
  authDomain: "vali-11506.firebaseapp.com",
  projectId: "vali-11506",
  storageBucket: "vali-11506.appspot.com",
  messagingSenderId: "172499113762",
  appId: "1:172499113762:web:9956616af65b586627777b",
  measurementId: "G-EYWP3TBX3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);



