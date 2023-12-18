import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk(
    "movies/getMovies", 
    async (data, thunkApi) => {
        try {
            const reposne = {
                results: [
                    {
                        id: 0,
                        name: "Hellow"
                    },
                    {
                        id: 1,
                        name: "lunna"
                    },
                    {
                        id: 2,
                        name: "derro"
                    }
                ]
            }
            return reposne;
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message);
        }
        
    }
);

interface movieState {
    loading: boolean,
    error: null | string,
    data: null | {results: any[]}
}

const initialState: movieState = {
    loading: false,
    error: null,
    data: null
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getMovies.pending, (state) => {
            state.loading = true;
        });
        
        builder.addCase(
            getMovies.fulfilled, 
            (state, action: PayloadAction<{ results: any[]} >) => {
            state.loading = false;
            state.data = action.payload;
            }
        );

        builder.addCase(
            getMovies.rejected,
            (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            }
        );
    }
})

export default movieSlice.reducer;