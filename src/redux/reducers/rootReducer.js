
import { combineReducers } from "redux";
import products from "./index";

export const rootReducer = combineReducers(
    {
        // state name : reducer thath will controll it
        products: products
        //  ... add more states and reducers to include them in the store
    }
)