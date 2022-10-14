import { createSlice } from "@reduxjs/toolkit";
export const userSlice= createSlice({
    name:"user",
    initialState:{user:null,mobileVerified:false},
    reducers:{
        addUser:(state,action)=>{
            state.user=action.payload;
        },
        addVerification:(state,action)=>{
            state.mobileVerified=action.payload
        },
        removeUser:(state)=>{
            state.user=null;
        }

    }
})

export const {addUser,removeUser,addVerification} =userSlice.actions;

export const selectUser =(state) => state.user;

export default userSlice.reducer;
