import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initilazeFirebaseAuth = () => {
  initializeApp(firebaseConfig);
};

export default initilazeFirebaseAuth;
