import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {
        name: "youssif",
        email: "youssif@gmail.com"
    }
}
const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        handleUserName: (state, nameValue) => {
            // Use spread operator to create a shallow copy of the state
            return { ...state, userData: { ...state.userData, name:nameValue.payload } };
        },
        handleUserEmail: (state, emailValue) => {
            // Use spread operator to create a shallow copy of the state
            return { ...state, userData: { ...state.userData, email:emailValue.payload } };
        }
    }
})

export const { handleUserName, handleUserEmail } = userSlice.actions;
export default userSlice.reducer;
