import { createSlice } from "@reduxjs/toolkit";

type ThemeSate = boolean;
const themFromLocalStorage = !!localStorage.getItem('movies-theme');

const initialState: ThemeSate = themFromLocalStorage;

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if (state) {
                localStorage.removeItem('movies-theme');
            } else {
                localStorage.setItem('movies-theme', '_');
            }
            return (state = !state);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;