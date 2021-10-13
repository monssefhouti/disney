import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from "../features/movies/movieSlice";
import userslice from "../features/user/userslice";


export const store = configureStore({
  reducer: {
    movie:moviesSlice,
    users:userslice,
  }
});
