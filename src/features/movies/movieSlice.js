import {createSlice} from "@reduxjs/toolkit";

const initialState={
    recommends:[],
    trending:[],
    NewDisney:[],
    Original:[]
}
const moviesSlice=createSlice({

    name:"movie ",
    initialState,
    reducers:{
                setMovies:(state , action) => {
                    state.recommends=action.payload.recommends
                    state.trending=action.payload.trending
                    state.NewDisney=action.payload.NewDisney
                    state.Original=action.payload.Original}
                }


});
export const { setMovies } = moviesSlice.actions;
export const selectRecommends=(state) => state.movie.recommends;
export const selectTrending=(state) => state.movie.trending;
export const selectNewDisney=(state) => state.movie.NewDisney;
export const selectOriginal=(state) => state.movie.Original;

export default moviesSlice.reducer;