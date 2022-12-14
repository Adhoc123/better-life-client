import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    ///creating auth for create, signin and login, logout

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    ///for google authentication
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }
    ///for login into the same page where login page popped up
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe();
    },[])
    const authInfo = {user, loading, createUser, signIn, logOut, providerLogin, updateUserProfile};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;