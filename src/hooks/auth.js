import React,  {useContext, createContext, useState, useCallback } from "react";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Auth = createContext({})

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const login = useCallback(async (email, password) => {
        
       const response = await auth().signInWithEmailAndPassword(email, password)
       const userData = await firestore().collection("users").doc(response.user.uid).get()
       setUser(userData.data())
    },[])

    const cadastro = useCallback(async (name, email, password) => {
        const response = await auth().createUserWithEmailAndPassword(email, password)
         await firestore().collection("users").doc(response.user.uid).set({
            name: name,
            email: response.user.email
        });
        setUser({name,email})
        
     },[])

     const deslogar = useCallback(async () => {
        await auth().signOut();
        setUser(null)
     },[])

    return (
        <Auth.Provider value={{ login, user, isLogged: !!user, cadastro, deslogar }}>
            {children}
        </Auth.Provider>
    )
}

function useAuth(){
    const context = useContext(Auth)
    if(!context) throw new Error("Context is not provider")
    return context
}

export { AuthProvider, useContext, useAuth }