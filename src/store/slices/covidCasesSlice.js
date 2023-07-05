import { createSlice } from "@reduxjs/toolkit";
import { fetchCovidCases } from "../thunks/fetchCovidCases";

const covidCasesSlice = createSlice({
  name: 'covidCases',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  // reducers: {}
  extraReducers(builder) {
    builder.addCase(fetchCovidCases.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCovidCases.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCovidCases.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
});

export const covidCasesReducer = covidCasesSlice.reducer;