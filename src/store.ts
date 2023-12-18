import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import movieReducer from './features/movies/movieSlice';

export const store = configureStore({
    reducer: {
        darkTheme: themeReducer,
        movies: movieReducer
    },
})

export type RootSate = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;