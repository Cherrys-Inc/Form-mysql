import { createSlice } from "@reduxjs/toolkit";
export const userSlice= createSlice({
    name:"user",
    initialState:{user:null,mobileVerified:false},
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload;
        },
        updateMobileVerification:(state,action)=>{
            state.mobileVerified=action.payload
        },
        clearUser:(state)=>{
            state.user=null;
        }

    }
})

export const {setUser,clearUser,updateMobileVerification} =userSlice.actions;

export const selectUser =(state) => state.user;

export default userSlice.reducer;
