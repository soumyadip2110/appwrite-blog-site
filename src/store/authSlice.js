import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLoggedIn: false,
    userData: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.userLoggedIn = true
            state.userData = action.payload
        },
        logOut: (state) => {
            state.userLoggedIn = false
            state.userData = null
        }
    }
});

export const { logIn, logOut } = authSlice.actions

export default authSlice.reducer
