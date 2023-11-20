// redux - is a library for state management
// redux toolkit - redux team suggested to make use of redux-toolkit (set of standard mechanism to use redux)

import { configureStore, createSlice } from "@reduxjs/toolkit";

const callMe = () => {
    console.log('multiple-reducers');

    // createSlice is an API that is a standard approach of writing redux logic

    const userSlice = createSlice({
        initialState: {
            name: '',
            age: 0
        },
        name: 'user',
        reducers: {
            changeName: (state, action) => {
                state.name = action.payload;
            },
            changeAge: (state, action) => {
                state.age = action.payload;
            }
        },
    });

    // actions
    const { changeName, changeAge } = userSlice.actions;

    const tweetSlice = createSlice({
        initialState: {
            tweetsArr: []
        },
        name: 'tweets',
        reducers: {
            addTweet: (state, action) => {
                state.tweetsArr.push(action.payload);
            }
        }
    });

    // actions
    const { addTweet } = tweetSlice.actions;

    // store
    const store = configureStore({
        reducer: {
            userReducer: userSlice.reducer,
            tweetReducer: tweetSlice.reducer
        }
    });

    // can we subscribe to the store
    store.subscribe(() => { console.log('store', store.getState()) });

    // perform the actions
    store.dispatch(changeName('Sachin Nagraj'));
    store.dispatch(changeAge(27));
    store.dispatch(addTweet('This is my first tweet!'));
    store.dispatch(addTweet('Learn Redux!'));
};

export default callMe;