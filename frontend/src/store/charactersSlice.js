import { createSlice } from '@reduxjs/toolkit';

const charactersSlice = createSlice({
    name: 'characters',
    initialState: { data: null },
    reducers: {
        setCharactersData: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { setCharactersData } = charactersSlice.actions;
export default charactersSlice;