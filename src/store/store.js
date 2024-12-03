import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/ModelSlices';

export const store = configureStore({
  reducer: {
    modals: modalReducer,
  },
});
