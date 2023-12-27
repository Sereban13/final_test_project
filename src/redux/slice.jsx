import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const caloriesSlice = createSlice({
  name: 'calories',
  initialState,
  reducers: {
    fetchCaloriesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchCaloriesSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchCaloriesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCaloriesStart,
  fetchCaloriesSuccess,
  fetchCaloriesFailure,
} = caloriesSlice.actions;

export default caloriesSlice.reducer;
