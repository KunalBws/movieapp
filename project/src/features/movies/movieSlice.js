import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (term) => {
      // const movieText = "Justice League";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=movie`
      );
      return response.data;
    }
  );

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
      // const seriesText = "Daredevil";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=series`
      );
      return response.data;
    }
  );

  export const fetchAsyncMovieorShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieorShowDetail",
    async (id) => {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&i=${id}&Plot=full`
      );
      return response.data;
    }
  );

const initialState = {
    movies:{},
    shows:{},
    selectMovieOrShow:{}
}

export const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers:{
        // addMovies : (state, {payload}) => {
        //     state.movies = payload
        // },
        removeSelectedMovieOrShow: (state) => {
          state.selectMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending....')
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log('fetched successfully')
            return {...state, movies : payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected....!')
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log('fetched successfully')
            return {...state, shows : payload}
        },
        [fetchAsyncMovieorShowDetail.fulfilled]: (state, {payload}) => {
          console.log('fetched successfully')
          return {...state, selectMovieOrShow : payload}
      }
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow
export default movieSlice.reducer