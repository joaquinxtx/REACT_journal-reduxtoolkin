import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
     name: 'name',
     initialState: {
        status:'checking',//'checking' , 'autenticate'
        uid: null,
        email:null,
        displayName:null,
        photoURL:null,
        errorMessage:null,
     },
     reducers: {
        login:(state,{payload})=>{
            state.status='authenticated';//'checking' , 'autenticate'
            state.uid= payload.uid;
            state.email=payload.email;
            state.displayName=payload.displayName;
            state.photoURL=payload.photoURL;
            state.errorMessage=null;

        },
        logout:(state,{payload})=>{
            state.status='not-authenticated';//'checking' , 'autenticate'
            state.uid= null;
            state.email=null;
            state.displayName=null;
            state.photoURL=null;
            state.errorMessage=payload?.errorMessage;
         },
        chekingCredential:(state)=>{
            state.status= 'checking';
        }
     },
});


// Action creators are generated for each case reducer function
export const { login ,logout , chekingCredential } = authSlice.actions;