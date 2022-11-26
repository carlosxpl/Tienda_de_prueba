export const ACTIONS = {
    SETDATA: "SET_PRODUCTS_DATA",
    LOAD_PRODUCTS: "LOAD_PRODUCTS",
}

export const setProductsData = (data) => {
    return {
        type: ACTIONS.SETDATA,
        payload: data
    }
}
export const loginSession = (data) => {
    return {
        type: ACTIONS.SETDATA,
        payload: data
    }
}


export const loadProducts = () => {
    return {
        type: ACTIONS.LOAD_PRODUCTS
    }
}

// export const PRODUCTS_ACTIONS = {
//     SET_PRODUCTS: 'SET_PRODUCTS',
//     DELETE_PRODUCTS: 'DELETE_PRODUCTS',
//     LOAD_PRODUCTS: 'LOAD_PRODUCTS'
// }

// export const loadProducts = () => {
//     return {
//         type: PRODUCTS_ACTIONS.LOAD_PRODUCTS
//     }
// }


