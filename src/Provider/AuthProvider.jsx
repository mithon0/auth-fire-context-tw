import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
    }
    const authInfo = {

        createUser,
        logInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;