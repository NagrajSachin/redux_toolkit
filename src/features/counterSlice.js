import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    state: 'idle'
}

const counterSlice = createSlice({
    initialState,
    name: 'counter',
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

// actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;