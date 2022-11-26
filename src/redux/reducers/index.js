
import { ACTIONS } from '../actions';


const initialState = {
    products: []
};

export const products = (state = initialState.products, action) => {
    switch (action.type) {
        case ACTIONS.SETDATA:
            state = action.payload;

            return [...state];
        default:
            return [...state];
    }
}

export default products;
