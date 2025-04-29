import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./thunk";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: [],
        loading: true,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMultiplePokemonById.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchMultiplePokemonById.rejected, (state) => {
            state.loading = false
        })
        .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
    }
})