
import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

 
const googleProvider = new GoogleAuthProvider();


export const singInWithGoogle = async() => {

    try {
        const result = await signInWithPopup(FirebaseAuth,googleProvider);
        // const credential = GoogleAuthProvider.credentialFromResult(result)
        // console.log(credential);
        const {displayName,email,photoURL,uid} = result.user;

        return{
            ok:true,
            // user Info
            displayName,email,photoURL,uid
        }
    } catch (error) {
        console.log(error)
        const errorCode=error.code;
        const errorMessage=error.message;
        const email=error.customData.email;
        const credential=GoogleAuthProvider.credentialFromError(error);


        return{
            ok:false,
            errorMessage
        }
    }

}


export const registerUser=async({email,password,displayName})=>{
    try {
      const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password);
      const {uid,photoURL}=resp.user;
      await updateProfile(FirebaseAuth.currentUser,{ displayName })

      return{
        ok: true,
        uid,photoURL,email,displayName

      }
      

    } catch (error) {
        return{
            ok:false,
            errorMessage:error.message

        }
    }
}

export const loginWithEmailPasswor=async({email,password})=>{

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth,email,password)
        const{uid,photoURL,displayName}=resp.user;
        return{
            ok:true,
            uid,photoURL,displayName
        }
    } catch (error) {
        return{
            ok:false,
            errorMessage:error.message
        }
    }

}

export const logoutFirebase =async()=>{
    return await FirebaseAuth.signOut();
}