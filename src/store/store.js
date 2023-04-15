import { combineReducers, createStore } from "redux";
import { mainReducerCards } from "./mainReducerCards";
import { extraReducerCards } from "./extraReducerCards";

const rootReducer = combineReducers({
    extra: extraReducerCards,
    main: mainReducerCards
})
export const store = createStore(rootReducer)
