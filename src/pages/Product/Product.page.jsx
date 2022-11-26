import { useLocation, useParams } from 'react-router-dom';
import './Product.page.scss';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Context from '../../context';

export default function Product(props) {
    const context = useContext(Context);
    let { id } = useParams();

    const URL = 'https://fakestoreapi.com/products/' + id;
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        axios.get(URL).then((response) => {
            setProductData(response.data);
        });
    }, []);


    var contenidoProductos = "";
    if (productData != 0 && productData != undefined) {
        contenidoProductos += "<div style='max-width: 300px !important; padding:20px;'>";
        contenidoProductos += "<img style='max-width: 300px !important; max-height:250px !important;object-fit: cover;'  src='" + productData['image'] + "'>" + "<br/><strong>Categoría:</strong>" + productData['category'] + "<br/><strong>Nombre:</strong>" + productData['title'] + "<br/><strong>Precio:</strong>" + productData['price'] + "€";
        contenidoProductos += "</div>";
    }

    return (
        <Context.Consumer>
            {context => (
                <div className="Product allWidth" style={
                    { backgroundColor: context.esDeDia ? "#ffffff" : "#282c34" }}>
                    <div className={context.esDeDia ? 'd-flex text-dark' : 'd-flex text-white'} dangerouslySetInnerHTML={{ __html: contenidoProductos }}>
                    </div>

                    <Link className="btn btn-light" to='/store'>Volver a Store</Link>
                </div>
            )}
        </Context.Consumer>
    );
}