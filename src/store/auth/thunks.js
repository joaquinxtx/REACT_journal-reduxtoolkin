

import { async } from "@firebase/util";
import { Password } from "@mui/icons-material";
import { loginWithEmailPasswor, logoutFirebase, registerUser, singInWithGoogle } from "../../firebase/prividers";
import { clearNotesLogout } from "../journal/journalSlice";
import { chekingCredential, login, logout } from "./authSlice";

export const checkingAuthentication = (email,Password)=>{
    return async(dispatch )=>{
        dispatch(chekingCredential())
    }
}

export const startGoogleSingIn = ()=>{
    return async(dispatch) =>{
        dispatch(chekingCredential())

        const result = await singInWithGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email,password,displayName}) =>{
    return async(dispatch)=>{
        dispatch(chekingCredential())

        const {ok,uid,photoURL,errorMessage} = await registerUser({email,password,displayName});

        if( !ok ) return dispatch (logout({errorMessage}))
        dispatch (login ({uid,displayName,email,photoURL}))
       
    }
}


export const startLoginWithEmailPassword=({email,password})=>{
    return async( dispatch )=>{
        dispatch(chekingCredential());
        const {ok,uid,photoURL,errorMessage}=await loginWithEmailPasswor({email,password});
        if(!ok)return dispatch (logout({errorMessage}))
        dispatch (login ({uid,displayName,email,photoURL}))
    }
}

export const startLogout = ()=>{
    return async(dispatch)=>{
        await logoutFirebase();

        dispatch(clearNotesLogout())
        
        dispatch(logout());
    } 
}


