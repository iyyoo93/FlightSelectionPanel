import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import airLineReducer from '../features/reducer/airLineInfo';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    airlineInfo: airLineReducer,
  },
});
