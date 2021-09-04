import { combineReducers } from "redux";
import { increaseReducer } from "./increaseReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    increaseReducer,
    userReducer
})