import React from 'react';

// Estado inicial de la aplicación.
const initialState = {
    products: [],
    isLogged: false,
    loginSession: (logged) => {},
    addProducts: (products) => { },
    deleteProducts: () => { }
}

export default React.createContext(initialState)