import {combineReducers, configureStore} from "@reduxjs/toolkit";
// import Reducer from "./Reducer";
import toolkitSlice from './Slice';
const rootReducer = combineReducers({
    // toolkit:Reducer
    toolkit:toolkitSlice
})

export const store = configureStore({
    // reducer: rootReducer,
    reducer: toolkitSlice,

})