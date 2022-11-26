
import './Store.page.scss';
import { Link, useLocation } from 'react-router-dom';
import { LinkPropio } from '../../components/LinkPropio.component';
import React, { useState, useEffect, useContext, useHistory, memo, useMemo } from 'react';
import { of } from 'rxjs';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
    setProductsData, loadProducts
} from '../../redux/actions';
import Context from '../../context';
import ProductList from '../../components/ProductList/ProductList.component';
import { rootSaga } from '../../redux/sagas';


function Store(props) {
    const context = useContext(Context);

    // const history = useHistory();
    const productos = useSelector(state => state.products);
    const dispatch = useDispatch();

    let abrirProducto = () => {
        let id = Math.floor(Math.random() * 20 + 1);

        // Nos devuelve un producto con ID entre 1 y 20 (Ambos incluidos).
        props.history.push({
            pathname: '/product/' + id,
            state: {
                id: id,
                vistoEnStore: true,
                enOferta: false
            }
        })
    }

    const URL = 'https://fakestoreapi.com/products'
    const [productsList, setProductsList] = useState([]);

    // useEffect(() => {
    //     if (productos.length > 0) {
    //         setProductsList(productos);
    //     } else {
    //         axios.get(URL).then((response) => {
    //             setProductsList(response.data);
    //             if (productos.length === 0) {
    //                 dispatch(setProductsData(response.data));
    //             }
    //         });
    //     }
    // }, []);

    // var contenidoProductos = "";
    // if (productos.length > 0) {
    //     for (let i = 0; i < productos.length; i++) {
    //         contenidoProductos += "<div style='max-width:200px !important; padding:20px; cursor:pointer;'>";
    //         contenidoProductos += "<Link href='/product/" + productos[i]['id'] + "' style='text-decoration:none; color:white;'><img style='max-width: 200px !important; max-height:250px !important;object-fit: cover;' className='setImages' src='" + productos[i]['image'] + "'>" + "<br/><strong>Nombre:</strong>" + productos[i]['title'] + "<br/><strong>Precio:</strong>" + productos[i]['price'] + "€</Link>";
    //         contenidoProductos += "</div>";
    //     }
    // }



    /** Métodos del ciclo de vida */
    // useEffect(() => {
    //     dispatch(loadProducts());
    // }, []);

    // const productosMostrados = useMemo(
    //     () => productos.filter(producto => {
    //         console.log("Retornamos el filtrado");
    //         return producto <= productosMostrados;
    //     })
    //     ,
    //     [productos, productosMostrados]
    // );

    const memoizedValue = useMemo(() => dispatch(loadProducts()), []);

    return (
        <div className="Store allWidth" style={
            { backgroundColor: context.esDeDia ? "#ffffff" : "#282c34" }}>
            <h1 className={context.esDeDia ? 'text-dark' : 'text-white'}>Bienvenido a mi tienda</h1>
            {/* 
            <button className="Product-link" onClick={abrirProducto}>
                Ir al producto
            </button> */}
            <div className='' 
            // dangerouslySetInnerHTML={{ __html: contenidoProductos }}
            >
                <ProductList products={productos}></ProductList>
            </div>
            <Link to='/about' className="Nav-link">
                Navegar al About
            </Link>

        </div>
    );
}

export default memo(Store);