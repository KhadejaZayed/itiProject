import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchproduct = createAsyncThunk("productslice/fetchproduct", async () => {
    const res = await fetch("https://vivacious-gentle-divan.glitch.me/products")
    const data = await res.json()
    return data
})
export const productslice = createSlice({
    initialState: [],
    name: "productslice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchproduct.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default productslice.reducer
