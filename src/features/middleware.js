// redux - is a library for state management
// redux-toolkit - redux team suggested to make use of redux-toolkit (set of standard mechanism to use redux)

import { configureStore, createSlice } from "@reduxjs/toolkit";
import logger from 'redux-logger';

const callMe = () => {
    console.log('basic-redux-setup');

    // createSlice is an API that is a standard approach of writing redux logic

    const counterSlice = createSlice({
        initialState: {
            value: 0
        },
        name: 'counter',
        reducers: {
            increment: state => {
                // Redux toolkit allow us to write 'mutating' logic in reducers.
                // It doesn't actually mutate the state because it uses the Immer library,
                // which detects changes to a "draft state" and produce a brand new immutable state
                // based off those changes
                state.value += 1;
            },
            decrement: state => {
                state.value -= 1;
            }
        },
    });

    // actions
    const { increment, decrement } = counterSlice.actions;

    // Redux middleware - allows you to intercept every action sent to the reducer so you can make changes to the action or cancel the action.
    // Middleware helps you with logging, error reporting, making async requests and lot more things.

    // Custom Middleware - myLogger
    const myLogger = (store) =>
                        (next) => 
                            (action) => {
                                console.log('ActionFired', action);
                                console.log('Original State', store.getState());
                                next(action); // calling next middleware function
                            }   

    // store
    const store = configureStore({
        reducer: counterSlice.reducer,
        middleware: [myLogger, logger]
    });

    // can we subscribe to the store
    store.subscribe(() => { console.log(store.getState()) });

    // perform the actions
    store.dispatch(increment());
    store.dispatch(increment());
    store.dispatch(decrement());
}

export default callMe;