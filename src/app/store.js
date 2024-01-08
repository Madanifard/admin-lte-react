import { configureStore } from '@reduxjs/toolkit';
import leftMenuReducer from './leftMenu/leftMenuSlice';

export default configureStore({
  reducer: {
    leftMenu: leftMenuReducer,
  },
});