import { useState } from 'react';
import './LoggedHeader.component.scss';
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';

export default function LoggedHeader(props) {
    const logged = useSelector(state => state.logged);
    const dispatch = useDispatch();

    const {clickLogin, clickLogout } = props;

    return (
        <div className='d-flex justify-content-between w-100' style={{
            backgroundColor:'#505050'
        }}>
            <div className='logged-container' style={{color:'white'}}>
                ReactJS | Redux
            </div>
            <div className='logged-container'>
                <button onClick={clickLogin} className={logged ? 'd-none' : 'logged'}>Login</button>
                <button onClick={clickLogout} className={logged ? 'logged' : 'd-none'}>Logout</button>
            </div>
        </div>
    );
}