import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password, name) => {
        return createUserWithEmailAndPassword(auth, email, password, name)
    };
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    // observe auth state change for hold logIn data 
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        };
    },[]);

    const logOut =()=>{
      return signOut(auth)
    }



    const authInfo = {
        user,
        createUser,
        logInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;