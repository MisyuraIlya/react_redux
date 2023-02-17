import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    count:0,
    todos:['eat', 'training', 'code']
}

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')

export default createReducer(initialState,{
    [increment]: function(state) {
        state.count = state.count +1
    },
    [decrement]: function(state) {
        state.count = state.count -1
    },
})