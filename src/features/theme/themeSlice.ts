import { createSlice } from "@reduxjs/toolkit";

type ThemeSate = boolean;

const initialState: ThemeSate = false;

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            return (state = !state);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;