import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDBB9rYGJX-2EwbjoFjbcUjKYcC7Dq_jE",
  authDomain: "coderhouse-ecommerce-cf847.firebaseapp.com",
  projectId: "coderhouse-ecommerce-cf847",
  storageBucket: "coderhouse-ecommerce-cf847.appspot.com",
  messagingSenderId: "783162361659",
  appId: "1:783162361659:web:c7b7935d2778047e65591e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

