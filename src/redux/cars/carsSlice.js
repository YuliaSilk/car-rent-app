import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const advertsSlice = createSlice({
    name: "adverts",
    initialState: {
      adverts: [],
      selectedAdvert: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAdverts.fulfilled, (state, action) => {
          state.adverts = action.payload;
        })
       
    },
  });

export const advertsReducer = advertsSlice.reducer;