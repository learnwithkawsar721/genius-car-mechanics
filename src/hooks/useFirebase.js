import { useState } from "react";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initilazeFirebaseAuth from "../pages/Auth/Firebase/Fitebase.init";
import { useEffect } from "react";
initilazeFirebaseAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, [auth]);

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return { user, signInGoogle, logOut, setUser };
};

export default useFirebase;
