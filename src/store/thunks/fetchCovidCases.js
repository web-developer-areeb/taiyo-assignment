import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchCovidCases = createAsyncThunk('covidCases/fetch', async () => {
  const response = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");

  return response.data;
});

// When a thunk is created three properties associated with it 
// fetchUsers.pending: 'users/fetch/pending'
// fetchUsers.fulfilled: 'users/fetch/fulfilled'
// fetchUsers.rejected: 'users/fetch/rejected'
// These could be used in reducer. 

export { fetchCovidCases };