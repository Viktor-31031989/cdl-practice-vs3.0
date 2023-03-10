import {combineReducers, createStore} from "redux";
import {mainReducer} from "./mainReducer";
import {extraReducer} from "./extraReducer";

const rootReducer = combineReducers({
    extra: extraReducer,
    main: mainReducer
})
export const store = createStore(rootReducer)
