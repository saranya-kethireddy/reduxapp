import { createSlice } from "@reduxjs/toolkit";


 export const userSlice = createSlice({
    name: "user",
    initialState: { value : {name: "saranya", age: 22, email: "sar@gmail.com"} },
    reducers:{
        login: ( state,action ) => {
            state.value = action.payload
        },

    },
});

export default userSlice.reducer;