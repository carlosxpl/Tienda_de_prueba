import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import { Navigate } from 'react-router-dom';
import About from './pages/About/About.page';
import Store from './pages/Store/Store.page';
import Product from './pages/Product/Product.page';
import Nav from './components/Nav/Nav.component';
import Register from './pages/Register/Register.page';
import Login from './pages/Login/Login.page';
import { ProtectedRoute } from './components/ProtectedRoute.component';
import { RoutePropio } from './components/RoutePropio.component';

import Context from './context';


export default function App() {
  // Estado inicial a enviarle al contexto, creado con hooks
  // ya que estamos trabajando con componentes de función.
  const [products, setProducts] = useState([]);
  const [isLogged, setLogged] = useState(false);
  const [esDeDia, setesDeDia] = useState(false);

  // Método 'reducer' para vaciar la lista de productos.
  let deleteProducts = () => setProducts([]);

  // Método 'reducer' para actualizar la lista de productos.
  let addProducts = (newProducts) => setProducts(newProducts);
  let loginSession = (logged) => setLogged(logged);
  let botonDia = (data) => setesDeDia(data);
  return (
    <div className="App">
      <Context.Provider className="App" value={{
        products: products,
        isLogged: isLogged,
        esDeDia: esDeDia,
        addProducts: addProducts,
        loginSession: loginSession,
        botonDia: botonDia,
        deleteProducts: deleteProducts
      }}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<ProtectedRoute />}>
              <Route exact path="/store" element={<Store />} />
              <Route exact path="/about" element={<About />} />
              <Route path="/product/:id" element={<Product />} />
            </Route>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />

          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}