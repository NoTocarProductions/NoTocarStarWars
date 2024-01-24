import { createSlice } from '@reduxjs/toolkit';

const filmsSlice = createSlice({
    name: 'films',
    initialState: { data: null },
    reducers: {
        setFilmsData: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { setFilmsData } = filmsSlice.actions;
export default filmsSlice;