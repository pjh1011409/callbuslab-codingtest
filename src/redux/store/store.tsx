import { configureStore } from '@reduxjs/toolkit';
import inputReducer from '../reducer/inputSlice';

const store = configureStore({
  reducer: { input: inputReducer },
});

export default store;
