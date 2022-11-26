
import { Link } from 'react-router-dom';
import { LinkPropio } from '../../components/LinkPropio.component';
import React, { useState, useEffect, useContext, memo } from 'react';
import { of } from 'rxjs';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
    setProductsData
} from '../../redux/actions';
import Context from '../../context';

import '../../pages/Store/Store.page.scss';
import './ProductList.component.scss';


function ProductList(props) {
    let productLink = (id) => {
        return {
            pathname: '/product/' + id
        }
    }

    return (
        <Context.Consumer>
            {context => (
                <div className="overflow-700 flex">
                    {
                        props.products.map((element, index) => (
                            // <div className='div' key={index}>
                            //     <Link to={productLink(element.id)} className="link">
                            //         <img className='setImages img' src={element.image} alt="" />
                            //         <br />
                            //         <div className={context.esDeDia ? 'text-dark' : 'text-white'}>
                            //             <strong>Nombre:</strong> {element.title}
                            //         </div>
                            //         <br />
                            //         <div className={context.esDeDia ? 'text-dark' : 'text-white'}>
                            //             <strong>Precio:</strong>{element.price}€
                            //         </div>
                            //     </Link>

                            // </div>
                            <div className="card m-2 p-4" key={index}>
                                <Link to={productLink(element.id)} className="link">
                                    <img className="card-img-top" src={element.image} alt="" />
                                    <div className="card-body">
                                    <h5 className='card-title text-dark'><strong>Nombre:</strong> {element.title}</h5>
                                    <br />
                                    <div className='card-text text-dark'>
                                        <strong>Precio:</strong>{element.price}€
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}
                </div>
            )}
        </Context.Consumer>
    );
}

export default memo(ProductList);