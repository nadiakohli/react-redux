import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  people: [],
  error: ''
};

export const fetchPeople = createAsyncThunk('person/fetchPeople', () => {
  return axios
    .get('https://swapi.dev/api/people')
    .then((response) => response.data)
});

const peopleSlice = createSlice({
  name: 'person',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPeople.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.loading = false;
      state.people = action.payload.results;
      state.error = '';
    })
    builder.addCase(fetchPeople.rejected, (state, action) => {
      state.loading = false;
      state.people = [];
      state.error = action.error.message;
    })
  },
});

export default peopleSlice.reducer;
